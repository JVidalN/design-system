import { ComponentMeta, ComponentStory } from '@storybook/react';
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
