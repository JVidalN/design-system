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
};
const ButtonToggleTemplate = (_a) => {
    var { children } = _a, args = __rest(_a, ["children"]);
    const [activeChild, setActiveChild] = useState('left');
    useEffect(() => {
        action('Button Toggle Event')(`Lado ativo: ${activeChild}`);
    }, [activeChild]);
    return (_jsx(ButtonToggle.Root, Object.assign({}, args, { onChange: (activatedSide) => setActiveChild(activatedSide), activeChild: activeChild }, { children: children })));
};
export const Text = ButtonToggleTemplate.bind({});
Text.args = {
    children: [
        _jsx(ButtonToggle.Left, { children: "Cliente" }),
        _jsx(ButtonToggle.Right, { children: "Estabelecimento" })
    ]
};
Text.storyName = 'Com Texto';
export const IconExample = ButtonToggleTemplate.bind({});
IconExample.args = {
    children: [
        _jsx(ButtonToggle.Left, { children: _jsx(Icon, { name: 'chartCard' }) }),
        _jsx(ButtonToggle.Right, { children: _jsx(Icon, { name: 'chartBar' }) })
    ]
};
IconExample.storyName = 'Com Ícone';
