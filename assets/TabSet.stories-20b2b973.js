var m=Object.defineProperty;var t=(n,o)=>m(n,"name",{value:o,configurable:!0});import{I as s}from"./Icon-96a441ee.js";import{r as T,a as r,j as e,R as h,F as p}from"./jsx-runtime-451690fa.js";import"./index-50ee27ec.js";import"./iframe-655d5b22.js";function c({children:n}){const[o,l]=T.useState(0),d=t(b=>{l(b)},"onTabClick"),u=n[o];return r("div",{className:"flex flex-col w-full h-full",children:[e("div",{className:"flex border-b border-brand-primary-dark",children:n.map((b,i)=>h.cloneElement(b,{key:i,active:o===i,onTabClick:()=>d(i)}))}),e("div",{className:" mt-6 bg-neutral-light-base  rounded-xl  border border-neutral-light-light03 shadow-sm p-6 overflow-y-auto w-full h-auto ",children:u.props.children})]})}t(c,"TabSet");function a({label:n,children:o,active:l,onTabClick:d}){return e("button",{onClick:d,className:`
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
      ${l&&"outline-none text-neutral-light-base bg-brand-primary-dark shadow-lg"}
    `,children:n})}t(a,"Tab");try{c.displayName="TabSet",c.__docgenInfo={description:"",displayName:"TabSet",props:{}}}catch{}try{a.displayName="Tab",a.__docgenInfo={description:"",displayName:"Tab",props:{active:{defaultValue:null,description:"Indica qual `Tab` está ativa.",name:"active",required:!1,type:{name:"boolean"}},onTabClick:{defaultValue:null,description:"Evento para mudar a `Tab` ativa quando for clicada.",name:"onTabClick",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"Elementos do tipo `Tab`.",name:"children",required:!0,type:{name:"ReactNode"}},label:{defaultValue:null,description:"Título da `Tab` que pode conter apenas o texto ou também um ícone.",name:"label",required:!0,type:{name:"ReactNode"}}}}}catch{}const _={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '../IconComponent/Icon';
import { Tab, TabSet } from "./TabSet";

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

    return (
            <TabSet {...args}>
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

    return (
        <TabSet {...args}>
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
`,locationsMap:{default:{startLoc:{col:54,line:19},endLoc:{col:1,line:34},startBody:{col:54,line:19},endBody:{col:1,line:34}},"with-icon":{startLoc:{col:55,line:36},endLoc:{col:1,line:67},startBody:{col:55,line:36},endBody:{col:1,line:67}}}}},title:"Design System/Componentes/TabSet",component:c,subcomponents:{Tab:a},decorators:[n=>r("div",{className:"w-[700px] border rounded-md p-2 bg-brand-background",children:[e("h1",{className:"text-3xl font-bold mb-4",children:"Exemplo da TabSet"}),n()]})]},k=t(n=>r(c,{...n,children:[e(a,{label:"Tab 1",children:e("p",{children:"Qualquer conteúdo da Tab 1."})}),e(a,{label:"Tab 2",children:e("p",{children:"Qualquer conteúdo da Tab 2."})}),e(a,{label:"Tab 3",children:e("p",{children:"Qualquer conteúdo da Tab 3."})})]}),"Default"),C=t(n=>{const o=t(()=>r(p,{children:[e("span",{children:"Tab 1"}),e(s,{name:"check",color:"text-alert-success-dark",width:"18",height:"18"})]}),"tabOne"),l=t(()=>r(p,{children:[e("span",{children:"Tab 3"}),e(s,{name:"cancel",color:"text-alert-danger-dark",width:"18",height:"18"})]}),"tabThree");return r(c,{...n,children:[e(a,{label:o(),children:e("p",{children:"Content for Tab 1 goes here."})}),e(a,{label:"Tab 2",children:e("p",{children:"Content for Tab 2 goes here."})}),e(a,{label:l(),children:e("p",{children:"Content for Tab 3 goes here."})})]})},"WithIcon"),v=["Default","WithIcon"];export{k as Default,C as WithIcon,v as __namedExportsOrder,_ as default};
//# sourceMappingURL=TabSet.stories-20b2b973.js.map
