import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { OverlayPanel } from 'primereact/overlaypanel';
import { Tree } from 'primereact/tree';
import { useEffect, useRef, useState } from 'react';
import { UtilsHelper } from '../../helpers/UtilsHelper';
function DatePicker(props) {
    let { label, hasSelected, variant, dados, setDadosRetorno } = props;
    const ref = useRef(null);
    const [isMounted, setIsMounted] = useState(false);
    const [selectedItems, setSelectedItems] = useState(null);
    useEffect(() => {
        if (hasSelected && !isMounted) {
            setIsMounted(true);
        }
        if (!hasSelected && isMounted) {
            setIsMounted(false);
        }
    }, [hasSelected]);
    function inicializaNodeData() {
        //inicializa os nodes
        let treeNode = new Array();
        //pega os anos
        let anos = Array.from(new Set(dados.map((a) => a.ano)));
        anos.forEach((anoValue, anoIndice, anoArray) => {
            //carrega o meses do ano atual
            let meses = Array.from(new Set(dados.filter((a) => a.ano === anoValue).map((a) => a.mes)));
            //cria uma lista de nodes
            let anoMesNodes = new Array();
            //faz loop nos meses criando os nodes
            meses.forEach((mesValue, mesIndice, mesArray) => {
                //carrega o meses do ano atual
                let dias = Array.from(new Set(dados.filter((a) => a.ano === anoValue && a.mes === mesValue).map((a) => a.data)));
                //cria uma lista de nodes
                let anoMesDiaNodes = new Array();
                // faz loop nos dias do mes
                dias.forEach((diaValue, diaIndice, diaArray) => {
                    // cria o node do mes
                    let anoMesDiaNode = {
                        key: diaValue.toString(),
                        label: UtilsHelper.formatDate(new Date(diaValue)),
                        data: new Date(diaValue),
                        children: []
                    };
                    anoMesDiaNodes.push(anoMesDiaNode);
                });
                // cria o node do mes
                let anoMesNode = {
                    key: 'prefix-' + anoValue + '-' + mesValue,
                    label: UtilsHelper.getMonthDescription(Number.parseInt(mesValue)),
                    data: mesValue,
                    children: anoMesDiaNodes
                };
                anoMesNodes.push(anoMesNode);
            });
            // cria o node do ano
            let anoNode = {
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
    }
    ;
    function inicializaNodeDiasUteisOuCorridos(tipoDia) {
        //inicializa os nodes
        let treeNode = new Array();
        let dias = dados.map((a) => {
            return a[tipoDia];
        });
        let rangeSize = 30;
        //cria o node com todos
        let principalNode = {
            key: 'prefix-todos',
            label: 'Todos',
            data: 'Todos',
            children: new Array()
        };
        if (dias.length > 0) {
            let minValue = dias[0];
            let maxValue = dias[dias.length - 1];
            let currentMinValue = minValue;
            let currentMaxValue = (minValue + rangeSize) < maxValue ? (minValue + rangeSize) : maxValue;
            //cria uma lista de nodes
            let grupoNodes = new Array();
            // crias os agrupamentos
            while (currentMaxValue <= maxValue) {
                //carrega o meses do ano atual
                let min = currentMinValue;
                let max = currentMaxValue;
                let diasGrupo = dias.filter((a) => a >= min && a <= max);
                //cria um node
                let rangeNode = {
                    key: 'prefix-' + currentMinValue + '-' + currentMaxValue,
                    label: currentMinValue + ' - ' + currentMaxValue,
                    data: currentMinValue + ' - ' + currentMaxValue,
                    children: new Array()
                };
                //faz loop adicionando os dias
                diasGrupo.forEach((diaValue, diaIndice, diaArray) => {
                    var _a, _b;
                    //pega o dia na lista de pprops
                    let diaAtual = dados.find((a) => a[tipoDia] === diaValue);
                    if (diaAtual !== undefined) {
                        let verificaExiste = (_a = rangeNode.children) === null || _a === void 0 ? void 0 : _a.find(a => a.key === (diaAtual === null || diaAtual === void 0 ? void 0 : diaAtual.data));
                        if (!verificaExiste) {
                            // cria o node do mes
                            let diaNode = {
                                key: diaAtual === null || diaAtual === void 0 ? void 0 : diaAtual.data.toString(),
                                label: diaValue.toString(),
                                data: new Date(diaAtual === null || diaAtual === void 0 ? void 0 : diaAtual.data),
                                children: []
                            };
                            (_b = rangeNode.children) === null || _b === void 0 ? void 0 : _b.push(diaNode);
                        }
                    }
                });
                //adiciona o range node no grupo
                grupoNodes.push(rangeNode);
                //incrementa os contadores
                //verifica se ja é a ultima execução
                if (currentMaxValue === maxValue) {
                    currentMaxValue = currentMaxValue + 1;
                }
                else {
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
    }
    ;
    function onNodeChange(selected) {
        setSelectedItems(selected);
        atualizaDadosSelecionados(selected);
    }
    function inicializaNode(variant) {
        switch (variant) {
            case 1:
                return inicializaNodeData();
            case 2:
                return inicializaNodeDiasUteisOuCorridos('diasUteis');
            case 3:
                return inicializaNodeDiasUteisOuCorridos('diasCorridos');
        }
    }
    function atualizaDadosSelecionados(selected) {
        let valores = Object.keys(selected).filter(a => a.startsWith('prefix') === false);
        if (variant === 2) {
            let diasUteis = dados.filter((a) => valores.includes(a.data.toString())).map((a) => a.diasUteis);
            let datasDiasUteis = dados.filter((a) => diasUteis.includes(a.diasUteis)).map((a) => a.data);
            setDadosRetorno({ variant, periodoDatas: datasDiasUteis });
        }
        else {
            let datas = dados.filter((a) => valores.includes(a.data.toString()));
            setDadosRetorno({ variant, periodoDatas: datas.map((a) => new Date(a.data)) });
        }
    }
    return (_jsxs("div", Object.assign({ className: `
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
            ` }, { children: [_jsx("div", Object.assign({ className: "\n                        w-full\n                        font-roboto\n                        text-sm \n                        text-brand-primary-dark\n                        text-center\n                        py-2\n                    ", onClick: (e) => { var _a; (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.toggle(e); } }, { children: label })), _jsx(OverlayPanel, Object.assign({ ref: ref, onShow: () => setIsMounted(true) }, { children: _jsx(Tree, { value: inicializaNode(variant), contentClassName: "tree-content", selectionMode: "checkbox", selectionKeys: selectedItems, onSelectionChange: e => onNodeChange(e.value) }) }))] })));
}
export { DatePicker };
