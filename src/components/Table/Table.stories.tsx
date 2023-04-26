import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from "react";
import { Button } from '../Button/Button';
import { Icon } from '../IconComponent/Icon';
import { InputText } from '../InputText/InputText';
import { Table } from './Table';
import { mock } from './mock';

export default {
    title: 'Design System/Componentes/Table',
    component: Table.Root,
    args: {
        values: mock.Data,
        maxHeight: '500px',
    },
    argTypes: { }
} as ComponentMeta<typeof Table.Root>;

export const Basic: ComponentStory<typeof Table.Root> = (args) => (
    <Table.Root key='basic' {...args}>
        <Table.Column 
            header='Nome'
            field='name'
            maxWidth='120px'
            dataType='string'
        />
    </Table.Root>
);

export const WithTitle: ComponentStory<typeof Table.Root> = (args) => (
    <Table.Root key='WithTitle' {...args}>
        <Table.Column dataType="string" field="index" header="ID" maxWidth="10px"/>
        <Table.Column dataType="string" field="balance" header="Balanço" maxWidth="120px"/>
        <Table.Column dataType="string" field="age" header="Idade" maxWidth="120px"/>
        <Table.Column dataType="string" field="name" header="Nome" maxWidth="120px"/>
        <Table.Column dataType="string" field="gender" header="Gênero" maxWidth="120px"/>
        <Table.Column dataType="string" field="company" header="Companhia" maxWidth="220px" chipped/>
        <Table.Column dataType="string" field="email" header="Email" maxWidth="120px"/>
    </Table.Root>
);
WithTitle.args = {
    title:'Título da Tabela'
}
WithTitle.storyName = 'Com Título';

export const WithSearch: ComponentStory<typeof Table.Root> = (args) => (
    <Table.Root key='WithSearch' {...args}>
        <Table.Search>
            <InputText.Root>
                <InputText.Input
                    type='search'
                    placeholder='Pesquisar algo'
                />
                <InputText.Icon>
                    <Icon 
                        name= 'search'
                        width= '17.49px'
                        height= '17.49px'
                    /> 
                </InputText.Icon>
            </InputText.Root>
        </Table.Search>
        <Table.Column dataType="string" field="index" header="ID" maxWidth="10px"/>
        <Table.Column dataType="string" field="balance" header="Balanço" maxWidth="120px"/>
        <Table.Column dataType="string" field="age" header="Idade" maxWidth="120px"/>
        <Table.Column dataType="string" field="name" header="Nome" maxWidth="120px"/>
        <Table.Column dataType="string" field="gender" header="Gênero" maxWidth="120px"/>
        <Table.Column dataType="string" field="company" header="Companhia" maxWidth="220px" chipped/>
        <Table.Column dataType="string" field="email" header="Email" maxWidth="120px"/>
    </Table.Root>
);
WithSearch.args = {
    title:'Título da Tabela'
}
WithSearch.storyName = 'Com Busca';

export const WithoutChildren: ComponentStory<typeof Table.Root> = (args) => (
    <div className='w-[600px]'>
        <Table.Root key='WithoutChildren' {...args} />
    </div>
);
WithoutChildren.args = {
    title:'Título da Tabela'
}
WithoutChildren.storyName = 'Vazia';

export const WithTotalizer: ComponentStory<typeof Table.Root> = (args) => (
    <Table.Root key='WithTotalizer' {...args}>
        <Table.Column dataType="string" field="index" header="ID" maxWidth="10px"/>
        <Table.Column dataType="string" field="balance" header="Balanço" maxWidth="120px"/>
        <Table.Column dataType="string" field="age" header="Idade" maxWidth="120px"/>
        <Table.Column dataType="string" field="name" header="Nome" maxWidth="120px"/>
        <Table.Column dataType="string" field="gender" header="Gênero" maxWidth="120px"/>
        <Table.Column dataType="string" field="company" header="Companhia" maxWidth="220px" chipped/>
        <Table.Column dataType="string" field="email" header="Email" maxWidth="120px"/>
    </Table.Root>
);
WithTotalizer.args = {
    hasTotalizer: true,
}
WithTotalizer.storyName = 'Com Totalizador';

