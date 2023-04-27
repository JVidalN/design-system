var g=Object.defineProperty;var t=(n,o)=>g(n,"name",{value:o,configurable:!0});import{j as e,F as f,a as r,r as M}from"./jsx-runtime-a0b48ef0.js";import{a as s}from"./index-9201d692.js";import{I as x}from"./Icon-79f62659.js";import{B as c}from"./Button-4e57b723.js";import"./iframe-aed1102b.js";import"./make-decorator-413b56e0.js";import"./inheritsLoose-b4b539fe.js";import"./index-c1baa2b9.js";function i({title:n,isOpen:o,onClose:a,footer:l,children:u,width:d="448px",height:m="300px"}){const C=t(()=>{a()},"handleModalClose");return e(f,{children:o&&e("div",{className:" fixed  z-1  top-0  left-0  w-screen  h-screen  flex  items-center  justify-center ",children:r("div",{className:`
              relative 
              w-full
              mx-auto 
              rounded-md 
              shadow-lg 
              z-1 
              flex
              flex-col
              justify-between
              bg-neutral-light-base
            `,style:{width:`${d&&d}`,height:`${m&&m}`},children:[n&&r("div",{className:"px-4 py-4",children:[e("div",{className:"font-roboto font-medium text-lg text-neutral-dark-base",children:n}),e("div",{className:"absolute top-0 right-0 p-4 focus:outline-none",children:e(x,{name:"close",width:"14",height:"14",color:"text-neutral-dark-base",onClick:C})})]}),e("div",{className:"grow p-6 break-words overflow-auto",children:u}),l&&e("div",{className:" flex  w-full  h-fit gap-6  justify-end p-6 ",children:l})]})})})}t(i,"Modal");try{i.displayName="Modal",i.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},height:{defaultValue:{value:"300px"},description:"",name:"height",required:!1,type:{name:"string"}},width:{defaultValue:{value:"448px"},description:"",name:"width",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}}}}}catch{}const R={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState, useEffect } from 'react'
import { action } from '@storybook/addon-actions'
import { Modal } from './Modal'
import { Button } from '../Button/Button';

export default {
    title: "Design System/Componentes/Modal",
    component: Modal,
    args: {
      title: 'Título da Modal',
      children: 'Conteúdo da modal'
    },
    argTypes: {
      isOpen: {
        table: {
          disable: true
        }
      },
      onClose: {
        table: {
          disable: true
        }
      }
    }
} as ComponentMeta<typeof Modal>;


const ModalTemplate: ComponentStory<typeof Modal> = ({children, ...args}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    action('onClick Event')(\`Modal aberta: \${isOpen}\`);
  }

  const handleOpen = () => {
    setIsOpen(true);
    action('onClick Event')(\`Modal aberta: \${isOpen}\`);
  }

  return (
    <div>
      <Button onClick={handleOpen} label='Abrir Modal' />
      <Modal {...args} isOpen={isOpen} onClose={handleClose}>
        {children}
      </Modal>
    </div>
  )
};

export const Default = ModalTemplate.bind({});
Default.storyName = 'Default';

export const WithFooter = ModalTemplate.bind({});
const footer = () => {
  return (
    <>
      <Button onClick={action('onClick Event Fechar')} variant='secondary' label='Fechar' />
      <Button onClick={action('onClick Event Descartar')} label='Descartar' />
    </>
  )
}
WithFooter.args = {
  footer:footer()
}
WithFooter.storyName = 'Com Radapé';

export const Resize = ModalTemplate.bind({});
Resize.args = {
  width: '400px',
  height: '400px',
  footer:footer()
}
Resize.storyName = 'Altura e Largura';
`,locationsMap:{default:{startLoc:{col:52,line:29},endLoc:{col:1,line:50},startBody:{col:52,line:29},endBody:{col:1,line:50}},"with-footer":{startLoc:{col:52,line:29},endLoc:{col:1,line:50},startBody:{col:52,line:29},endBody:{col:1,line:50}},resize:{startLoc:{col:52,line:29},endLoc:{col:1,line:50},startBody:{col:52,line:29},endBody:{col:1,line:50}}}}},title:"Design System/Componentes/Modal",component:i,args:{title:"Título da Modal",children:"Conteúdo da modal"},argTypes:{isOpen:{table:{disable:!0}},onClose:{table:{disable:!0}}}},p=t(({children:n,...o})=>{const[a,l]=M.useState(!1);return r("div",{children:[e(c,{onClick:t(()=>{l(!0),s("onClick Event")(`Modal aberta: ${a}`)},"handleOpen"),label:"Abrir Modal"}),e(i,{...o,isOpen:a,onClose:t(()=>{l(!1),s("onClick Event")(`Modal aberta: ${a}`)},"handleClose"),children:n})]})},"ModalTemplate"),v=p.bind({});v.storyName="Default";const h=p.bind({}),y=t(()=>r(f,{children:[e(c,{onClick:s("onClick Event Fechar"),variant:"secondary",label:"Fechar"}),e(c,{onClick:s("onClick Event Descartar"),label:"Descartar"})]}),"footer");h.args={footer:y()};h.storyName="Com Radapé";const b=p.bind({});b.args={width:"400px",height:"400px",footer:y()};b.storyName="Altura e Largura";const T=["Default","WithFooter","Resize"];export{v as Default,b as Resize,h as WithFooter,T as __namedExportsOrder,R as default};
//# sourceMappingURL=Modal.stories-e899320f.js.map
