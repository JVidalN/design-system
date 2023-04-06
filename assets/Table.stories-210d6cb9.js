var re=Object.defineProperty;var t=(o,m)=>re(o,"name",{value:m,configurable:!0});import{B as ie}from"./Button-3daed292.js";import{I as h}from"./Icon-96a441ee.js";import{I as s}from"./InputText-8726494f.js";import{r as p,a as i,j as e,F as C,R as y}from"./jsx-runtime-451690fa.js";import{V as de}from"./VoidState-664734cd.js";import"./index-50ee27ec.js";import"./iframe-655d5b22.js";const pe=[{index:0,balance:"$2,915.74",age:40,name:"Kirby Farmer",gender:"male",company:["SYNKGEN","KLUGGER","KLUGGER","KLUGGER"],email:"kirbyfarmer@synkgen.com"},{index:1,balance:"$3,241.04",age:23,name:"Moses Ball",gender:"male",company:"KLUGGER",email:"mosesball@klugger.com"},{index:2,balance:"$3,009.26",age:34,name:"Ward Carson",gender:"male",company:"XELEGYL",email:"wardcarson@xelegyl.com"},{index:3,balance:"$2,426.23",age:24,name:"Jewel Cote",gender:"female",company:"ESSENSIA",email:"jewelcote@essensia.com"},{index:4,balance:"$3,689.03",age:31,name:"Therese Ballard",gender:"female",company:"TSUNAMIA",email:"thereseballard@tsunamia.com"},{index:5,balance:"$3,140.28",age:24,name:"Sybil Mcconnell",gender:"female",company:"OVATION",email:"sybilmcconnell@ovation.com"},{index:6,balance:"$2,277.67",age:20,name:"Latisha Forbes",gender:"female",company:"ISOSURE",email:"latishaforbes@isosure.com"}],me={Data:pe};function E({title:o,children:m=null,values:T,hasTotalizer:I=!1,maxHeight:c="430px",...u}){const R=[];p.Children.forEach(m,n=>{(n==null?void 0:n.type)===b&&R.push(n==null?void 0:n.props)});const V=t(n=>R?R.reduce(function(l,d){return l[d.field]=n[d.field],l},{}):[],"treatingValues"),k=T.map(V),[g,B]=p.useState(k),[N,M]=p.useState(""),[O,j]=p.useState(""),[H,U]=p.useState("asc"),[w,q]=p.useState(!1),K=t(()=>q(n=>!n),"handleColumnChipExpanded");p.useEffect(()=>{let n=k.filter(l=>Object.values(l).some(d=>d.toString().toLowerCase().includes(N.toLowerCase())));B(n)},[N]);const P=t(n=>{M(n.target.value)},"handleSearchChange"),_=t((n,l)=>{if(n){const d=[...g].sort((r,x)=>r[n]===null?1:x[n]===null?-1:r[n]===null&&x[n]===null?0:r[n].toString().localeCompare(x[n].toString(),"en",{numeric:!0})*(l==="asc"?1:-1));B(d)}},"handleSorting"),F=t(n=>{const l=n===O&&H==="asc"?"desc":"asc";j(n),U(l),_(n,l)},"handleSortingChange"),Y=t(n=>n!==f&&n!==W,"isValidTypeToHead"),J=t((n,l)=>{if(Y(n.type))return e("th",{className:`
                    bg-neutral-light-light01 
                    ${n!=null&&n.props.sortable?"text-brand-primary-dark cursor-pointer":"text-neutral-dark-base"}
                    border 
                    border-neutral-light-light03 
                    text-left p-[15px]
                    h-[55px]
                    text-sm
                    `,onClick:n!=null&&n.props.sortable?()=>F(n==null?void 0:n.props.field):void 0,children:i("div",{className:"flex gap-2 items-center",children:[n==null?void 0:n.props.header,(n==null?void 0:n.props.sortable)&&e(h,{name:"sort",width:"24px",height:"24px"})]})},`th${l}`)},"creatingTableHead"),X=t((n,l,d)=>{switch(n.type){case S:return e("td",{className:" bg-neutral-light-base border  border-neutral-light-light03  p-[15px] text-neutral-dark-dark01 text-center ",children:y.cloneElement(n,{children:n.props.children,onClick:n.props.onClick(l)})},`tdAction${d}`);case b:return e("td",{className:`
                                bg-neutral-light-base
                                border 
                                border-neutral-light-light03 
                                text-left 
                                p-[15px]
                                text-neutral-dark-dark01
                            `,width:n.props.maxWidth??"100px",children:Object.values(Object.fromEntries(Object.entries(l).filter(r=>r[0]===n.props.field))).map((r,x)=>{if(n.props.chipped)if(Array.isArray(r)){const[te]=r;return i("div",{className:"flex gap-1 items-center flex-wrap",children:[w?r.map((oe,le)=>e("div",{className:" py-[2px] px-2 h-[25px] bg-brand-primary-dark/[0.15] rounded-[20px] flex flex-col items-center ",children:oe},`divChippedInner${le}`)):i(C,{children:[e("div",{className:" py-[2px] px-2 h-[25px] bg-brand-primary-dark/[0.15] rounded-[20px] flex flex-col items-center ",children:te}),e("div",{className:" py-[2px] px-2 h-[25px] bg-brand-primary-dark/[0.15] rounded-[20px] flex flex-col items-center ",children:`+${r.length-1}`})]}),e("div",{className:"cursor-pointer",onClick:K,children:e(h,{name:w?"arrowDown":"arrowUp",width:"10px",height:"6px"})})]},`divChipped${x}`)}else return e("div",{className:" py-[2px] px-2 h-[25px] max-w-max bg-brand-primary-dark/[0.15] rounded-[20px] flex flex-col items-center ",children:r},`divNotChipped${x}`);return e(C,{children:r})})},`tdColumn${d}`)}},"returnCellElementByType"),Q=t((n,l)=>e("tr",{children:p.Children.map(m,(d,r)=>X(d,n,r))},`tr${l}`),"creatingTableBody"),Z=t(()=>o&&e("div",{className:"text-lg font-roboto text-neutral-dark-base",children:o}),"getTitle"),ee=t(()=>p.Children.map(m,(n,l)=>{if(n.type===f)return e("div",{className:"grow-0",children:y.cloneElement(n,{children:p.Children.map(n.props.children,d=>{if(d.type.displayName==="InputText.Root")return y.cloneElement(d,{children:p.Children.map(d.props.children,r=>r.type.displayName==="InputText.Input"?y.cloneElement(r,{type:"search",value:N,onChange:P,...r.props}):r)})})})},`search${l}`)}),"getSearch"),ae=t(()=>p.Children.map(m,(n,l)=>{if(n.type===W)return e("div",{children:n},`register${l}`)}),"getRegister"),ne=t(()=>I&&e("div",{className:"flex justify-end text-neutral-dark-dark01",children:`Total: ${g.length} ${g.length>1?"itens":"item"}`}),"getTotalizer");return i("div",{className:"flex flex-col gap-2 w-full font-roboto text-sm",children:[i("div",{className:"flex justify-between h-10 w-full gap-10 items-center",children:[Z(),ee(),ae()]}),e("div",{className:`overflow-auto h-[${c}]`,children:m&&T?i("table",{className:"border-collapse w-full rounded-sm",...u,children:[e("thead",{children:e("tr",{children:p.Children.map(m,J)})}),e("tbody",{children:g.map(Q)})]}):e("div",{className:"w-full h-[310px]",children:e(de,{children:"Nenhum dado para ser exibido."})})}),ne()]})}t(E,"TableRoot");function b(o){return null}t(b,"TableColumn");function S({onClick:o,children:m}){return e("button",{onClick:o,children:m})}t(S,"TableAction");function f({children:o}){return e(C,{children:o})}t(f,"TableSearch");function W({children:o}){return e(C,{children:o})}t(W,"TableRegister");E.displayName="Table.Root";b.displayName="Table.Column";S.displayName="Table.Action";f.displayName="Table.Search";W.displayName="Table.Register";const a={Root:E,Column:b,Action:S,Search:f,Register:W},fe={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../Button/Button';
import { Icon } from '../IconComponent/Icon';
import { InputText } from '../InputText/InputText';
import { mock } from './mock';
import { Table } from './Table';

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

`,locationsMap:{basic:{startLoc:{col:56,line:18},endLoc:{col:1,line:27},startBody:{col:56,line:18},endBody:{col:1,line:27}},"with-title":{startLoc:{col:60,line:29},endLoc:{col:1,line:39},startBody:{col:60,line:29},endBody:{col:1,line:39}},"with-search":{startLoc:{col:61,line:45},endLoc:{col:1,line:70},startBody:{col:61,line:45},endBody:{col:1,line:70}},"without-children":{startLoc:{col:66,line:76},endLoc:{col:1,line:80},startBody:{col:66,line:76},endBody:{col:1,line:80}},"with-totalizer":{startLoc:{col:64,line:86},endLoc:{col:1,line:96},startBody:{col:64,line:86},endBody:{col:1,line:96}},"with-scroll":{startLoc:{col:61,line:102},endLoc:{col:1,line:114},startBody:{col:61,line:102},endBody:{col:1,line:114}},"with-sort":{startLoc:{col:59,line:122},endLoc:{col:1,line:132},startBody:{col:59,line:122},endBody:{col:1,line:132}},"with-action":{startLoc:{col:61,line:135},endLoc:{col:1,line:181},startBody:{col:61,line:135},endBody:{col:1,line:181}},"with-register":{startLoc:{col:63,line:184},endLoc:{col:1,line:220},startBody:{col:63,line:184},endBody:{col:1,line:220}},"with-chip":{startLoc:{col:59,line:226},endLoc:{col:1,line:259},startBody:{col:59,line:226},endBody:{col:1,line:259}}}}},title:"Design System/Componentes/Table",component:a.Root,args:{values:me.Data,maxHeight:"500px"},argTypes:{}},We=t(o=>e(a.Root,{...o,children:e(a.Column,{header:"Nome",field:"name",maxWidth:"120px",dataType:"string"})},"basic"),"Basic"),v=t(o=>i(a.Root,{...o,children:[e(a.Column,{dataType:"string",field:"index",header:"ID",maxWidth:"10px"}),e(a.Column,{dataType:"string",field:"balance",header:"Balanço",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"age",header:"Idade",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"name",header:"Nome",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"gender",header:"Gênero",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"company",header:"Companhia",maxWidth:"220px",chipped:!0}),e(a.Column,{dataType:"string",field:"email",header:"Email",maxWidth:"120px"})]},"WithTitle"),"WithTitle");v.args={title:"Título da Tabela"};v.storyName="Com Título";const L=t(o=>i(a.Root,{...o,children:[e(a.Search,{children:i(s.Root,{children:[e(s.Input,{type:"search",placeholder:"Pesquisar algo"}),e(s.Icon,{children:e(h,{name:"search",width:"17.49px",height:"17.49px"})})]})}),e(a.Column,{dataType:"string",field:"index",header:"ID",maxWidth:"10px"}),e(a.Column,{dataType:"string",field:"balance",header:"Balanço",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"age",header:"Idade",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"name",header:"Nome",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"gender",header:"Gênero",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"company",header:"Companhia",maxWidth:"220px",chipped:!0}),e(a.Column,{dataType:"string",field:"email",header:"Email",maxWidth:"120px"})]},"WithSearch"),"WithSearch");L.args={title:"Título da Tabela"};L.storyName="Com Busca";const D=t(o=>e("div",{className:"w-[600px]",children:e(a.Root,{...o},"WithoutChildren")}),"WithoutChildren");D.args={title:"Título da Tabela"};D.storyName="Vazia";const A=t(o=>i(a.Root,{...o,children:[e(a.Column,{dataType:"string",field:"index",header:"ID",maxWidth:"10px"}),e(a.Column,{dataType:"string",field:"balance",header:"Balanço",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"age",header:"Idade",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"name",header:"Nome",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"gender",header:"Gênero",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"company",header:"Companhia",maxWidth:"220px",chipped:!0}),e(a.Column,{dataType:"string",field:"email",header:"Email",maxWidth:"120px"})]},"WithTotalizer"),"WithTotalizer");A.args={hasTotalizer:!0};A.storyName="Com Totalizador";const G=t(o=>e("div",{className:"w-[650px]",children:i(a.Root,{...o,children:[e(a.Column,{dataType:"string",field:"index",header:"ID",maxWidth:"10px"}),e(a.Column,{dataType:"string",field:"balance",header:"Balanço",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"age",header:"Idade",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"name",header:"Nome",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"gender",header:"Gênero",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"company",header:"Companhia",maxWidth:"220px",chipped:!0}),e(a.Column,{dataType:"string",field:"email",header:"Email",maxWidth:"120px"})]},"WithScroll")}),"WithScroll");G.args={title:"Título da Tabela",maxHeight:"400px",hasTotalizer:!0};G.storyName="Com Scroll";const se=t(o=>i(a.Root,{...o,children:[e(a.Column,{dataType:"string",field:"index",header:"ID",maxWidth:"10px",sortable:!0}),e(a.Column,{dataType:"string",field:"balance",header:"Balanço",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"age",header:"Idade",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"name",header:"Nome",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"gender",header:"Gênero",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"company",header:"Companhia",maxWidth:"220px",chipped:!0,sortable:!0}),e(a.Column,{dataType:"string",field:"email",header:"Email",maxWidth:"120px"})]},"WithSort"),"WithSort");se.storyName="Com Ordenação";const he=t(o=>{const m=t(c=>u=>{console.log("View: ",c)},"handleViewClick"),T=t(c=>u=>{console.log("Edit: ",c)},"handleEditClick"),I=t(c=>u=>{console.log("Delete: ",c)},"handleDeleteClick");return i(a.Root,{...o,children:[e(a.Action,{onClick:m,children:e(h,{name:"openEyes",color:"text-brand-primary-dark",width:"24px",height:"24px"})}),e(a.Column,{dataType:"string",field:"index",header:"ID",maxWidth:"10px"}),e(a.Column,{dataType:"string",field:"balance",header:"Balanço",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"age",header:"Idade",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"name",header:"Nome",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"gender",header:"Gênero",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"company",header:"Companhia",maxWidth:"220px",chipped:!0}),e(a.Column,{dataType:"string",field:"email",header:"Email",maxWidth:"120px"}),e(a.Action,{onClick:T,children:e(h,{name:"pencil",color:"text-brand-primary-dark",width:"24px",height:"24px"})}),e(a.Action,{onClick:I,children:e(h,{name:"trash",color:"text-extra-error",width:"24px",height:"24px"})})]},"WithAction")},"WithAction");he.storyName="Com Ação";const $=t(o=>i(a.Root,{...o,children:[e(a.Register,{children:e(ie,{label:"Cadastrar",onClick:()=>{console.log("Cadastrado!")},variant:"secondary",className:"w-96"})}),e(a.Search,{children:i(s.Root,{children:[e(s.Input,{type:"search",placeholder:"Pesquisar algo"}),e(s.Icon,{children:e(h,{name:"search",width:"17.49px",height:"17.49px"})})]})}),e(a.Column,{dataType:"string",field:"index",header:"ID",maxWidth:"10px"}),e(a.Column,{dataType:"string",field:"balance",header:"Balanço",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"age",header:"Idade",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"name",header:"Nome",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"gender",header:"Gênero",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"company",header:"Companhia",maxWidth:"220px",chipped:!0}),e(a.Column,{dataType:"string",field:"email",header:"Email",maxWidth:"120px"})]},"WithRegister"),"WithRegister");$.args={title:"Título da Tabela"};$.storyName="Com Cadastro";const z=t(o=>i(a.Root,{...o,children:[e(a.Search,{children:i(s.Root,{children:[e(s.Input,{type:"search",placeholder:"Pesquisar algo"}),e(s.Icon,{children:e(h,{name:"search",width:"17.49px",height:"17.49px"})})]})}),e(a.Column,{dataType:"string",field:"index",header:"ID",maxWidth:"10px"}),e(a.Column,{dataType:"string",field:"balance",header:"Balanço",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"age",header:"Idade",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"name",header:"Nome",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"gender",header:"Gênero",maxWidth:"120px"}),e(a.Column,{dataType:"string",field:"company",header:"Companhia",maxWidth:"220px",chipped:!0}),e(a.Column,{dataType:"string",field:"email",header:"Email",maxWidth:"120px"})]},"WithChip"),"WithChip");z.args={title:"Título da Tabela"};z.storyName="Com Chips";const Ie=["Basic","WithTitle","WithSearch","WithoutChildren","WithTotalizer","WithScroll","WithSort","WithAction","WithRegister","WithChip"];export{We as Basic,he as WithAction,z as WithChip,$ as WithRegister,G as WithScroll,L as WithSearch,se as WithSort,v as WithTitle,A as WithTotalizer,D as WithoutChildren,Ie as __namedExportsOrder,fe as default};
//# sourceMappingURL=Table.stories-210d6cb9.js.map
