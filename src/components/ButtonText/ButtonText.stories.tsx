import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '../IconComponent/Icon';
import { ButtonText } from "./ButtonText";

export default {
    title: 'Design System/Componentes/ButtonText',
    component: ButtonText.Root,
    args: {
        disabled: false,
        underlined: false,
        children: <ButtonText.Label key='default-label'>Default</ButtonText.Label>,
        onClick: action('Default!')
    },
    argTypes: {
        variant: { 
            options: ['primary','secondary','danger'],
            control: {
                type: 'inline-radio'
            }
        },
        onClick:{
            table: {
                disable: true
            }
        },
        children:{
            table: {
                disable: true
            }
        }
    }
} as ComponentMeta<typeof ButtonText.Root>;

const ButtonTextTemplate: ComponentStory<typeof ButtonText.Root> = ({children, ...args}) => {
    return (
        <ButtonText.Root key='default-root' {...args}>
            {children}
        </ButtonText.Root>
    ) 
}

export const Default = ButtonTextTemplate.bind({});

export const WithIconLeft = ButtonTextTemplate.bind({});
WithIconLeft.args = {
    onClick: action('Com Ícone à Esquerda!'),
    variant: 'primary',
    children: [
        <ButtonText.Icon key='WithIconLeft-Icon'>
            <Icon name='xls' width='20' height='20' />
        </ButtonText.Icon>,
        <ButtonText.Label key='WithIconLeft-Label'>
            Com Ícone à Esquerda
        </ButtonText.Label>
    ]
}
WithIconLeft.storyName = 'Com Ícone à Esquerda';

export const WithIconRight = ButtonTextTemplate.bind({});
WithIconRight.args = {
    onClick: action('Com Ícone à Direita!'),
    variant: 'primary',
    children: [
        <ButtonText.Label key='WithIconRight-Label'>
            Com Ícone à Direita
        </ButtonText.Label>,
        <ButtonText.Icon key='WithIconRight-Icon'>
            <Icon name='arrowDown' width='12' height='7.2' />
        </ButtonText.Icon>
    ]
}
WithIconRight.storyName = 'Com Ícone à Direita';

export const Disabled = ButtonTextTemplate.bind({});
Disabled.args = {
    disabled: true,
    variant: 'danger',
    onClick: action('Desabilitado. Não deve exibir ação!'),
    children: [
        <ButtonText.Icon key='Disabled-Icon'>
            <Icon name='trash' width='20' height='20' />
        </ButtonText.Icon>,
        <ButtonText.Label key='Disabled-Label'>
            Desabilitado
        </ButtonText.Label>
    ]
}
Disabled.storyName = 'Desabilitado';

export const Underlined = ButtonTextTemplate.bind({});
Underlined.args = {
    underlined: true,
    variant: 'secondary',
    onClick: action('Sublinhado!'),
    children: [
        <ButtonText.Label key='Underlined-Label'>
            Sublinhado
        </ButtonText.Label>
    ]
}
Underlined.storyName = 'Sublinhado';

