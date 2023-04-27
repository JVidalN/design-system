var u=Object.defineProperty;var n=(t,e)=>u(t,"name",{value:e,configurable:!0});import{a as p,j as r,r as s}from"./jsx-runtime-8a7beee7.js";import{a as m}from"./index-ca834ea7.js";import"./iframe-78ed07bd.js";import"./make-decorator-21a1830f.js";function a({onChange:t,checked:e,disabled:o=!1,className:c}){const i=n(d=>{t(d.target.checked)},"handleChange");return p("label",{className:`
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
                ${e?"border-brand-primary-dark bg-brand-primary-dark":"border-neutral-dark-dark03 bg-neutral-dark-dark03"}
                ${o?"pointer-events-none opacity-70":""}
                ${c}
            `,children:[r("input",{type:"checkbox",className:"absolute opacity-0 w-0 h-0",checked:e,onChange:i}),r("span",{className:`
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
                    ${e?"translate-x-full":"translate-x-0"}
                `})]})}n(a,"InputSwitch");try{a.displayName="InputSwitch",a.__docgenInfo={description:"O componente `InputSwitch` é um componente usado para alternar entre dois estados, tais como on/off, verdaeiro/falso, sim/não, etc.",displayName:"InputSwitch",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: boolean) => void"}},checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const k={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
    
  const [checked, setChecked] = useState(false)

  useEffect(() => {
      action('Switch Event')(\`Valor atual: \${checked}\`)
  }, [checked])

  return (
    <InputSwitch 
      {...args}
      onChange={setChecked}
      checked={checked}
    />
  )
};
Default.args = {
  checked: false
}
Default.storyName = 'Default';
`,locationsMap:{default:{startLoc:{col:59,line:31},endLoc:{col:1,line:46},startBody:{col:59,line:31},endBody:{col:1,line:46}}}}},title:"Design System/Componentes/InputSwitch",component:a,args:{disabled:!1},argTypes:{checked:{table:{disable:!0}},onChange:{table:{disable:!0}},className:{table:{disable:!0}}}},l=n(t=>{const[e,o]=s.useState(!1);return s.useEffect(()=>{m("Switch Event")(`Valor atual: ${e}`)},[e]),r(a,{...t,onChange:o,checked:e})},"Default");l.args={checked:!1};l.storyName="Default";const S=["Default"];export{l as Default,S as __namedExportsOrder,k as default};
//# sourceMappingURL=InputSwitch.stories-eb07fdb1.js.map
