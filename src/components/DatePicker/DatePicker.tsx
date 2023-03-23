import { OverlayPanel } from 'primereact/overlaypanel';
import { Tree, TreeSelectionKeys } from 'primereact/tree';
import TreeNode from 'primereact/treenode';
import { useEffect, useRef, useState } from 'react';
import { UtilsHelper } from '../../helpers/UtilsHelper';

export interface DatePickerProps {
    label: string;
    hasSelected: boolean;
    variant: 1 | 2 | 3;
    dados: any;
    setDadosRetorno: React.Dispatch<React.SetStateAction<any>>;
}

function DatePicker(props: DatePickerProps) {
    let {label, hasSelected, variant, dados, setDadosRetorno} = props;

    const ref = useRef<OverlayPanel>(null);
    const [isMounted, setIsMounted] = useState(false);

    const [ selectedItems, setSelectedItems ] = useState<TreeSelectionKeys>(null);

    useEffect(() => {
        if(hasSelected && !isMounted) {
            setIsMounted(true);
        }
        
        if(!hasSelected && isMounted) {
            setIsMounted(false);
        }
    }, [hasSelected])
    
    function inicializaNodeData(): TreeNode[] 
    {
        //inicializa os nodes
        let treeNode = new Array<TreeNode>();

        //pega os anos
        let anos = Array.from(new Set(dados.map((a: { ano: any; }) => a.ano)));
        
        anos.forEach((anoValue: any, anoIndice: any, anoArray: any) => 
        {
            //carrega o meses do ano atual
            let meses = Array.from(new Set(dados.filter((a: { ano: any; }) => a.ano === anoValue).map((a: { mes: any; }) => a.mes)));

            //cria uma lista de nodes
            let anoMesNodes = new Array<TreeNode>();
            
            //faz loop nos meses criando os nodes
            meses.forEach((mesValue: any, mesIndice: any, mesArray: any) => 
            {
                //carrega o meses do ano atual
                let dias = Array.from(new Set(dados.filter((a: { ano: any; mes: any; }) => a.ano === anoValue && a.mes === mesValue).map((a: { data: any; }) => a.data)));

                //cria uma lista de nodes
                let anoMesDiaNodes = new Array<TreeNode>();
                
                // faz loop nos dias do mes
                dias.forEach((diaValue: any, diaIndice: any, diaArray: any) => 
                {
                    // cria o node do mes
                    let anoMesDiaNode: TreeNode = {
                        key: diaValue.toString(),
                        label: UtilsHelper.formatDate(new Date(diaValue)),
                        data: new Date(diaValue),
                        children:[]
                    };

                    anoMesDiaNodes.push(anoMesDiaNode);
                })

                // cria o node do mes
                let anoMesNode: TreeNode = {
                    key: 'prefix-' + anoValue + '-' + mesValue,
                    label: UtilsHelper.getMonthDescription(Number.parseInt(mesValue)),
                    data: mesValue,
                    children: anoMesDiaNodes
                };

                anoMesNodes.push(anoMesNode);
            })

            // cria o node do ano
            let anoNode: TreeNode = {
                key: 'prefix-' + anoValue,
                label: anoValue,
                data: anoValue,
                children: anoMesNodes,
            };

            // aciciona o ano no node principal
            treeNode.push(anoNode);
        });

        //atualiza os nodes de data
        return treeNode;
    };

    function inicializaNodeDiasUteisOuCorridos(tipoDia: string): TreeNode[] 
    {
        //inicializa os nodes
        let treeNode = new Array<TreeNode>(); 
        let dias = dados.map((a: { [x: string]: any; }) => {
            return a[tipoDia];
        });
        let rangeSize = 30;
        
        //cria o node com todos
        let principalNode: TreeNode = {
            key: 'prefix-todos',
            label: 'Todos',
            data: 'Todos',
            children: new Array<TreeNode>()
        };

        if(dias.length > 0)
        {
            let minValue = dias[0];
            let maxValue = dias[dias.length - 1];

            let currentMinValue = minValue;
            let currentMaxValue = (minValue + rangeSize) < maxValue ? (minValue + rangeSize) : maxValue;

            //cria uma lista de nodes
            let grupoNodes = new Array<TreeNode>();

            // crias os agrupamentos
            while(currentMaxValue <= maxValue)
            {
                //carrega o meses do ano atual
                let min = currentMinValue;
                let max = currentMaxValue
                let diasGrupo = dias.filter((a: number) => a >= min && a <= max);
                
                //cria um node
                let rangeNode: TreeNode = {
                    key: 'prefix-' + currentMinValue + '-' + currentMaxValue,
                    label: currentMinValue + ' - ' + currentMaxValue,
                    data: currentMinValue + ' - ' + currentMaxValue,
                    children: new Array<TreeNode>()
                };

                

                //faz loop adicionando os dias
                diasGrupo.forEach((diaValue: number, diaIndice: number, diaArray: number) => 
                {
                    //pega o dia na lista de pprops
                    let diaAtual = dados.find((a: { [x: string]: number; }) => a[tipoDia] === diaValue);

                    if(diaAtual !== undefined)
                    {
                        let verificaExiste = rangeNode.children?.find(a => a.key === diaAtual?.data);
                        
                        if(!verificaExiste)
                        {
                            // cria o node do mes
                            let diaNode: TreeNode = 
                            {
                                key: diaAtual?.data.toString(),
                                label: diaValue.toString(),
                                data: new Date(diaAtual?.data),
                                children:[]
                            };

                            rangeNode.children?.push(diaNode);
                        }
                    }
                })

                //adiciona o range node no grupo
                grupoNodes.push(rangeNode);

                //incrementa os contadores
                //verifica se ja é a ultima execução
                if(currentMaxValue === maxValue)
                {
                    currentMaxValue = currentMaxValue + 1;
                }
                else
                {
                    currentMinValue = currentMaxValue + 1;
                    currentMaxValue = (currentMaxValue + rangeSize) < maxValue ? (currentMaxValue + rangeSize) : maxValue;
                }
                
            }

            //adiciona os nodes no node principal
            principalNode.children = grupoNodes;
        }

        // aciciona o ano no node principal
        treeNode.push(principalNode);
        
        //atualiza os nodes de data
        return treeNode;
    };

    function onNodeChange (selected: TreeSelectionKeys)
    {
        setSelectedItems(selected);
        atualizaDadosSelecionados(selected);
    }

    function inicializaNode(variant: number){
        switch (variant) {
            case 1:
                return inicializaNodeData();
            case 2:
                return inicializaNodeDiasUteisOuCorridos('diasUteis');
            case 3:
                return inicializaNodeDiasUteisOuCorridos('diasCorridos');
        }
    }

    function atualizaDadosSelecionados (selected: TreeSelectionKeys) 
    {
        let valores = Object.keys(selected as unknown as Array<any>).filter(a => a.startsWith('prefix') === false);
        
        if(variant === 2)
        {
            let diasUteis = dados.filter((a:any)=> valores.includes(a.data.toString())).map((a:any) => a.diasUteis);
            let datasDiasUteis = dados.filter((a:any) => diasUteis.includes(a.diasUteis)).map((a:any) => a.data);
            
            setDadosRetorno({variant, periodoDatas: datasDiasUteis});
        }
        else
        {
            let datas = dados.filter((a:any) => valores.includes(a.data.toString()));

            setDadosRetorno({variant, periodoDatas: datas.map((a:any) => new Date(a.data))});
        }
    }

    return (
        <div 
            className={`
                bg-neutral-light-base 
                w-[109px]
                h-[35px]
                border-solid 
                border-[1px] 
                rounded-[20px] 
                border-brand-primary-dark
                cursor-pointer
                select-none
                flex
                items-center
                ${isMounted && 'bg-brand-primary-dark bg-opacity-[0.15]'}
            `}>
                <div 
                    className="
                        w-full
                        font-roboto
                        text-sm 
                        text-brand-primary-dark
                        text-center
                        py-2
                    "
                    onClick={(e) => { ref?.current?.toggle(e) }}
                >
                    { label }
                </div>
                <OverlayPanel ref={ref} onShow={()=>setIsMounted(true)}>
                    <Tree 
                        value={ inicializaNode(variant) } 
                        contentClassName="tree-content" 
                        selectionMode="checkbox" 
                        selectionKeys={selectedItems} 
                        onSelectionChange={e => onNodeChange(e.value)} 
                    />
                </OverlayPanel>
        </div>
    )
}

export { DatePicker };
