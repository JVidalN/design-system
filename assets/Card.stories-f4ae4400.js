var p=Object.defineProperty;var a=(e,t)=>p(e,"name",{value:t,configurable:!0});import{a as m,j as l}from"./jsx-runtime-a0b48ef0.js";import"./iframe-aed1102b.js";function n({title:e,titleAlignment:t="center",width:o="full",height:s="auto",children:u}){return m("div",{className:`
        bg-neutral-light-base 
        rounded-xl 
        border
        border-neutral-light-light03
        shadow-md
        p-6
        overflow-y-auto
      `,style:{width:`${o==="full"?"100%":o}`,height:`${s==="auto"?"auto":s}`},children:[e&&l("div",{className:`
            font-bold
            text-lg
            text-neutral-dark-base
            mb-4 
            ${t==="left"?"text-left":t==="center"?"text-center":"text-right"}
          `,children:e}),l("div",{children:u})]})}a(n,"Card");try{n.displayName="Card",n.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},titleAlignment:{defaultValue:{value:"center"},description:"",name:"titleAlignment",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},width:{defaultValue:{value:"full"},description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:{value:"auto"},description:"",name:"height",required:!1,type:{name:"string"}}}}}catch{}const f={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from "./Card";

export default {
    title: 'Design System/Componentes/Card',
    component: Card,
    args: {
        title:"Example Card",
        titleAlignment:"center",
        children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    argTypes: {
        titleAlignment: {
            control: {
                type:'inline-radio'
            }
        },
        width: {
            table: {
                disable: true
            }
        },
        height: {
            table: {
                disable: true
            }
        }
    }
} as ComponentMeta<typeof Card>;

const InputTextTemplate: ComponentStory<typeof Card> = ({children,...args}) => <Card {...args}>{children}</Card>;

export const Default = InputTextTemplate.bind({});
Default.storyName = 'Default Responsivo';

export const Resize = InputTextTemplate.bind({});
Resize.args = {
    width: '300px',
    height: '300px'
}
Resize.argTypes = {
    width: {
        table: {
            disable: false
        }
    },
    height: {
        table: {
            disable: false
        }
    }
}
Resize.storyName = 'Altura e Largura';

export const WithoutTitle = InputTextTemplate.bind({});
WithoutTitle.args = {
    title:''
}
WithoutTitle.storyName = 'Sem Título';
`,locationsMap:{default:{startLoc:{col:55,line:31},endLoc:{col:112,line:31},startBody:{col:55,line:31},endBody:{col:112,line:31}},resize:{startLoc:{col:55,line:31},endLoc:{col:112,line:31},startBody:{col:55,line:31},endBody:{col:112,line:31}},"without-title":{startLoc:{col:55,line:31},endLoc:{col:112,line:31},startBody:{col:55,line:31},endBody:{col:112,line:31}}}}},title:"Design System/Componentes/Card",component:n,args:{title:"Example Card",titleAlignment:"center",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},argTypes:{titleAlignment:{control:{type:"inline-radio"}},width:{table:{disable:!0}},height:{table:{disable:!0}}}},i=a(({children:e,...t})=>l(n,{...t,children:e}),"InputTextTemplate"),c=i.bind({});c.storyName="Default Responsivo";const r=i.bind({});r.args={width:"300px",height:"300px"};r.argTypes={width:{table:{disable:!1}},height:{table:{disable:!1}}};r.storyName="Altura e Largura";const d=i.bind({});d.args={title:""};d.storyName="Sem Título";const b=["Default","Resize","WithoutTitle"];export{c as Default,r as Resize,d as WithoutTitle,b as __namedExportsOrder,f as default};
//# sourceMappingURL=Card.stories-f4ae4400.js.map
