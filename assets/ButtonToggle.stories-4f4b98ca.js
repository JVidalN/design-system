var y=Object.defineProperty;var o=(t,r)=>y(t,"name",{value:r,configurable:!0});import{j as e,r as s,R as m}from"./jsx-runtime-a0b48ef0.js";import{a as x}from"./index-9201d692.js";import{I as u}from"./Icon-79f62659.js";import"./iframe-aed1102b.js";import"./make-decorator-413b56e0.js";import"./inheritsLoose-b4b539fe.js";import"./index-c1baa2b9.js";function p({children:t,onChange:r,activeChild:l}){const c=o(()=>{r("left")},"handleLeftClick"),i=o(()=>{r("right")},"handleRightClick");return e("div",{className:" flex h-10  w-fit rounded-lg items-center font-roboto  text-sm  border border-brand-primary-dark ",children:s.Children.map(t,(n,b)=>{if(m.isValidElement(n)){const g={active:l==="left",onClick:c};return n.type===d&&(g.active=l==="right",g.onClick=i),m.cloneElement(n,g)}return n})})}o(p,"ButtonToggleRoot");function f({...t}){return e(h,{...t})}o(f,"ButtonToggleLeft");function d({...t}){return e(h,{...t})}o(d,"ButtonToggleRight");function h({children:t,active:r=!1,...l}){return e("div",{className:`
                w-full 
                h-full 
                rounded-lg 
                p-4
                flex
                items-center
                cursor-pointer
                right
                ${o(i=>{let n="";switch(i){case!0:return n="bg-brand-primary-dark text-neutral-light-base",n;default:return n="bg-neutral-light-base text-brand-primary-dark",n}},"getStyle")(r)}
            `,...l,children:t})}o(h,"ButtonToggleChild");p.displayName="ButtonToggle.Root";f.displayName="ButtonToggle.Left";d.displayName="ButtonToggle.Right";const a={Root:p,Left:f,Right:d},_={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState, useEffect } from "react";
import { action } from "@storybook/addon-actions";
import { ButtonToggle } from "./ButtonToggle";
import { Icon } from '../IconComponent/Icon';

export default {
    title: 'Design System/Componentes/ButtonToggle',
    component: ButtonToggle.Root,
    argTypes: { 
        children: {
            table: {
                disable: true
            }
        }
    }
} as ComponentMeta<typeof ButtonToggle.Root>;


const ButtonToggleTemplate: ComponentStory<typeof ButtonToggle.Root> = ({children, ...args}) => {
    const [activeChild, setActiveChild] = useState<'left' | 'right'>('left');

    useEffect(() => {
        action('Button Toggle Event')(\`Lado ativo: \${activeChild}\`)
    }, [activeChild]);

    return (
        <ButtonToggle.Root 
            {...args} 
            onChange={(activatedSide: any) => setActiveChild(activatedSide)}
            activeChild={activeChild}
        >
            {children}
        </ButtonToggle.Root>
    );
};


export const Text = ButtonToggleTemplate.bind({});
Text.args = { 
    children: [
        <ButtonToggle.Left>
            Cliente
        </ButtonToggle.Left>,
        <ButtonToggle.Right>
            Estabelecimento
        </ButtonToggle.Right>
    ]
};
Text.storyName = 'Com Texto';

export const IconExample = ButtonToggleTemplate.bind({});
IconExample.args = { 
    children: [
        <ButtonToggle.Left>
            <Icon name='chartCard' />
        </ButtonToggle.Left>,
        <ButtonToggle.Right>
            <Icon name='chartBar' />
        </ButtonToggle.Right>
    ]
};
IconExample.storyName = 'Com Ícone';
`,locationsMap:{text:{startLoc:{col:71,line:20},endLoc:{col:1,line:36},startBody:{col:71,line:20},endBody:{col:1,line:36}},"icon-example":{startLoc:{col:71,line:20},endLoc:{col:1,line:36},startBody:{col:71,line:20},endBody:{col:1,line:36}}}}},title:"Design System/Componentes/ButtonToggle",component:a.Root,argTypes:{children:{table:{disable:!0}}}},T=o(({children:t,...r})=>{const[l,c]=s.useState("left");return s.useEffect(()=>{x("Button Toggle Event")(`Lado ativo: ${l}`)},[l]),e(a.Root,{...r,onChange:i=>c(i),activeChild:l,children:t})},"ButtonToggleTemplate"),B=T.bind({});B.args={children:[e(a.Left,{children:"Cliente"}),e(a.Right,{children:"Estabelecimento"})]};B.storyName="Com Texto";const C=T.bind({});C.args={children:[e(a.Left,{children:e(u,{name:"chartCard"})}),e(a.Right,{children:e(u,{name:"chartBar"})})]};C.storyName="Com Ícone";const w=["Text","IconExample"];export{C as IconExample,B as Text,w as __namedExportsOrder,_ as default};
//# sourceMappingURL=ButtonToggle.stories-4f4b98ca.js.map