export const WithScroll: ComponentStory<typeof Table.Root> = (args) => (
    <div className='w-[650px]'>
        <Table.Root key='WithScroll' {...args}>
            <Table.Column dataType="string" field="index" header="ID" maxWidth="10px"/>
            <Table.Column dataType="string" field="balance" header="Balanço" maxWidth="120px"/>
            <Table.Column dataType="string" field="age" header="Idade" maxWidth="120px"/>
            <Table.Column dataType="string" field="name" header="Nome" maxWidth="120px"/>
            <Table.Column dataType="string" field="gender" header="Gênero" maxWidth="120px"/>
            <Table.Column dataType="string" field="company" header="Companhia" maxWidth="220px" chipped/>
            <Table.Column dataType="string" field="email" header="Email" maxWidth="120px"/>
        </Table.Root>
    </div>
);
WithScroll.args = {
    title:'Título da Tabela',
    maxHeight: '400px',
    hasTotalizer: true,
}
WithScroll.storyName = 'Com Scroll';

export const WithSort: ComponentStory<typeof Table.Root> = (args) => (
    <Table.Root key='WithSort' {...args}>
        <Table.Column dataType="string" field="index" header="ID" maxWidth="10px" sortable/>
        <Table.Column dataType="string" field="balance" header="Balanço" maxWidth="120px"/>
        <Table.Column dataType="string" field="age" header="Idade" maxWidth="120px"/>
        <Table.Column dataType="string" field="name" header="Nome" maxWidth="120px"/>
        <Table.Column dataType="string" field="gender" header="Gênero" maxWidth="120px"/>
        <Table.Column dataType="string" field="company" header="Companhia" maxWidth="220px" chipped sortable/>
        <Table.Column dataType="string" field="email" header="Email" maxWidth="120px"/>
    </Table.Root>
);
WithSort.storyName = 'Com Ordenação';

export const WithAction: ComponentStory<typeof Table.Root> = (args) => {
    const handleViewClick = (values: any) => (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('View: ',values);
    };
    const handleEditClick = (values: any) => (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Edit: ',values);
    };
    const handleDeleteClick = (values: any) => (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Delete: ',values);
    };

    return (
        <Table.Root key='WithAction' {...args}>
            <Table.Action onClick={handleViewClick}>
                <Icon 
                    name= 'openEyes'
                    color='text-brand-primary-dark'
                    width= '24px'
                    height= '24px'
                /> 
            </Table.Action>
            <Table.Column dataType="string" field="index" header="ID" maxWidth="10px"/>
            <Table.Column dataType="string" field="balance" header="Balanço" maxWidth="120px"/>
            <Table.Column dataType="string" field="age" header="Idade" maxWidth="120px"/>
            <Table.Column dataType="string" field="name" header="Nome" maxWidth="120px"/>
            <Table.Column dataType="string" field="gender" header="Gênero" maxWidth="120px"/>
            <Table.Column dataType="string" field="company" header="Companhia" maxWidth="220px" chipped/>
            <Table.Column dataType="string" field="email" header="Email" maxWidth="120px"/>
            <Table.Action onClick={handleEditClick}>
                <Icon 
                    name= 'pencil'
                    color='text-brand-primary-dark'
                    width= '24px'
                    height= '24px'
                /> 
            </Table.Action>
            <Table.Action onClick={handleDeleteClick}>
                <Icon 
                    name= 'trash'
                    color='text-extra-error'
                    width= '24px'
                    height= '24px'
                /> 
            </Table.Action>
        </Table.Root>
    )
};
WithAction.storyName = 'Com Ação';

