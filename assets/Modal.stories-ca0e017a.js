var v=Object.defineProperty;var o=(n,t)=>v(n,"name",{value:t,configurable:!0});import{r as c,j as e,F as y,a as r}from"./jsx-runtime-451690fa.js";import{a as s}from"./index-f6fb4ba6.js";import{I as k}from"./Icon-96a441ee.js";import{B as p}from"./Button-3daed292.js";import"./iframe-655d5b22.js";import"./make-decorator-5b0a2a6f.js";import"./index-50ee27ec.js";function i({title:n,isOpen:t,onClose:a,footer:l,children:m,width:d="448px",height:f="300px"}){const[g,h]=c.useState(t);c.useEffect(()=>{h(t)},[t]);const x=o(()=>{h(!1),a()},"handleModalClose");return e(y,{children:g&&e("div",{className:" fixed  z-1  top-0  left-0  w-screen  h-screen  flex  items-center  justify-center ",children:r("div",{className:`
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
            `,style:{width:`${d&&d}`,height:`${f&&f}`},children:[n&&r("div",{className:"px-4 py-4",children:[e("div",{className:"font-roboto font-medium text-lg text-neutral-dark-base",children:n}),e("div",{className:"absolute top-0 right-0 p-4 focus:outline-none",children:e(k,{name:"close",width:"14",height:"14",color:"text-neutral-dark-base",onClick:x})})]}),e("div",{className:"grow p-6 break-words overflow-auto",children:m}),l&&e("div",{className:" flex  w-full  h-fit gap-6  justify-end p-6 ",children:l})]})})})}o(i,"Modal");try{i.displayName="Modal",i.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},height:{defaultValue:{value:"300px"},description:"",name:"height",required:!1,type:{name:"string"}},width:{defaultValue:{value:"448px"},description:"",name:"width",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}}}}}catch{}const S={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';
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
`,locationsMap:{default:{startLoc:{col:52,line:29},endLoc:{col:1,line:50},startBody:{col:52,line:29},endBody:{col:1,line:50}},"with-footer":{startLoc:{col:52,line:29},endLoc:{col:1,line:50},startBody:{col:52,line:29},endBody:{col:1,line:50}},resize:{startLoc:{col:52,line:29},endLoc:{col:1,line:50},startBody:{col:52,line:29},endBody:{col:1,line:50}}}}},title:"Design System/Componentes/Modal",component:i,args:{title:"Título da Modal",children:"Conteúdo da modal"},argTypes:{isOpen:{table:{disable:!0}},onClose:{table:{disable:!0}}}},u=o(({children:n,...t})=>{const[a,l]=c.useState(!1);return r("div",{children:[e(p,{onClick:o(()=>{l(!0),s("onClick Event")(`Modal aberta: ${a}`)},"handleOpen"),label:"Abrir Modal"}),e(i,{...t,isOpen:a,onClose:o(()=>{l(!1),s("onClick Event")(`Modal aberta: ${a}`)},"handleClose"),children:n})]})},"ModalTemplate"),O=u.bind({});O.storyName="Default";const b=u.bind({}),C=o(()=>r(y,{children:[e(p,{onClick:s("onClick Event Fechar"),variant:"secondary",label:"Fechar"}),e(p,{onClick:s("onClick Event Descartar"),label:"Descartar"})]}),"footer");b.args={footer:C()};b.storyName="Com Radapé";const M=u.bind({});M.args={width:"400px",height:"400px",footer:C()};M.storyName="Altura e Largura";const T=["Default","WithFooter","Resize"];export{O as Default,M as Resize,b as WithFooter,T as __namedExportsOrder,S as default};
//# sourceMappingURL=Modal.stories-ca0e017a.js.map
