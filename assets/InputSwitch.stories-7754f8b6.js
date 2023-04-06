var m=Object.defineProperty;var a=(e,t)=>m(e,"name",{value:t,configurable:!0});import{r as s,a as f,j as l}from"./jsx-runtime-451690fa.js";import{a as h}from"./index-f6fb4ba6.js";import"./iframe-655d5b22.js";import"./make-decorator-5b0a2a6f.js";function n({onChange:e,checked:t,disabled:o=!1,className:u}){const[r,d]=s.useState(t),p=a(c=>{d(c.target.checked),e(c.target.checked)},"handleChange");return f("label",{className:`
                relative 
                flex
                items-center
                justify-items-start
                p-[1px]
                w-10
                h-[22px] 
                border 
                rounded-2xl 
                cursor-pointer
                ${r?"border-brand-primary-dark bg-brand-primary-dark":"border-neutral-dark-dark03 bg-neutral-dark-dark03"}
                ${o?"pointer-events-none opacity-70":""}
                ${u}
            `,children:[l("input",{type:"checkbox",className:"absolute opacity-0 w-0 h-0",checked:r,onChange:p}),l("span",{className:`
                    relative 
                    inline-block 
                    w-[18px] 
                    h-[18px] 
                    bg-neutral-light-base 
                    rounded-2xl 
                    shadow-inner 
                    transform 
                    translate-x-0 
                    transition-transform 
                    ease-in-out 
                    duration-200 
                    ${r?"translate-x-full":"translate-x-0"}
                `})]})}a(n,"InputSwitch");try{n.displayName="InputSwitch",n.__docgenInfo={description:"O componente `InputSwitch` é um componente usado para alternar entre dois estados, tais como on/off, verdaeiro/falso, sim/não, etc.",displayName:"InputSwitch",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: boolean) => void"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const w={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState, useEffect } from 'react'
import { action } from '@storybook/addon-actions'
import { InputSwitch } from './InputSwitch'

export default {
    title: "Design System/Componentes/InputSwitch",
    component: InputSwitch,
    args: {
      disabled:false
    },
    argTypes: {
      checked: {
        table: {
            disable: true
        }
      },
      onChange: {
        table: {
            disable: true
        }
      },
      className: {
        table: {
            disable: true
        }
      }
    }
} as ComponentMeta<typeof InputSwitch>;

export const Default: ComponentStory<typeof InputSwitch> = (args) => {
    
  const [value, setValue] = useState(false)

  useEffect(() => {
      action('Switch Event')(\`Valor atual: \${value}\`)
  }, [value])

  return (
    <InputSwitch 
      {...args}
      onChange={setValue}
    />
  )
};
Default.args = {
  checked: false
}
Default.storyName = 'Default';
`,locationsMap:{default:{startLoc:{col:59,line:31},endLoc:{col:1,line:45},startBody:{col:59,line:31},endBody:{col:1,line:45}}}}},title:"Design System/Componentes/InputSwitch",component:n,args:{disabled:!1},argTypes:{checked:{table:{disable:!0}},onChange:{table:{disable:!0}},className:{table:{disable:!0}}}},i=a(e=>{const[t,o]=s.useState(!1);return s.useEffect(()=>{h("Switch Event")(`Valor atual: ${t}`)},[t]),l(n,{...e,onChange:o})},"Default");i.args={checked:!1};i.storyName="Default";const x=["Default"];export{i as Default,x as __namedExportsOrder,w as default};
//# sourceMappingURL=InputSwitch.stories-7754f8b6.js.map
