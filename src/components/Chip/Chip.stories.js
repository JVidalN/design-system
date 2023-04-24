var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import { Chip } from "./Chip";
export default {
    title: 'Design System/Componentes/Chip',
    component: Chip.Core
};
const InputTextTemplate = (args) => _jsx(Chip.Core, Object.assign({}, args));
export const Default = InputTextTemplate.bind({});
Default.args = {
    children: 'Componente Chip',
    close: false
};
export const WithInputAndLimit = (_a) => {
    var { children } = _a, args = __rest(_a, ["children"]);
    const [chips, setChips] = useState([]);
    useEffect(() => {
        action('onChange Event')(`Valor(es) selecionado(s): ${chips}`);
    }, [chips]);
    return (_jsx(Chip.Input, Object.assign({}, args, { onChange: (chip) => setChips(chip) }, { children: _jsx(Chip.Core, { children: children }) })));
};
WithInputAndLimit.args = {
    placeholder: 'Adicione..',
    children: 'Componente Chip'
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
    placeholder: 'Adicione..',
    children: 'Componente Chip'
};
WithInputWithoutLimit.argTypes = {
    children: {
        table: {
            disable: true
        }
    }
};
WithInputWithoutLimit.storyName = 'Com Input Limite';
