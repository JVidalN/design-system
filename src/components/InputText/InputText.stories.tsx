import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from '../IconComponent/Icon';
import { InputText } from "./InputText";

export default {
    title: 'Design System/Componentes/InputText',
    component: InputText.Root,
    args: {
        children: [
            <InputText.Input key='default' placeholder='Escreva seu e-mail' type="text" />,
            <InputText.Icon key='defaultIcon'>
                <Icon 
                    name='search' 
                    width= '17.49px'
                    height= '17.49px'
                />
            </InputText.Icon>
        ],
    },
    argTypes: { 
        children: {
          table: {
            disable: true,
          }
        }
    }
} as ComponentMeta<typeof InputText.Root>;

const InputTextTemplate: ComponentStory<typeof InputText.Root> = (args) => <InputText.Root {...args} /> 

export const Default = InputTextTemplate.bind({});

export const WithoutIcon = InputTextTemplate.bind({});
WithoutIcon.args = {
    children: <InputText.Input key='withoutIcon' placeholder='Escreva seu e-mail' type="text" />
}
WithoutIcon.storyName = 'Sem Ícone';

export const Enabled = InputTextTemplate.bind({});
Enabled.args = {
    children: <InputText.Input key='enabled' placeholder='Escreva seu e-mail' type="text" autoFocus/>
}
Enabled.storyName = 'Ativo';

export const Disabled = InputTextTemplate.bind({});
Disabled.args = {
    children: <InputText.Input key='disabled' placeholder='Escreva seu e-mail' type="text" disabled/>
}
Disabled.storyName = 'Desabilitado';

export const WithError = InputTextTemplate.bind({});
WithError.args = {
    children: <InputText.Input key='withError' placeholder='Escreva seu e-mail' type="text" required/>
}
WithError.storyName = 'Com Erro';
