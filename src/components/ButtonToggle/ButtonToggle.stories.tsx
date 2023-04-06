import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState, useEffect } from "react";
import { action } from "@storybook/addon-actions";
import { ButtonToggle } from "./ButtonToggle";
import { Icon } from '../IconComponent/Icon';

export default {
    title: 'Design System/Componentes/ButtonToggle',
    component: ButtonToggle.Root,
    argTypes: { 
        children: {
            table: {
                disable: true
            }
        }
    }
} as ComponentMeta<typeof ButtonToggle.Root>;


const ButtonToggleTemplate: ComponentStory<typeof ButtonToggle.Root> = ({children, ...args}) => {
    const [activeChild, setActiveChild] = useState<'left' | 'right'>('left');

    useEffect(() => {
        action('Button Toggle Event')(`Lado ativo: ${activeChild}`)
    }, [activeChild]);

    return (
        <ButtonToggle.Root 
            {...args} 
            onChange={(activatedSide: any) => setActiveChild(activatedSide)}
            activeChild={activeChild}
        >
            {children}
        </ButtonToggle.Root>
    );
};


export const Text = ButtonToggleTemplate.bind({});
Text.args = { 
    children: [
        <ButtonToggle.Left>
            Cliente
        </ButtonToggle.Left>,
        <ButtonToggle.Right>
            Estabelecimento
        </ButtonToggle.Right>
    ]
};
Text.storyName = 'Com Texto';

export const IconExample = ButtonToggleTemplate.bind({});
IconExample.args = { 
    children: [
        <ButtonToggle.Left>
            <Icon name='chartCard' />
        </ButtonToggle.Left>,
        <ButtonToggle.Right>
            <Icon name='chartBar' />
        </ButtonToggle.Right>
    ]
};
IconExample.storyName = 'Com Ícone';
