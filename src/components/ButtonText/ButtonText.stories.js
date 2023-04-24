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
import { action } from '@storybook/addon-actions';
import { Icon } from '../IconComponent/Icon';
import { ButtonText } from "./ButtonText";
export default {
    title: 'Design System/Componentes/ButtonText',
    component: ButtonText.Root,
    args: {
        disabled: false,
        underlined: false,
        children: _jsx(ButtonText.Label, { children: "Default" }, 'default-label'),
        onClick: action('Default!')
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'danger'],
            control: {
                type: 'inline-radio'
            }
        },
        onClick: {
            table: {
                disable: true
            }
        },
        children: {
            table: {
                disable: true
            }
        }
    }
};
const ButtonTextTemplate = (_a) => {
    var { children } = _a, args = __rest(_a, ["children"]);
    return (_jsx(ButtonText.Root, Object.assign({}, args, { children: children }), 'default-root'));
};
export const Default = ButtonTextTemplate.bind({});
export const WithIconLeft = ButtonTextTemplate.bind({});
WithIconLeft.args = {
    onClick: action('Com Ícone à Esquerda!'),
    variant: 'primary',
    children: [
        _jsx(ButtonText.Icon, { children: _jsx(Icon, { name: 'xls', width: '20', height: '20' }) }, 'WithIconLeft-Icon'),
        _jsx(ButtonText.Label, { children: "Com \u00CDcone \u00E0 Esquerda" }, 'WithIconLeft-Label')
    ]
};
WithIconLeft.storyName = 'Com Ícone à Esquerda';
export const WithIconRight = ButtonTextTemplate.bind({});
WithIconRight.args = {
    onClick: action('Com Ícone à Direita!'),
    variant: 'primary',
    children: [
        _jsx(ButtonText.Label, { children: "Com \u00CDcone \u00E0 Direita" }, 'WithIconRight-Label'),
        _jsx(ButtonText.Icon, { children: _jsx(Icon, { name: 'arrowDown', width: '12', height: '7.2' }) }, 'WithIconRight-Icon')
    ]
};
WithIconRight.storyName = 'Com Ícone à Direita';
export const Disabled = ButtonTextTemplate.bind({});
Disabled.args = {
    disabled: true,
    variant: 'danger',
    onClick: action('Desabilitado. Não deve exibir ação!'),
    children: [
        _jsx(ButtonText.Icon, { children: _jsx(Icon, { name: 'trash', width: '20', height: '20' }) }, 'Disabled-Icon'),
        _jsx(ButtonText.Label, { children: "Desabilitado" }, 'Disabled-Label')
    ]
};
Disabled.storyName = 'Desabilitado';
export const Underlined = ButtonTextTemplate.bind({});
Underlined.args = {
    underlined: true,
    variant: 'secondary',
    onClick: action('Sublinhado!'),
    children: [
        _jsx(ButtonText.Label, { children: "Sublinhado" }, 'Underlined-Label')
    ]
};
Underlined.storyName = 'Sublinhado';
