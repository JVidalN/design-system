import { ComponentMeta, ComponentStory } from '@storybook/react';
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
    action('onClick Event')(`Modal aberta: ${isOpen}`);
  }

  const handleOpen = () => {
    setIsOpen(true);
    action('onClick Event')(`Modal aberta: ${isOpen}`);
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
