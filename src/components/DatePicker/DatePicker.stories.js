import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { DatePicker } from "./DatePicker";
import { mock } from './mock';
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
};
const DatePickerTemplate = (args) => {
    const { label, variant } = args;
    const [dadosRetorno, setDadosRetorno] = useState(null);
    const hasSelected = (variant) => {
        return (((dadosRetorno === null || dadosRetorno === void 0 ? void 0 : dadosRetorno.periodoDatas.length) > 0) && (dadosRetorno === null || dadosRetorno === void 0 ? void 0 : dadosRetorno.variant) === variant);
    };
    return (_jsx(DatePicker, { label: label, hasSelected: hasSelected(variant), variant: variant, dados: mock, setDadosRetorno: setDadosRetorno }));
};
export const Data = DatePickerTemplate.bind({});
Data.args = {
    label: 'Data',
    variant: 1
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
    variant: 2
};
DiaUtil.argTypes = Object.assign({}, Data.argTypes);
DiaUtil.storyName = 'Dias Úteis';
export const DiaCorrido = DatePickerTemplate.bind({});
DiaCorrido.args = {
    label: 'Prazo (DC)',
    variant: 3
};
DiaCorrido.argTypes = Object.assign({}, Data.argTypes);
DiaCorrido.storyName = 'Dias Corridos';
export const DatasSimultaneas = () => {
    const [dadosRetorno, setDadosRetorno] = useState(null);
    const hasSelected = (variant) => {
        return (((dadosRetorno === null || dadosRetorno === void 0 ? void 0 : dadosRetorno.periodoDatas.length) > 0) && (dadosRetorno === null || dadosRetorno === void 0 ? void 0 : dadosRetorno.variant) === variant);
    };
    return (_jsx("div", Object.assign({ className: 'flex flex-col gap-1' }, { children: _jsxs("div", Object.assign({ className: 'flex flex-row gap-1' }, { children: [_jsx(DatePicker, { label: 'Datas', hasSelected: hasSelected(1), variant: 1, dados: mock, setDadosRetorno: setDadosRetorno }), _jsx(DatePicker, { label: 'Prazo (DU)', hasSelected: hasSelected(2), variant: 2, dados: mock, setDadosRetorno: setDadosRetorno }), _jsx(DatePicker, { label: 'Prazo (DC)', hasSelected: hasSelected(3), variant: 3, dados: mock, setDadosRetorno: setDadosRetorno })] })) })));
};
DatasSimultaneas.argTypes = Object.assign({ label: {
        table: {
            disable: true
        },
    } }, Data.argTypes);
DatasSimultaneas.parameters = {
    controls: { hideNoControlsWarning: true },
};
