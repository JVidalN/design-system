import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from "react";
import { DatePicker } from "./DatePicker";
import { mock } from './mock';

interface DatePickerSelected {
    variant: number;
    periodoDatas:any;
}

export default {
    title: 'Design System/Componentes/DatePicker',
    component: DatePicker,
    args: {
        label: 'Lorem Ipsum',
        dados: mock
    },
    argTypes: {
        dados: { control: 'object' }
    }
} as ComponentMeta<typeof DatePicker>;

const DatePickerTemplate: ComponentStory<typeof DatePicker> = (args) => {
    const { label, variant } = args;

    const [ dadosRetorno, setDadosRetorno ] = useState<DatePickerSelected | null>(null);

    const hasSelected = (variant: number) => {
        return ((dadosRetorno?.periodoDatas.length > 0) && dadosRetorno?.variant === variant);
    }    

    return (
        <DatePicker 
            label={label}
            hasSelected={hasSelected(variant)}
            variant={variant}
            dados={mock}
            setDadosRetorno={setDadosRetorno}
        />
    )
};

export const Data = DatePickerTemplate.bind({});
Data.args = { 
    label: 'Data',
    variant:1
};
Data.argTypes = {
    variant: {
        table: {
          disable: true
        },
    },
    hasSelected: {
        table: {
          disable: true
        },
    },
    setDadosRetorno: {
        table: {
          disable: true
        },
    }
};
Data.storyName = 'Data';

export const DiaUtil = DatePickerTemplate.bind({});
DiaUtil.args = { 
    label: 'Prazo (DU)',
    variant:2
};
DiaUtil.argTypes = {...Data.argTypes};
DiaUtil.storyName = 'Dias Úteis';

export const DiaCorrido =  DatePickerTemplate.bind({});
DiaCorrido.args = { 
    label: 'Prazo (DC)',
    variant:3
};
DiaCorrido.argTypes = {...Data.argTypes};
DiaCorrido.storyName = 'Dias Corridos';

export const DatasSimultaneas = () => {
    const [ dadosRetorno, setDadosRetorno ] = useState<DatePickerSelected | null>(null);

    const hasSelected = (variant: number) => {
      return ((dadosRetorno?.periodoDatas.length > 0) && dadosRetorno?.variant === variant);
    }

    return (
        <div className='flex flex-col gap-1'>
            <div className='flex flex-row gap-1'>
                <DatePicker 
                    label='Datas'
                    hasSelected={hasSelected(1)}
                    variant={1}
                    dados={mock}
                    setDadosRetorno={setDadosRetorno}
                />

                <DatePicker 
                    label='Prazo (DU)'
                    hasSelected={hasSelected(2)}
                    variant={2}
                    dados={mock}
                    setDadosRetorno={setDadosRetorno}
                />

                <DatePicker 
                    label='Prazo (DC)'
                    hasSelected={hasSelected(3)}
                    variant={3}
                    dados={mock}
                    setDadosRetorno={setDadosRetorno}
                />
            </div>
        </div>
    );
};
DatasSimultaneas.argTypes = {
    label: {
      table: {
        disable: true
      },
    },
    ...Data.argTypes
};
DatasSimultaneas.parameters = {
    controls: { hideNoControlsWarning: true },
};
