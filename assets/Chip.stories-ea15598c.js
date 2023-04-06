var b=Object.defineProperty;var o=(e,i)=>b(e,"name",{value:i,configurable:!0});import{a as I,j as p,r}from"./jsx-runtime-451690fa.js";import{a as S}from"./index-f6fb4ba6.js";import{I as A}from"./Icon-96a441ee.js";import{I as y}from"./InputText-8726494f.js";import"./iframe-655d5b22.js";import"./make-decorator-5b0a2a6f.js";import"./index-50ee27ec.js";function u({children:e,close:i=!1,onClose:s}){return I("span",{className:`
    py-[2px]
    px-2
    rounded-[20px]
    inline-flex 
    relative 
    items-center 
    mr-2
    text-sm 
    h-[25px]
    text-neutral-dark-base
    bg-brand-primary-dark/[0.15] 
    ${i?"gap-[6px]":""}`,children:[e,i&&p(A,{name:"cancel",color:"text-brand-primary-dark",width:"15",height:"15",onClick:s})]})}o(u,"ChipCore");function g({children:e,limit:i,placeholder:s="Adicione..",onChange:h}){const[t,m]=r.useState([]),[d,f]=r.useState(""),x=o(()=>{r.Children.forEach(e,n=>{m([...t,n.props.children])})},"fillFirstChildren");r.useEffect(()=>{x()},[]),r.useEffect(()=>{t&&h(t)},[t]);const L=o(n=>{if(n.key==="Enter"){if(n.preventDefault(),i&&t.length>=i||!d)return;m([...t,d]),f("")}},"handleEnter"),W=o(n=>{const a=[...t];a.splice(n,1),m(a)},"handleClose");return I(y.Root,{className:"!p-0 !h-fit",children:[p(y.Input,{placeholder:s,type:"text",value:d,onChange:n=>{f(n.target.value)},onKeyUp:L}),p("div",{className:"flex flex-wrap w-fit h-fit gap-1 p-1",children:t.map((n,a)=>p(u,{close:!0,onClose:()=>W(a),children:n},a))})]})}o(g,"ChipInput");u.displayName="Chip.Core";g.displayName="Chip.Input";const l={Core:u,Input:g},V={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState, useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import { Chip } from "./Chip";

export default {
    title: 'Design System/Componentes/Chip',
    component: Chip.Core
} as ComponentMeta<typeof Chip.Core>;

const InputTextTemplate: ComponentStory<typeof Chip.Core> = (args) => <Chip.Core {...args}/> 

export const Default = InputTextTemplate.bind({});
Default.args = {
    children:'Componente Chip',
    close:false
}

export const WithInputAndLimit: ComponentStory<typeof Chip.Input> = ({children, ...args}) => {

    const [chips, setChips] = useState<string[]>([]);

    useEffect(() => {
        action('onChange Event')(\`Valor(es) selecionado(s): \${chips}\`);
    }, [chips])

    return (
        <Chip.Input {...args} onChange={(chip) => setChips(chip)}>
            <Chip.Core>
                {children}
            </Chip.Core> 
        </Chip.Input>
    )
};
WithInputAndLimit.args = {
    placeholder:'Adicione..',
    children:'Componente Chip'
};
WithInputAndLimit.argTypes = {
    children: {
        table: {
            disable: true
        }
    }
};
WithInputAndLimit.storyName = 'Com Input Sem Limite';

export const WithInputWithoutLimit = WithInputAndLimit.bind({});
WithInputWithoutLimit.args = {
    limit: 10,
    placeholder:'Adicione..',
    children:'Componente Chip'
};
WithInputWithoutLimit.argTypes = {
    children: {
        table: {
            disable: true
        }
    }
};
WithInputWithoutLimit.storyName = 'Com Input Limite';
`,locationsMap:{default:{startLoc:{col:60,line:11},endLoc:{col:92,line:11},startBody:{col:60,line:11},endBody:{col:92,line:11}},"with-input-and-limit":{startLoc:{col:68,line:19},endLoc:{col:1,line:34},startBody:{col:68,line:19},endBody:{col:1,line:34}},"with-input-without-limit":{startLoc:{col:68,line:19},endLoc:{col:1,line:34},startBody:{col:68,line:19},endBody:{col:1,line:34}}}}},title:"Design System/Componentes/Chip",component:l.Core},E=o(e=>p(l.Core,{...e}),"InputTextTemplate"),T=E.bind({});T.args={children:"Componente Chip",close:!1};const c=o(({children:e,...i})=>{const[s,h]=r.useState([]);return r.useEffect(()=>{S("onChange Event")(`Valor(es) selecionado(s): ${s}`)},[s]),p(l.Input,{...i,onChange:t=>h(t),children:p(l.Core,{children:e})})},"WithInputAndLimit");c.args={placeholder:"Adicione..",children:"Componente Chip"};c.argTypes={children:{table:{disable:!0}}};c.storyName="Com Input Sem Limite";const C=c.bind({});C.args={limit:10,placeholder:"Adicione..",children:"Componente Chip"};C.argTypes={children:{table:{disable:!0}}};C.storyName="Com Input Limite";const _=["Default","WithInputAndLimit","WithInputWithoutLimit"];export{T as Default,c as WithInputAndLimit,C as WithInputWithoutLimit,_ as __namedExportsOrder,V as default};
//# sourceMappingURL=Chip.stories-ea15598c.js.map