export const WithRegister: ComponentStory<typeof Table.Root> = (args) => {

    return (
        <Table.Root key='WithRegister' {...args}>
            <Table.Register>
                <Button
                    label="Cadastrar"
                    onClick={() => { console.log('Cadastrado!')}}
                    variant="secondary"
                    className='w-96'
                />
            </Table.Register>
            <Table.Search>
                <InputText.Root>
                    <InputText.Input
                        type='search'
                        placeholder='Pesquisar algo'
                    />
                    <InputText.Icon>
                        <Icon 
                            name= 'search'
                            width= '17.49px'
                            height= '17.49px'
                        /> 
                    </InputText.Icon>
                </InputText.Root>
            </Table.Search>
            <Table.Column dataType="string" field="index" header="ID" maxWidth="10px"/>
            <Table.Column dataType="string" field="balance" header="Balanço" maxWidth="120px"/>
            <Table.Column dataType="string" field="age" header="Idade" maxWidth="120px"/>
            <Table.Column dataType="string" field="name" header="Nome" maxWidth="120px"/>
            <Table.Column dataType="string" field="gender" header="Gênero" maxWidth="120px"/>
            <Table.Column dataType="string" field="company" header="Companhia" maxWidth="220px" chipped/>
            <Table.Column dataType="string" field="email" header="Email" maxWidth="120px"/>
        </Table.Root>
    )
};
WithRegister.args = {
    title:'Título da Tabela'
}
WithRegister.storyName = 'Com Cadastro';

export const WithChip: ComponentStory<typeof Table.Root> = (args) => {
    return (
        <Table.Root key='WithChip' {...args}>
            <Table.Search>
                <InputText.Root>
                    <InputText.Input
                        type='search'
                        placeholder='Pesquisar algo'
                    />
                    <InputText.Icon>
                        <Icon 
                            name= 'search'
                            width= '17.49px'
                            height= '17.49px'
                        /> 
                    </InputText.Icon>
                </InputText.Root>
            </Table.Search>
            <Table.Column dataType="string" field="index" header="ID" maxWidth="10px"/>
            <Table.Column dataType="string" field="balance" header="Balanço" maxWidth="120px"/>
            <Table.Column dataType="string" field="age" header="Idade" maxWidth="120px"/>
            <Table.Column dataType="string" field="name" header="Nome" maxWidth="120px"/>
            <Table.Column dataType="string" field="gender" header="Gênero" maxWidth="120px"/>
            <Table.Column 
                dataType="string" 
                field="company" 
                header="Companhia" 
                maxWidth="220px" 
                chipped
            />
            <Table.Column dataType="string" field="email" header="Email" maxWidth="120px"/>
        </Table.Root>
    )
};
WithChip.args = {
    title:'Título da Tabela'
}
WithChip.storyName = 'Com Chips';

export const WithAsyncronousValues: ComponentStory<typeof Table.Root> = (args) => {

    const [data, setData] = useState<any>([]);
    
    function simulateAsyncCall() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(mock.Data);
          }, 2 * 1000);
        });
    }
    
    const pesquisar = async () => {
        console.log('Pesquisar acionado');
        try {
            const response = await simulateAsyncCall();
            if(response){
                console.log('Pesquisar data',response);
                setData(response);
            }
        } catch (error) {
            console.log('Erro ao pesquisar:' + JSON.stringify(error));
        }
    }
    
    return (
        <>
            <Button onClick={pesquisar} label='Pesquisar' />
            <Table.Root maxHeight='500px' values={data}>
                <Table.Column header='Nome' field='name' maxWidth='120px' dataType='string' sortable/>
                <Table.Column dataType="string" field="age" header="Idade" maxWidth="120px" sortable/>
                <Table.Column dataType="string" field="name" header="Nome" maxWidth="120px" sortable/>
                <Table.Column dataType="string" field="gender" header="Gênero" maxWidth="120px" sortable/>
            </Table.Root>
        </>
    )
};
WithAsyncronousValues.storyName = 'Com Dados Assíncronos';
