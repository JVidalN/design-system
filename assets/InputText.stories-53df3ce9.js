var p=Object.defineProperty;var r=(o,s)=>p(o,"name",{value:s,configurable:!0});import{I as d}from"./Icon-96a441ee.js";import{I as e}from"./InputText-8726494f.js";import{j as t}from"./jsx-runtime-451690fa.js";import"./index-50ee27ec.js";import"./iframe-655d5b22.js";const b={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '../IconComponent/Icon';
import { InputText } from "./InputText";

export default {
    title: 'Design System/Componentes/InputText',
    component: InputText.Root,
    args: {
        children: [
            <InputText.Input key='default' placeholder='Escreva seu e-mail' type="text" />,
            <InputText.Icon key='defaultIcon'>
                <Icon 
                    name='search' 
                    width= '17.49px'
                    height= '17.49px'
                />
            </InputText.Icon>
        ],
    },
    argTypes: { 
        children: {
          table: {
            disable: true,
          }
        }
    }
} as ComponentMeta<typeof InputText.Root>;

const InputTextTemplate: ComponentStory<typeof InputText.Root> = (args) => <InputText.Root {...args} /> 

export const Default = InputTextTemplate.bind({});

export const WithoutIcon = InputTextTemplate.bind({});
WithoutIcon.args = {
    children: <InputText.Input key='withoutIcon' placeholder='Escreva seu e-mail' type="text" />
}
WithoutIcon.storyName = 'Sem Ícone';

export const Enabled = InputTextTemplate.bind({});
Enabled.args = {
    children: <InputText.Input key='enabled' placeholder='Escreva seu e-mail' type="text" autoFocus/>
}
Enabled.storyName = 'Ativo';

export const Disabled = InputTextTemplate.bind({});
Disabled.args = {
    children: <InputText.Input key='disabled' placeholder='Escreva seu e-mail' type="text" disabled/>
}
Disabled.storyName = 'Desabilitado';

export const WithError = InputTextTemplate.bind({});
WithError.args = {
    children: <InputText.Input key='withError' placeholder='Escreva seu e-mail' type="text" required/>
}
WithError.storyName = 'Com Erro';
`,locationsMap:{default:{startLoc:{col:65,line:29},endLoc:{col:103,line:29},startBody:{col:65,line:29},endBody:{col:103,line:29}},"without-icon":{startLoc:{col:65,line:29},endLoc:{col:103,line:29},startBody:{col:65,line:29},endBody:{col:103,line:29}},enabled:{startLoc:{col:65,line:29},endLoc:{col:103,line:29},startBody:{col:65,line:29},endBody:{col:103,line:29}},disabled:{startLoc:{col:65,line:29},endLoc:{col:103,line:29},startBody:{col:65,line:29},endBody:{col:103,line:29}},"with-error":{startLoc:{col:65,line:29},endLoc:{col:103,line:29},startBody:{col:65,line:29},endBody:{col:103,line:29}}}}},title:"Design System/Componentes/InputText",component:e.Root,args:{children:[t(e.Input,{placeholder:"Escreva seu e-mail",type:"text"},"default"),t(e.Icon,{children:t(d,{name:"search",width:"17.49px",height:"17.49px"})},"defaultIcon")]},argTypes:{children:{table:{disable:!0}}}},n=r(o=>t(e.Root,{...o}),"InputTextTemplate"),T=n.bind({}),l=n.bind({});l.args={children:t(e.Input,{placeholder:"Escreva seu e-mail",type:"text"},"withoutIcon")};l.storyName="Sem Ícone";const a=n.bind({});a.args={children:t(e.Input,{placeholder:"Escreva seu e-mail",type:"text",autoFocus:!0},"enabled")};a.storyName="Ativo";const i=n.bind({});i.args={children:t(e.Input,{placeholder:"Escreva seu e-mail",type:"text",disabled:!0},"disabled")};i.storyName="Desabilitado";const c=n.bind({});c.args={children:t(e.Input,{placeholder:"Escreva seu e-mail",type:"text",required:!0},"withError")};c.storyName="Com Erro";const E=["Default","WithoutIcon","Enabled","Disabled","WithError"];export{T as Default,i as Disabled,a as Enabled,c as WithError,l as WithoutIcon,E as __namedExportsOrder,b as default};
//# sourceMappingURL=InputText.stories-53df3ce9.js.map
