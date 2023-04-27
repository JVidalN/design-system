var m=Object.defineProperty;var o=(n,a)=>m(n,"name",{value:a,configurable:!0});import{I as p}from"./Icon-79f62659.js";import{a as c,j as e,R as h,r as T,F as u}from"./jsx-runtime-a0b48ef0.js";import"./inheritsLoose-b4b539fe.js";import"./index-c1baa2b9.js";import"./iframe-aed1102b.js";function i({children:n,activeTabIndex:a,onChange:r}){const l=o(d=>{r(d)},"onTabClick"),b=n[a];return c("div",{className:"flex flex-col w-full h-full",children:[e("div",{className:"flex border-b border-brand-primary-dark",children:n.map((d,s)=>h.cloneElement(d,{key:s,active:a===s,onTabClick:()=>l(s)}))}),e("div",{className:" mt-6 bg-neutral-light-base  rounded-xl  border border-neutral-light-light03 shadow-sm p-6 overflow-y-auto w-full h-auto ",children:b.props.children})]})}o(i,"TabSet");function t({label:n,children:a,active:r,onTabClick:l}){return e("button",{onClick:l,className:`
      font-roboto
      text-sm
      h-8
      px-3
      py-[5px]
      flex 
      items-center
      justify-center
      gap-[6px]
      border-x
      border-t
      border-brand-primary-dark
      rounded-t-xl
      text-brand-primary-dark
      ${r&&"outline-none text-neutral-light-base bg-brand-primary-dark shadow-lg"}
    `,children:n})}o(t,"Tab");try{i.displayName="TabSet",i.__docgenInfo={description:"",displayName:"TabSet",props:{activeTabIndex:{defaultValue:null,description:"",name:"activeTabIndex",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(index: any) => void"}}}}}catch{}try{t.displayName="Tab",t.__docgenInfo={description:"",displayName:"Tab",props:{active:{defaultValue:null,description:"Indica qual `Tab` está ativa.",name:"active",required:!1,type:{name:"boolean"}},onTabClick:{defaultValue:null,description:"Evento para mudar a `Tab` ativa quando for clicada.",name:"onTabClick",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"Elementos do tipo `Tab`.",name:"children",required:!0,type:{name:"ReactNode"}},label:{defaultValue:null,description:"Título da `Tab` que pode conter apenas o texto ou também um ícone.",name:"label",required:!0,type:{name:"ReactNode"}}}}}catch{}const I={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '../IconComponent/Icon';
import { Tab, TabSet } from "./TabSet";
import { useState } from 'react';

export default {
    title: 'Design System/Componentes/TabSet',
    component: TabSet,
    subcomponents:{ Tab },
    decorators: [
        (Story) => (
            <div className="w-[700px] border rounded-md p-2 bg-brand-background">
                <h1 className="text-3xl font-bold mb-4">Exemplo da TabSet</h1>
                {Story()}
            </div>
        ),
      ],
} as ComponentMeta<typeof TabSet>;

export const Default: ComponentStory<typeof TabSet> = (args) => {
    
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
            <TabSet 
                {...args}
                onChange={(index: number) => setActiveTabIndex(index)}
                activeTabIndex={activeTabIndex}
            >
                <Tab label="Tab 1">
                    <p>Qualquer conteúdo da Tab 1.</p>
                </Tab>
                <Tab label="Tab 2">
                    <p>Qualquer conteúdo da Tab 2.</p>
                </Tab>
                <Tab label="Tab 3">
                    <p>Qualquer conteúdo da Tab 3.</p>
                </Tab>
            </TabSet>
    )
}

export const WithIcon: ComponentStory<typeof TabSet> = (args) => {
    const tabOne = () => {
        return (
            <>
                <span>Tab 1</span>
                <Icon name='check' color='text-alert-success-dark' width='18' height='18' />
            </>
        )
    }
    const tabThree = () => {
        return (
            <>
                <span>Tab 3</span>
                <Icon name='cancel' color='text-alert-danger-dark' width='18' height='18' />
            </>
        )
    }
    
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <TabSet 
            {...args}
            onChange={(index: number) => setActiveTabIndex(index)}
            activeTabIndex={activeTabIndex}
        >
            <Tab label={tabOne()}>
                <p>Content for Tab 1 goes here.</p>
            </Tab>
            <Tab label="Tab 2">
                <p>Content for Tab 2 goes here.</p>
            </Tab>
            <Tab label={tabThree()}>
                <p>Content for Tab 3 goes here.</p>
            </Tab>
        </TabSet>
    )
}
`,locationsMap:{default:{startLoc:{col:54,line:20},endLoc:{col:1,line:41},startBody:{col:54,line:20},endBody:{col:1,line:41}},"with-icon":{startLoc:{col:55,line:43},endLoc:{col:1,line:80},startBody:{col:55,line:43},endBody:{col:1,line:80}}}}},title:"Design System/Componentes/TabSet",component:i,subcomponents:{Tab:t},decorators:[n=>c("div",{className:"w-[700px] border rounded-md p-2 bg-brand-background",children:[e("h1",{className:"text-3xl font-bold mb-4",children:"Exemplo da TabSet"}),n()]})]},C=o(n=>{const[a,r]=T.useState(0);return c(i,{...n,onChange:l=>r(l),activeTabIndex:a,children:[e(t,{label:"Tab 1",children:e("p",{children:"Qualquer conteúdo da Tab 1."})}),e(t,{label:"Tab 2",children:e("p",{children:"Qualquer conteúdo da Tab 2."})}),e(t,{label:"Tab 3",children:e("p",{children:"Qualquer conteúdo da Tab 3."})})]})},"Default"),_=o(n=>{const a=o(()=>c(u,{children:[e("span",{children:"Tab 1"}),e(p,{name:"check",color:"text-alert-success-dark",width:"18",height:"18"})]}),"tabOne"),r=o(()=>c(u,{children:[e("span",{children:"Tab 3"}),e(p,{name:"cancel",color:"text-alert-danger-dark",width:"18",height:"18"})]}),"tabThree"),[l,b]=T.useState(0);return c(i,{...n,onChange:d=>b(d),activeTabIndex:l,children:[e(t,{label:a(),children:e("p",{children:"Content for Tab 1 goes here."})}),e(t,{label:"Tab 2",children:e("p",{children:"Content for Tab 2 goes here."})}),e(t,{label:r(),children:e("p",{children:"Content for Tab 3 goes here."})})]})},"WithIcon"),k=["Default","WithIcon"];export{C as Default,_ as WithIcon,k as __namedExportsOrder,I as default};
//# sourceMappingURL=TabSet.stories-e52b72a1.js.map
