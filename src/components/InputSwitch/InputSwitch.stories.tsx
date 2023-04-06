import { ComponentMeta, ComponentStory } from '@storybook/react';
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
      action('Switch Event')(`Valor atual: ${checked}`)
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
