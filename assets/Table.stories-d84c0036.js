var ie=Object.defineProperty;var n=(o,p)=>ie(o,"name",{value:p,configurable:!0});import{r as s,a as l,j as e,F as C,R as W}from"./jsx-runtime-8a7beee7.js";import{B as v}from"./Button-084accdd.js";import{I as h}from"./Icon-abaf465f.js";import{I as c}from"./InputText-6a38c596.js";import{V as de}from"./VoidState-7c152b17.js";import"./iframe-78ed07bd.js";import"./inheritsLoose-b4b539fe.js";import"./index-3226ecaf.js";function D({title:o,children:p=null,values:u,hasTotalizer:g=!1,maxHeight:x="430px",...m}){const N=[];s.Children.forEach(p,t=>{(t==null?void 0:t.type)===y&&N.push(t==null?void 0:t.props)});const P=n(t=>N?N.reduce(function(r,d){return r[d.field]=t[d.field],r},{}):[],"treatingValues");let b=[];const[f,R]=s.useState(b),[S,M]=s.useState(""),[j,H]=s.useState(""),[U,K]=s.useState("asc"),[B,_]=s.useState(!1),J=n(()=>_(t=>!t),"handleColumnChipExpanded");s.useEffect(()=>{b=u.map(P),R(b)},[u]),s.useEffect(()=>{let t=b.filter(r=>Object.values(r).some(d=>d.toString().toLowerCase().includes(S.toLowerCase())));R(t)},[S]);const F=n(t=>{M(t.target.value)},"handleSearchChange"),Y=n((t,r)=>{if(t){const d=[...f].sort((i,T)=>i[t]===null?1:T[t]===null?-1:i[t]===null&&T[t]===null?0:i[t].toString().localeCompare(T[t].toString(),"en",{numeric:!0})*(r==="asc"?1:-1));R(d)}},"handleSorting"),E=n(t=>{const r=t===j&&U==="asc"?"desc":"asc";H(t),K(r),Y(t,r)},"handleSortingChange"),X=n((t,r)=>{switch(t.type){case I:return e("th",{className:`
                        bg-neutral-light-light01 
                        ${t!=null&&t.props.sortable?"text-brand-primary-dark cursor-pointer":"text-neutral-dark-base"}
                        border 
                        border-neutral-light-light03 
                        text-left p-[15px]
                        h-[55px]
                        text-sm
                        max-w-fit
                        `,onClick:t!=null&&t.props.sortable?()=>E(t==null?void 0:t.props.field):void 0,children:l("div",{className:"flex gap-2 items-center",children:[t==null?void 0:t.props.header,(t==null?void 0:t.props.sortable)&&e(h,{name:"sort",width:"24px",height:"24px"})]})},`th${r}`);case y:return e("th",{className:`
                        bg-neutral-light-light01 
                        ${t!=null&&t.props.sortable?"text-brand-primary-dark cursor-pointer":"text-neutral-dark-base"}
                        border 
                        border-neutral-light-light03 
                        text-left p-[15px]
                        h-[55px]
                        text-sm
                        `,onClick:t!=null&&t.props.sortable?()=>E(t==null?void 0:t.props.field):void 0,children:l("div",{className:"flex gap-2 items-center",children:[t==null?void 0:t.props.header,(t==null?void 0:t.props.sortable)&&e(h,{name:"sort",width:"24px",height:"24px"})]})},`th${r}`)}},"creatingTableHead"),Q=n((t,r,d)=>{switch(t.type){case I:return e("td",{className:" bg-neutral-light-base border  border-neutral-light-light03  p-[15px] text-neutral-dark-dark01 text-center ",children:W.cloneElement(t,{children:t.props.children,onClick:t.props.onClick(r)})},`tdAction${d}`);case y:return e("td",{className:`
                                bg-neutral-light-base
                                border 
                                border-neutral-light-light03 
                                text-left 
                                p-[15px]
                                text-neutral-dark-dark01
                            `,width:t.props.maxWidth??"100px",children:Object.values(Object.fromEntries(Object.entries(r).filter(i=>i[0]===t.props.field))).map((i,T)=>{if(t.props.chipped)if(Array.isArray(i)){const[oe]=i;return l("div",{className:"flex gap-1 items-center flex-wrap",children:[B?i.map((re,le)=>e("div",{className:" py-[2px] px-2 h-[25px] bg-brand-primary-dark/[0.15] rounded-[20px] flex flex-col items-center ",children:re},`divChippedInner${le}`)):l(C,{children:[e("div",{className:" py-[2px] px-2 h-[25px] bg-brand-primary-dark/[0.15] rounded-[20px] flex flex-col items-center ",children:oe}),e("div",{className:" py-[2px] px-2 h-[25px] bg-brand-primary-dark/[0.15] rounded-[20px] flex flex-col items-center ",children:`+${i.length-1}`})]}),e("div",{className:"cursor-pointer",onClick:J,children:e(h,{name:B?"arrowDown":"arrowUp",width:"10px",height:"6px"})})]},`divChipped${T}`)}else return e("div",{className:" py-[2px] px-2 h-[25px] max-w-max bg-brand-primary-dark/[0.15] rounded-[20px] flex flex-col items-center ",children:i},`divNotChipped${T}`);return e(C,{children:i})})},`tdColumn${d}`)}},"returnCellElementByType"),Z=n((t,r)=>e("tr",{children:s.Children.map(p,(d,i)=>Q(d,t,i))},`tr${r}`),"creatingTableBody"),ee=n(()=>o&&e("div",{className:"text-lg font-roboto text-neutral-dark-base",children:o}),"getTitle"),ae=n(()=>s.Children.map(p,(t,r)=>{if(t.type===k)return e("div",{className:"grow-0",children:W.cloneElement(t,{children:s.Children.map(t.props.children,d=>{if(d.type.displayName==="InputText.Root")return W.cloneElement(d,{children:s.Children.map(d.props.children,i=>i.type.displayName==="InputText.Input"?W.cloneElement(i,{type:"search",value:S,onChange:F,...i.props}):i)})})})},`search${r}`)}),"getSearch"),te=n(()=>s.Children.map(p,(t,r)=>{if(t.type===w)return e("div",{children:t},`register${r}`)}),"getRegister"),ne=n(()=>g&&e("div",{className:"flex justify-end text-neutral-dark-dark01",children:`Total: ${f.length} ${f.length>1?"itens":"item"}`}),"getTotalizer");return l("div",{className:"flex flex-col gap-2 w-full font-roboto text-sm",children:[l("div",{className:"flex justify-between h-10 w-full gap-10 items-center",children:[ee(),ae(),te()]}),e("div",{className:`overflow-auto h-[${x}]`,children:p&&u?l("table",{className:"border-collapse w-full rounded-sm",...m,children:[e("thead",{children:e("tr",{children:s.Children.map(p,X)})}),e("tbody",{children:f.map(Z)})]}):e("div",{className:"w-full h-[310px]",children:e(de,{children:"Nenhum dado para ser exibido."})})}),ne()]})}n(D,"TableRoot");function y(o){return null}n(y,"TableColumn");function I({onClick:o,children:p}){return e("button",{onClick:o,children:p})}n(I,"TableAction");function k({children:o}){return e(C,{children:o})}n(k,"TableSearch");function w({children:o}){return e(C,{children:o})}n(w,"TableRegister");D.displayName="Table.Root";y.displayName="Table.Column";I.displayName="Table.Action";k.displayName="Table.Search";w.displayName="Table.Register";const a={Root:D,Column:y,Action:I,Search:k,Register:w},se=[{index:0,balance:"$2,915.74",age:40,name:"Kirby Farmer",gender:"male",company:["SYNKGEN","KLUGGER","KLUGGER","KLUGGER"],email:"kirbyfarmer@synkgen.com"},{index:1,balance:"$3,241.04",age:23,name:"Moses Ball",gender:"male",company:"KLUGGER",email:"mosesball@klugger.com"},{index:2,balance:"$3,009.26",age:34,name:"Ward Carson",gender:"male",company:"XELEGYL",email:"wardcarson@xelegyl.com"},{index:3,balance:"$2,426.23",age:24,name:"Jewel Cote",gender:"female",company:"ESSENSIA",email:"jewelcote@essensia.com"},{index:4,balance:"$3,689.03",age:31,name:"Therese Ballard",gender:"female",company:"TSUNAMIA",email:"thereseballard@tsunamia.com"},{index:5,balance:"$3,140.28",age:24,name:"Sybil Mcconnell",gender:"female",company:"OVATION",email:"sybilmcconnell@ovation.com"},{index:6,balance:"$2,277.67",age:20,name:"Latisha Forbes",gender:"female",company:"ISOSURE",email:"latishaforbes@isosure.com"}],A={Data:se},We={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from "react";
import { Button } from '../Button/Button';
import { Icon } from '../IconComponent/Icon';
import { InputText } from '../InputText/InputText';
import { Table } from './Table';
import { mock } from './mock';

export default {
    title: 'Design System/Componentes/Table',
    component: Table.Root,
    args: {
        values: mock.Data,
        maxHeight: '500px',
    },
    argTypes: { }
} as ComponentMeta<typeof Table.Root>;

export const Basic: ComponentStory<typeof Table.Root> = (args) => (
    <Table.Root key='basic' {...args}>
        <Table.Column 
            header='Nome'
            field='name'
            maxWidth='120px'
            dataType='string'
        />
    </Table.Root>
);

export const WithTitle: ComponentStory<typeof Table.Root> = (args) => (
    <Table.Root key='WithTitle' {...args}>
        <Table.Column dataType="string" field="index" header="ID" maxWidth="10px"/>
        <Table.Column dataType="string" field="balance" header="Balanço" maxWidth="120px"/>
        <Table.Column dataType="string" field="age" header="Idade" maxWidth="120px"/>
        <Table.Column dataType="string" field="name" header="Nome" maxWidth="120px"/>
        <Table.Column dataType="string" field="gender" header="Gênero" maxWidth="120px"/>
        <Table.Column dataType="string" field="company" header="Companhia" maxWidth="220px" chipped/>
        <Table.Column dataType="string" field="email" header="Email" maxWidth="120px"/>
    </Table.Root>
);
WithTitle.args = {
    title:'Título da Tabela'
}
WithTitle.storyName = 'Com Título';

export const WithSearch: ComponentStory<typeof Table.Root> = (args) => (
    <Table.Root key='WithSearch' {...args}>
        <Table.Search>
            <InputText.Root>
                <InputText.Input
                    type='search'
                    placeholder='Pesquisar algo'
                />
                <InputText.Icon>
                    <Icon 
                        name= 'search'
                        width= '17.49px'
                        height= '17.49px'
                    /> 
                </InputText.Icon>
            </InputText.Root>
        </Table.Search>
        <Table.Column dataType="string" field="index" header="ID" maxWidth="10px"/>
        <Table.Column dataType="string" field="balance" header="Balanço" maxWidth="120px"/>
        <Table.Column dataType="string" field="age" header="Idade" maxWidth="120px"/>
        <Table.Column dataType="string" field="name" header="Nome" maxWidth="120px"/>
        <Table.Column dataType="string" field="gender" header="Gênero" maxWidth="120px"/>
        <Table.Column dataType="string" field="company" header="Companhia" maxWidth="220px" chipped/>
        <Table.Column dataType="string" field="email" header="Email" maxWidth="120px"/>
    </Table.Root>
);
WithSearch.args = {
    title:'Título da Tabela'
}
WithSearch.storyName = 'Com Busca';

export const WithoutChildren: ComponentStory<typeof Table.Root> = (args) => (
    <div className='w-[600px]'>
        <Table.Root key='WithoutChildren' {...args} />
    </div>
);
WithoutChildren.args = {
    title:'Título da Tabela'
}
WithoutChildren.storyName = 'Vazia';

export const WithTotalizer: ComponentStory<typeof Table.Root> = (args) => (
    <Table.Root key='WithTotalizer' {...args}>
        <Table.Column dataType="string" field="index" header="ID" maxWidth="10px"/>
        <Table.Column dataType="string" field="balance" header="Balanço" maxWidth="120px"/>
        <Table.Column dataType="string" field="age" header="Idade" maxWidth="120px"/>
        <Table.Column dataType="string" field="name" header="Nome" maxWidth="120px"/>
        <Table.Column dataType="string" field="gender" header="Gênero" maxWidth="120px"/>
        <Table.Column dataType="string" field="company" header="Companhia" maxWidth="220px" chipped/>
        <Table.Column dataType="string" field="email" header="Email" maxWidth="120px"/>
    </Table.Root>
);
WithTotalizer.args = {
    hasTotalizer: true,
}
WithTotalizer.storyName = 'Com Totalizador';

export const WithScroll: ComponentStory<typeof Table.Root> = (args) => (
    <div className='w-[650px]'>
        <Table.Root key='WithScroll' {...args}>
            <Table.Column dataType="string" field="index" header="ID" maxWidth="10px"/>
            <Table.Column dataType="string" field="balance" header="Balanço" maxWidth="120px"/>
            <Table.Column dataType="string" field="age" header="Idade" maxWidth="120px"/>
            <Table.Column dataType="string" field="name" header="Nome" maxWidth="120px"/>
            <Table.Column dataType="string" field="gender" header="Gênero" maxWidth="120px"/>
            <Table.Column dataType="string" field="company" header="Companhia" maxWidth="220px" chipped/>
            <Table.Column dataType="string" field="email" header="Email" maxWidth="120px"/>
        </Table.Root>
    </div>
);
WithScroll.args = {
    title:'Título da Tabela',
    maxHeight: '400px',
    hasTotalizer: true,
}
WithScroll.storyName = 'Com Scroll';

export const WithSort: ComponentStory<typeof Table.Root> = (args) => (
    <Table.Root key='WithSort' {...args}>
        <Table.Column dataType="string" field="index" header="ID" maxWidth="10px" sortable/>
        <Table.Column dataType="string" field="balance" header="Balanço" maxWidth="120px"/>
        <Table.Column dataType="string" field="age" header="Idade" maxWidth="120px"/>
        <Table.Column dataType="string" field="name" header="Nome" maxWidth="120px"/>
        <Table.Column dataType="string" field="gender" header="Gênero" maxWidth="120px"/>
        <Table.Column dataType="string" field="company" header="Companhia" maxWidth="220px" chipped sortable/>
        <Table.Column dataType="string" field="email" header="Email" maxWidth="120px"/>
    </Table.Root>
);
WithSort.storyName = 'Com Ordenação';

export const WithAction: ComponentStory<typeof Table.Root> = (args) => {
    const handleViewClick = (values: any) => (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('View: ',values);
    };
    const handleEditClick = (values: any) => (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Edit: ',values);
    };
    const handleDeleteClick = (values: any) => (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Delete: ',values);
    };

    return (
        <Table.Root key='WithAction' {...args}>
            <Table.Action onClick={handleViewClick}>
                <Icon 
                    name= 'openEyes'
                    color='text-brand-primary-dark'
                    width= '24px'
                    height= '24px'
                /> 
            </Table.Action>
            <Table.Column dataType="string" field="index" header="ID" maxWidth="10px"/>
            <Table.Column dataType="string" field="balance" header="Balanço" maxWidth="120px"/>
            <Table.Column dataType="string" field="age" header="Idade" maxWidth="120px"/>
            <Table.Column dataType="string" field="name" header="Nome" maxWidth="120px"/>
            <Table.Column dataType="string" field="gender" header="Gênero" maxWidth="120px"/>
            <Table.Column dataType="string" field="company" header="Companhia" maxWidth="220px" chipped/>
            <Table.Column dataType="string" field="email" header="Email" maxWidth="120px"/>
            <Table.Action onClick={handleEditClick}>
                <Icon 
                    name= 'pencil'
                    color='text-brand-primary-dark'
                    width= '24px'
                    height= '24px'
                /> 
            </Table.Action>
            <Table.Action onClick={handleDeleteClick}>
                <Icon 
                    name= 'trash'
                    color='text-extra-error'
                    width= '24px'
                    height= '24px'
                /> 
            </Table.Action>
        </Table.Root>
    )
};
WithAction.storyName = 'Com Ação';

export const WithRegister: ComponentStory<typeof Table.Root> = (args) => {

    return (
        <Table.Root key='WithRegister' {...args}>
            <Table.Register>
                <Button
                    label="Cadastrar"
                    onClick={() => { console.log('Cadastrado!')}}
                    variant="secondary"
                    className='w-96'
                />
            </Table.Register>
            <Table.Search>
                <InputText.Root>
                    <InputText.Input
                        type='search'
                        placeholder='Pesquisar algo'
                    />
                    <InputText.Icon>
                        <Icon 
                            name= 'search'
                            width= '17.49px'
                            height= '17.49px'
                        /> 
                    </InputText.Icon>
                </InputText.Root>
            </Table.Search>
            <Table.Column dataType="string" field="index" header="ID" maxWidth="10px"/>
            <Table.Column dataType="string" field="balance" header="Balanço" maxWidth="120px"/>
            <Table.Column dataType="string" field="age" header="Idade" maxWidth="120px"/>
            <Table.Column dataType="string" field="name" header="Nome" maxWidth="120px"/>
            <Table.Column dataType="string" field="gender" header="Gênero" maxWidth="120px"/>
            <Table.Column dataType="string" field="company" header="Companhia" maxWidth="220px" chipped/>
            <Table.Column dataType="string" field="email" header="Email" maxWidth="120px"/>
        </Table.Root>
    )
};
WithRegister.args = {
    title:'Título da Tabela'
}
WithRegister.storyName = 'Com Cadastro';

export const WithChip: ComponentStory<typeof Table.Root> = (args) => {
    return (
        <Table.Root key='WithChip' {...args}>
            <Table.Search>
                <InputText.Root>
                    <InputText.Input
                        type='search'
                        placeholder='Pesquisar algo'
                    />
                    <InputText.Icon>
                        <Icon 
                            name= 'search'
                            width= '17.49px'
                            height= '17.49px'
                        /> 
                    </InputText.Icon>
                </InputText.Root>
            </Table.Search>
            <Table.Column dataType="string" field="index" header="ID" maxWidth="10px"/>
            <Table.Column dataType="string" field="balance" header="Balanço" maxWidth="120px"/>
            <Table.Column dataType="string" field="age" header="Idade" maxWidth="120px"/>
            <Table.Column dataType="string" field="name" header="Nome" maxWidth="120px"/>
            <Table.Column dataType="string" field="gender" header="Gênero" maxWidth="120px"/>
            <Table.Column 
                dataType="string" 
                field="company" 
                header="Companhia" 
                maxWidth="220px" 
                chipped
            />
            <Table.Column dataType="string" field="email" header="Email" maxWidth="120px"/>
        </Table.Root>
    )
};
WithChip.args = {
    title:'Título da Tabela'
}
WithChip.storyName = 'Com Chips';

export const WithAsyncronousValues: ComponentStory<typeof Table.Root> = (args) => {

    const [data, setData] = useState<any>([]);
    
    function simulateAsyncCall() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(mock.Data);
          }, 2 * 1000);
        });
    }
    
    const pesquisar = async () => {
        console.log('Pesquisar acionado');
        try {
            const response = await simulateAsyncCall();
            if(response){
                console.log('Pesquisar data',response);
                setData(response);
            }
        } catch (error) {
            console.log('Erro ao pesquisar:' + JSON.stringify(error));
        }
    }
    
    return (
        <>
            <Button onClick={pesquisar} label='Pesquisar' />
            <Table.Root maxHeight='500px' values={data}>
                <Table.Column header='Nome' field='name' maxWidth='120px' dataType='string' sortable/>
                <Table.Column dataType="string" field="age" header="Idade" maxWidth="120px" sortable/>
                <Table.Column dataType="string" field="name" header="Nome" maxWidth="120px" sortable/>
                <Table.Column dataType="string" field="gender" header="Gênero" maxWidth="120px" sortable/>
            </Table.Root>
        </>
    )
};
WithAsyncronousValues.storyName = 'Com Dados Assíncronos';
`,locationsMap:{basic:{startLoc:{col:56,line:20},endLoc:{col:1,line:29},startBody:{col:56,line:20},endBody:{col:1,line:29}},"with-title":{startLoc:{col:60,line:31},endLoc:{col:1,line:41},startBody:{col:60,line:31},endBody:{col:1,line:41}},"with-search":{startLoc:{col:61,line:47},endLoc:{col:1,line:72},startBody:{col:61,line:47},endBody:{col:1,line:72}},"without-children":{startLoc:{col:66,line:78},endLoc:{col:1,line:82},startBody:{col:66,line:78},endBody:{col:1,line:82}},"with-totalizer":{startLoc:{col:64,line:88},endLoc:{col:1,line:98},startBody:{col:64,line:88},endBody:{col:1,line:98}},"with-scroll":{startLoc:{col:61,line:104},endLoc:{col:1,line:116},startBody:{col:61,line:104},endBody:{col:1,line:116}},"with-sort":{startLoc:{col:59,line:124},endLoc:{col:1,line:134},startBody:{col:59,line:124},endBody:{col:1,line:134}},"with-action":{startLoc:{col:61,line:137},endLoc:{col:1,line:183},startBody:{col:61,line:137},endBody:{col:1,line:183}},"with-register":{startLoc:{col:63,line:186},endLoc:{col:1,line:222},startBody:{col:63,line:186},endBody:{col:1,line:222}},"with-chip":{startLoc:{col:59,line:228},endLoc:{col:1,line:261},startBody:{col:59,line:228},endBody:{col:1,line:261}},"with-asyncronous-values":{startLoc:{col:72,line:267},endLoc:{col:1,line:303},startBody:{col:72,line:267},endBody:{col:1,line:303}}}}},title:"Design System/Componentes/Table",component:a.Root,args:{values:A.Data,maxHeight:"500px"},argTypes:{}},Ie=n(o=>e(a.Root,{...o,children:e(a.Column,{header:"Nome",field:"name",maxWidth:"120px",dataType:"string"})},"basic"),"Basic"),L=n(o=>l(a.Root,{...o,children:[e(a.Column,{dataType:"string",field:"index",header:"ID",maxWidth:"10px"}),e(a.Column,{dataType:"string",field:"balance",header:"Balanço",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"age",header:"Idade",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"name",header:"Nome",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"gender",header:"Gênero",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"company",header:"Companhia",maxWidth:"220px",chipped:!0}),e(a.Column,{dataType:"string",field:"email",header:"Email",maxWidth:"120px"})]},"WithTitle"),"WithTitle");L.args={title:"Título da Tabela"};L.storyName="Com Título";const G=n(o=>l(a.Root,{...o,children:[e(a.Search,{children:l(c.Root,{children:[e(c.Input,{type:"search",placeholder:"Pesquisar algo"}),e(c.Icon,{children:e(h,{name:"search",width:"17.49px",height:"17.49px"})})]})}),e(a.Column,{dataType:"string",field:"index",header:"ID",maxWidth:"10px"}),e(a.Column,{dataType:"string",field:"balance",header:"Balanço",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"age",header:"Idade",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"name",header:"Nome",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"gender",header:"Gênero",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"company",header:"Companhia",maxWidth:"220px",chipped:!0}),e(a.Column,{dataType:"string",field:"email",header:"Email",maxWidth:"120px"})]},"WithSearch"),"WithSearch");G.args={title:"Título da Tabela"};G.storyName="Com Busca";const $=n(o=>e("div",{className:"w-[600px]",children:e(a.Root,{...o},"WithoutChildren")}),"WithoutChildren");$.args={title:"Título da Tabela"};$.storyName="Vazia";const q=n(o=>l(a.Root,{...o,children:[e(a.Column,{dataType:"string",field:"index",header:"ID",maxWidth:"10px"}),e(a.Column,{dataType:"string",field:"balance",header:"Balanço",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"age",header:"Idade",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"name",header:"Nome",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"gender",header:"Gênero",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"company",header:"Companhia",maxWidth:"220px",chipped:!0}),e(a.Column,{dataType:"string",field:"email",header:"Email",maxWidth:"120px"})]},"WithTotalizer"),"WithTotalizer");q.args={hasTotalizer:!0};q.storyName="Com Totalizador";const z=n(o=>e("div",{className:"w-[650px]",children:l(a.Root,{...o,children:[e(a.Column,{dataType:"string",field:"index",header:"ID",maxWidth:"10px"}),e(a.Column,{dataType:"string",field:"balance",header:"Balanço",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"age",header:"Idade",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"name",header:"Nome",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"gender",header:"Gênero",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"company",header:"Companhia",maxWidth:"220px",chipped:!0}),e(a.Column,{dataType:"string",field:"email",header:"Email",maxWidth:"120px"})]},"WithScroll")}),"WithScroll");z.args={title:"Título da Tabela",maxHeight:"400px",hasTotalizer:!0};z.storyName="Com Scroll";const pe=n(o=>l(a.Root,{...o,children:[e(a.Column,{dataType:"string",field:"index",header:"ID",maxWidth:"10px",sortable:!0}),e(a.Column,{dataType:"string",field:"balance",header:"Balanço",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"age",header:"Idade",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"name",header:"Nome",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"gender",header:"Gênero",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"company",header:"Companhia",maxWidth:"220px",chipped:!0,sortable:!0}),e(a.Column,{dataType:"string",field:"email",header:"Email",maxWidth:"120px"})]},"WithSort"),"WithSort");pe.storyName="Com Ordenação";const me=n(o=>{const p=n(x=>m=>{console.log("View: ",x)},"handleViewClick"),u=n(x=>m=>{console.log("Edit: ",x)},"handleEditClick"),g=n(x=>m=>{console.log("Delete: ",x)},"handleDeleteClick");return l(a.Root,{...o,children:[e(a.Action,{onClick:p,children:e(h,{name:"openEyes",color:"text-brand-primary-dark",width:"24px",height:"24px"})}),e(a.Column,{dataType:"string",field:"index",header:"ID",maxWidth:"10px"}),e(a.Column,{dataType:"string",field:"balance",header:"Balanço",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"age",header:"Idade",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"name",header:"Nome",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"gender",header:"Gênero",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"company",header:"Companhia",maxWidth:"220px",chipped:!0}),e(a.Column,{dataType:"string",field:"email",header:"Email",maxWidth:"120px"}),e(a.Action,{onClick:u,children:e(h,{name:"pencil",color:"text-brand-primary-dark",width:"24px",height:"24px"})}),e(a.Action,{onClick:g,children:e(h,{name:"trash",color:"text-extra-error",width:"24px",height:"24px"})})]},"WithAction")},"WithAction");me.storyName="Com Ação";const V=n(o=>l(a.Root,{...o,children:[e(a.Register,{children:e(v,{label:"Cadastrar",onClick:()=>{console.log("Cadastrado!")},variant:"secondary",className:"w-96"})}),e(a.Search,{children:l(c.Root,{children:[e(c.Input,{type:"search",placeholder:"Pesquisar algo"}),e(c.Icon,{children:e(h,{name:"search",width:"17.49px",height:"17.49px"})})]})}),e(a.Column,{dataType:"string",field:"index",header:"ID",maxWidth:"10px"}),e(a.Column,{dataType:"string",field:"balance",header:"Balanço",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"age",header:"Idade",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"name",header:"Nome",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"gender",header:"Gênero",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"company",header:"Companhia",maxWidth:"220px",chipped:!0}),e(a.Column,{dataType:"string",field:"email",header:"Email",maxWidth:"120px"})]},"WithRegister"),"WithRegister");V.args={title:"Título da Tabela"};V.storyName="Com Cadastro";const O=n(o=>l(a.Root,{...o,children:[e(a.Search,{children:l(c.Root,{children:[e(c.Input,{type:"search",placeholder:"Pesquisar algo"}),e(c.Icon,{children:e(h,{name:"search",width:"17.49px",height:"17.49px"})})]})}),e(a.Column,{dataType:"string",field:"index",header:"ID",maxWidth:"10px"}),e(a.Column,{dataType:"string",field:"balance",header:"Balanço",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"age",header:"Idade",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"name",header:"Nome",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"gender",header:"Gênero",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"company",header:"Companhia",maxWidth:"220px",chipped:!0}),e(a.Column,{dataType:"string",field:"email",header:"Email",maxWidth:"120px"})]},"WithChip"),"WithChip");O.args={title:"Título da Tabela"};O.storyName="Com Chips";const he=n(o=>{const[p,u]=s.useState([]);function g(){return new Promise(m=>{setTimeout(()=>{m(A.Data)},2*1e3)})}return n(g,"simulateAsyncCall"),l(C,{children:[e(v,{onClick:n(async()=>{console.log("Pesquisar acionado");try{const m=await g();m&&(console.log("Pesquisar data",m),u(m))}catch(m){console.log("Erro ao pesquisar:"+JSON.stringify(m))}},"pesquisar"),label:"Pesquisar"}),l(a.Root,{maxHeight:"500px",values:p,children:[e(a.Column,{header:"Nome",field:"name",maxWidth:"120px",dataType:"string",sortable:!0}),e(a.Column,{dataType:"string",field:"age",header:"Idade",maxWidth:"120px",sortable:!0}),e(a.Column,{dataType:"string",field:"name",header:"Nome",maxWidth:"120px",sortable:!0}),e(a.Column,{dataType:"string",field:"gender",header:"Gênero",maxWidth:"120px",sortable:!0})]})]})},"WithAsyncronousValues");he.storyName="Com Dados Assíncronos";const Ne=["Basic","WithTitle","WithSearch","WithoutChildren","WithTotalizer","WithScroll","WithSort","WithAction","WithRegister","WithChip","WithAsyncronousValues"];export{Ie as Basic,me as WithAction,he as WithAsyncronousValues,O as WithChip,V as WithRegister,z as WithScroll,G as WithSearch,pe as WithSort,L as WithTitle,q as WithTotalizer,$ as WithoutChildren,Ne as __namedExportsOrder,We as default};
//# sourceMappingURL=Table.stories-d84c0036.js.map
