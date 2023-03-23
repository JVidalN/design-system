import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState, useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import { Chip } from "./Chip";

export default {
    title: 'Design System/Componentes/Chip',
    component: Chip.Core
} as ComponentMeta<typeof Chip.Core>;

const InputTextTemplate: ComponentStory<typeof Chip.Core> = (args) => <Chip.Core {...args}/> 

export const Default = InputTextTemplate.bind({});
Default.args = {
    children:'Componente Chip',
    close:false
}

export const WithInputAndLimit: ComponentStory<typeof Chip.Input> = ({children, ...args}) => {

    const [chips, setChips] = useState<string[]>([]);

    useEffect(() => {
        action('onChange Event')(`Valor(es) selecionado(s): ${chips}`);
    }, [chips])

    return (
        <Chip.Input {...args} onChange={(chip) => setChips(chip)}>
            <Chip.Core>
                {children}
            </Chip.Core> 
        </Chip.Input>
    )
};
WithInputAndLimit.args = {
    placeholder:'Adicione..',
    children:'Componente Chip'
};
WithInputAndLimit.argTypes = {
    children: {
        table: {
            disable: true
        }
    }
};
WithInputAndLimit.storyName = 'Com Input Sem Limite';

export const WithInputWithoutLimit = WithInputAndLimit.bind({});
WithInputWithoutLimit.args = {
    limit: 10,
    placeholder:'Adicione..',
    children:'Componente Chip'
};
WithInputWithoutLimit.argTypes = {
    children: {
        table: {
            disable: true
        }
    }
};
WithInputWithoutLimit.storyName = 'Com Input Limite';
