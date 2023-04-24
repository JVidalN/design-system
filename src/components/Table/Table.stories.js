import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '../Button/Button';
import { Icon } from '../IconComponent/Icon';
import { InputText } from '../InputText/InputText';
import { mock } from './mock';
import { Table } from './Table';
export default {
    title: 'Design System/Componentes/Table',
    component: Table.Root,
    args: {
        values: mock.Data,
        maxHeight: '500px',
    },
    argTypes: {}
};
export const Basic = (args) => (_jsx(Table.Root, Object.assign({}, args, { children: _jsx(Table.Column, { header: 'Nome', field: 'name', maxWidth: '120px', dataType: 'string' }) }), 'basic'));
export const WithTitle = (args) => (_jsxs(Table.Root, Object.assign({}, args, { children: [_jsx(Table.Column, { dataType: "string", field: "index", header: "ID", maxWidth: "10px" }), _jsx(Table.Column, { dataType: "string", field: "balance", header: "Balan\u00E7o", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "age", header: "Idade", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "name", header: "Nome", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "gender", header: "G\u00EAnero", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "company", header: "Companhia", maxWidth: "220px", chipped: true }), _jsx(Table.Column, { dataType: "string", field: "email", header: "Email", maxWidth: "120px" })] }), 'WithTitle'));
WithTitle.args = {
    title: 'Título da Tabela'
};
WithTitle.storyName = 'Com Título';
export const WithSearch = (args) => (_jsxs(Table.Root, Object.assign({}, args, { children: [_jsx(Table.Search, { children: _jsxs(InputText.Root, { children: [_jsx(InputText.Input, { type: 'search', placeholder: 'Pesquisar algo' }), _jsx(InputText.Icon, { children: _jsx(Icon, { name: 'search', width: '17.49px', height: '17.49px' }) })] }) }), _jsx(Table.Column, { dataType: "string", field: "index", header: "ID", maxWidth: "10px" }), _jsx(Table.Column, { dataType: "string", field: "balance", header: "Balan\u00E7o", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "age", header: "Idade", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "name", header: "Nome", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "gender", header: "G\u00EAnero", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "company", header: "Companhia", maxWidth: "220px", chipped: true }), _jsx(Table.Column, { dataType: "string", field: "email", header: "Email", maxWidth: "120px" })] }), 'WithSearch'));
WithSearch.args = {
    title: 'Título da Tabela'
};
WithSearch.storyName = 'Com Busca';
export const WithoutChildren = (args) => (_jsx("div", Object.assign({ className: 'w-[600px]' }, { children: _jsx(Table.Root, Object.assign({}, args), 'WithoutChildren') })));
WithoutChildren.args = {
    title: 'Título da Tabela'
};
WithoutChildren.storyName = 'Vazia';
export const WithTotalizer = (args) => (_jsxs(Table.Root, Object.assign({}, args, { children: [_jsx(Table.Column, { dataType: "string", field: "index", header: "ID", maxWidth: "10px" }), _jsx(Table.Column, { dataType: "string", field: "balance", header: "Balan\u00E7o", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "age", header: "Idade", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "name", header: "Nome", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "gender", header: "G\u00EAnero", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "company", header: "Companhia", maxWidth: "220px", chipped: true }), _jsx(Table.Column, { dataType: "string", field: "email", header: "Email", maxWidth: "120px" })] }), 'WithTotalizer'));
WithTotalizer.args = {
    hasTotalizer: true,
};
WithTotalizer.storyName = 'Com Totalizador';
export const WithScroll = (args) => (_jsx("div", Object.assign({ className: 'w-[650px]' }, { children: _jsxs(Table.Root, Object.assign({}, args, { children: [_jsx(Table.Column, { dataType: "string", field: "index", header: "ID", maxWidth: "10px" }), _jsx(Table.Column, { dataType: "string", field: "balance", header: "Balan\u00E7o", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "age", header: "Idade", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "name", header: "Nome", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "gender", header: "G\u00EAnero", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "company", header: "Companhia", maxWidth: "220px", chipped: true }), _jsx(Table.Column, { dataType: "string", field: "email", header: "Email", maxWidth: "120px" })] }), 'WithScroll') })));
WithScroll.args = {
    title: 'Título da Tabela',
    maxHeight: '400px',
    hasTotalizer: true,
};
WithScroll.storyName = 'Com Scroll';
export const WithSort = (args) => (_jsxs(Table.Root, Object.assign({}, args, { children: [_jsx(Table.Column, { dataType: "string", field: "index", header: "ID", maxWidth: "10px", sortable: true }), _jsx(Table.Column, { dataType: "string", field: "balance", header: "Balan\u00E7o", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "age", header: "Idade", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "name", header: "Nome", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "gender", header: "G\u00EAnero", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "company", header: "Companhia", maxWidth: "220px", chipped: true, sortable: true }), _jsx(Table.Column, { dataType: "string", field: "email", header: "Email", maxWidth: "120px" })] }), 'WithSort'));
WithSort.storyName = 'Com Ordenação';
export const WithAction = (args) => {
    const handleViewClick = (values) => (event) => {
        console.log('View: ', values);
    };
    const handleEditClick = (values) => (event) => {
        console.log('Edit: ', values);
    };
    const handleDeleteClick = (values) => (event) => {
        console.log('Delete: ', values);
    };
    return (_jsxs(Table.Root, Object.assign({}, args, { children: [_jsx(Table.Action, Object.assign({ onClick: handleViewClick }, { children: _jsx(Icon, { name: 'openEyes', color: 'text-brand-primary-dark', width: '24px', height: '24px' }) })), _jsx(Table.Column, { dataType: "string", field: "index", header: "ID", maxWidth: "10px" }), _jsx(Table.Column, { dataType: "string", field: "balance", header: "Balan\u00E7o", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "age", header: "Idade", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "name", header: "Nome", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "gender", header: "G\u00EAnero", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "company", header: "Companhia", maxWidth: "220px", chipped: true }), _jsx(Table.Column, { dataType: "string", field: "email", header: "Email", maxWidth: "120px" }), _jsx(Table.Action, Object.assign({ onClick: handleEditClick }, { children: _jsx(Icon, { name: 'pencil', color: 'text-brand-primary-dark', width: '24px', height: '24px' }) })), _jsx(Table.Action, Object.assign({ onClick: handleDeleteClick }, { children: _jsx(Icon, { name: 'trash', color: 'text-extra-error', width: '24px', height: '24px' }) }))] }), 'WithAction'));
};
WithAction.storyName = 'Com Ação';
export const WithRegister = (args) => {
    return (_jsxs(Table.Root, Object.assign({}, args, { children: [_jsx(Table.Register, { children: _jsx(Button, { label: "Cadastrar", onClick: () => { console.log('Cadastrado!'); }, variant: "secondary", className: 'w-96' }) }), _jsx(Table.Search, { children: _jsxs(InputText.Root, { children: [_jsx(InputText.Input, { type: 'search', placeholder: 'Pesquisar algo' }), _jsx(InputText.Icon, { children: _jsx(Icon, { name: 'search', width: '17.49px', height: '17.49px' }) })] }) }), _jsx(Table.Column, { dataType: "string", field: "index", header: "ID", maxWidth: "10px" }), _jsx(Table.Column, { dataType: "string", field: "balance", header: "Balan\u00E7o", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "age", header: "Idade", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "name", header: "Nome", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "gender", header: "G\u00EAnero", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "company", header: "Companhia", maxWidth: "220px", chipped: true }), _jsx(Table.Column, { dataType: "string", field: "email", header: "Email", maxWidth: "120px" })] }), 'WithRegister'));
};
WithRegister.args = {
    title: 'Título da Tabela'
};
WithRegister.storyName = 'Com Cadastro';
export const WithChip = (args) => {
    return (_jsxs(Table.Root, Object.assign({}, args, { children: [_jsx(Table.Search, { children: _jsxs(InputText.Root, { children: [_jsx(InputText.Input, { type: 'search', placeholder: 'Pesquisar algo' }), _jsx(InputText.Icon, { children: _jsx(Icon, { name: 'search', width: '17.49px', height: '17.49px' }) })] }) }), _jsx(Table.Column, { dataType: "string", field: "index", header: "ID", maxWidth: "10px" }), _jsx(Table.Column, { dataType: "string", field: "balance", header: "Balan\u00E7o", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "age", header: "Idade", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "name", header: "Nome", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "gender", header: "G\u00EAnero", maxWidth: "120px" }), _jsx(Table.Column, { dataType: "string", field: "company", header: "Companhia", maxWidth: "220px", chipped: true }), _jsx(Table.Column, { dataType: "string", field: "email", header: "Email", maxWidth: "120px" })] }), 'WithChip'));
};
WithChip.args = {
    title: 'Título da Tabela'
};
WithChip.storyName = 'Com Chips';
