var g=Object.defineProperty;var a=(o,i)=>g(o,"name",{value:i,configurable:!0});import{a as r}from"./index-9201d692.js";import{I as d}from"./Icon-79f62659.js";import{j as n}from"./jsx-runtime-a0b48ef0.js";import"./iframe-aed1102b.js";import"./make-decorator-413b56e0.js";import"./inheritsLoose-b4b539fe.js";import"./index-c1baa2b9.js";function h({variant:o="primary",children:i,disabled:s=!1,underlined:u=!1,onClick:B,...T}){const L=a(c=>{let t="";switch(c){case"primary":return t="text-brand-primary-dark hover:text-brand-primary-dark01 active:text-brand-primary-dark02",t;case"secondary":return t="text-neutral-dark-dark02 hover:text-neutral-dark-dark04 active:text-neutral-dark-dark01",t;case"danger":return t="text-extra-error hover:text-alert-danger-dark active:text-alert-danger-darkest",t}},"chooseStyle"),I=a(c=>{let t="";switch(c){case!0:return t="font-markpro text-base font-[450]",t;case!1:t="font-roboto text-base font-medium"}},"chooseFontStyle");return n("div",{className:`
                flex 
                flex-row
                items-center
                h-fit
                w-=fit
                bg-transparent
                cursor-pointer
                gap-1
                ${L(o)}
                ${I(u)}
                ${s&&"opacity-60 shadow-[0px_2px_0px_rgba(0,0,0,0.016)]"}
                ${u&&"underline"}
            `,onClick:s?void 0:B,...T,children:i})}a(h,"ButtonTextRoot");function m(o){return n("div",{children:o.children})}a(m,"ButtonTextIcon");function b(o){return n("span",{children:o.children})}a(b,"ButtonTextLabel");h.displayName="ButtonText.Root";m.displayName="ButtonText.Icon";b.displayName="ButtonText.Label";const e={Root:h,Label:b,Icon:m},S={parameters:{storySource:{source:`import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '../IconComponent/Icon';
import { ButtonText } from "./ButtonText";

export default {
    title: 'Design System/Componentes/ButtonText',
    component: ButtonText.Root,
    args: {
        disabled: false,
        underlined: false,
        children: <ButtonText.Label key='default-label'>Default</ButtonText.Label>,
        onClick: action('Default!')
    },
    argTypes: {
        variant: { 
            options: ['primary','secondary','danger'],
            control: {
                type: 'inline-radio'
            }
        },
        onClick:{
            table: {
                disable: true
            }
        },
        children:{
            table: {
                disable: true
            }
        }
    }
} as ComponentMeta<typeof ButtonText.Root>;

const ButtonTextTemplate: ComponentStory<typeof ButtonText.Root> = ({children, ...args}) => {
    return (
        <ButtonText.Root key='default-root' {...args}>
            {children}
        </ButtonText.Root>
    ) 
}

export const Default = ButtonTextTemplate.bind({});

export const WithIconLeft = ButtonTextTemplate.bind({});
WithIconLeft.args = {
    onClick: action('Com Ícone à Esquerda!'),
    variant: 'primary',
    children: [
        <ButtonText.Icon key='WithIconLeft-Icon'>
            <Icon name='xls' width='20' height='20' />
        </ButtonText.Icon>,
        <ButtonText.Label key='WithIconLeft-Label'>
            Com Ícone à Esquerda
        </ButtonText.Label>
    ]
}
WithIconLeft.storyName = 'Com Ícone à Esquerda';

export const WithIconRight = ButtonTextTemplate.bind({});
WithIconRight.args = {
    onClick: action('Com Ícone à Direita!'),
    variant: 'primary',
    children: [
        <ButtonText.Label key='WithIconRight-Label'>
            Com Ícone à Direita
        </ButtonText.Label>,
        <ButtonText.Icon key='WithIconRight-Icon'>
            <Icon name='arrowDown' width='12' height='7.2' />
        </ButtonText.Icon>
    ]
}
WithIconRight.storyName = 'Com Ícone à Direita';

export const Disabled = ButtonTextTemplate.bind({});
Disabled.args = {
    disabled: true,
    variant: 'danger',
    onClick: action('Desabilitado. Não deve exibir ação!'),
    children: [
        <ButtonText.Icon key='Disabled-Icon'>
            <Icon name='trash' width='20' height='20' />
        </ButtonText.Icon>,
        <ButtonText.Label key='Disabled-Label'>
            Desabilitado
        </ButtonText.Label>
    ]
}
Disabled.storyName = 'Desabilitado';

export const Underlined = ButtonTextTemplate.bind({});
Underlined.args = {
    underlined: true,
    variant: 'secondary',
    onClick: action('Sublinhado!'),
    children: [
        <ButtonText.Label key='Underlined-Label'>
            Sublinhado
        </ButtonText.Label>
    ]
}
Underlined.storyName = 'Sublinhado';

`,locationsMap:{default:{startLoc:{col:67,line:35},endLoc:{col:1,line:41},startBody:{col:67,line:35},endBody:{col:1,line:41}},"with-icon-left":{startLoc:{col:67,line:35},endLoc:{col:1,line:41},startBody:{col:67,line:35},endBody:{col:1,line:41}},"with-icon-right":{startLoc:{col:67,line:35},endLoc:{col:1,line:41},startBody:{col:67,line:35},endBody:{col:1,line:41}},disabled:{startLoc:{col:67,line:35},endLoc:{col:1,line:41},startBody:{col:67,line:35},endBody:{col:1,line:41}},underlined:{startLoc:{col:67,line:35},endLoc:{col:1,line:41},startBody:{col:67,line:35},endBody:{col:1,line:41}}}}},title:"Design System/Componentes/ButtonText",component:e.Root,args:{disabled:!1,underlined:!1,children:n(e.Label,{children:"Default"},"default-label"),onClick:r("Default!")},argTypes:{variant:{options:["primary","secondary","danger"],control:{type:"inline-radio"}},onClick:{table:{disable:!0}},children:{table:{disable:!0}}}},l=a(({children:o,...i})=>n(e.Root,{...i,children:o},"default-root"),"ButtonTextTemplate"),E=l.bind({}),x=l.bind({});x.args={onClick:r("Com Ícone à Esquerda!"),variant:"primary",children:[n(e.Icon,{children:n(d,{name:"xls",width:"20",height:"20"})},"WithIconLeft-Icon"),n(e.Label,{children:"Com Ícone à Esquerda"},"WithIconLeft-Label")]};x.storyName="Com Ícone à Esquerda";const p=l.bind({});p.args={onClick:r("Com Ícone à Direita!"),variant:"primary",children:[n(e.Label,{children:"Com Ícone à Direita"},"WithIconRight-Label"),n(e.Icon,{children:n(d,{name:"arrowDown",width:"12",height:"7.2"})},"WithIconRight-Icon")]};p.storyName="Com Ícone à Direita";const y=l.bind({});y.args={disabled:!0,variant:"danger",onClick:r("Desabilitado. Não deve exibir ação!"),children:[n(e.Icon,{children:n(d,{name:"trash",width:"20",height:"20"})},"Disabled-Icon"),n(e.Label,{children:"Desabilitado"},"Disabled-Label")]};y.storyName="Desabilitado";const f=l.bind({});f.args={underlined:!0,variant:"secondary",onClick:r("Sublinhado!"),children:[n(e.Label,{children:"Sublinhado"},"Underlined-Label")]};f.storyName="Sublinhado";const U=["Default","WithIconLeft","WithIconRight","Disabled","Underlined"];export{E as Default,y as Disabled,f as Underlined,x as WithIconLeft,p as WithIconRight,U as __namedExportsOrder,S as default};
//# sourceMappingURL=ButtonText.stories-978702f8.js.map
