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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
export default {
    title: "Design System/Componentes/Modal",
    component: Modal,
    args: {
        title: 'Título da Modal',
        children: 'Conteúdo da modal'
    },
    argTypes: {
        isOpen: {
            table: {
                disable: true
            }
        },
        onClose: {
            table: {
                disable: true
            }
        }
    }
};
const ModalTemplate = (_a) => {
    var { children } = _a, args = __rest(_a, ["children"]);
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
        action('onClick Event')(`Modal aberta: ${isOpen}`);
    };
    const handleOpen = () => {
        setIsOpen(true);
        action('onClick Event')(`Modal aberta: ${isOpen}`);
    };
    return (_jsxs("div", { children: [_jsx(Button, { onClick: handleOpen, label: 'Abrir Modal' }), _jsx(Modal, Object.assign({}, args, { isOpen: isOpen, onClose: handleClose }, { children: children }))] }));
};
export const Default = ModalTemplate.bind({});
Default.storyName = 'Default';
export const WithFooter = ModalTemplate.bind({});
const footer = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: action('onClick Event Fechar'), variant: 'secondary', label: 'Fechar' }), _jsx(Button, { onClick: action('onClick Event Descartar'), label: 'Descartar' })] }));
};
WithFooter.args = {
    footer: footer()
};
WithFooter.storyName = 'Com Radapé';
export const Resize = ModalTemplate.bind({});
Resize.args = {
    width: '400px',
    height: '400px',
    footer: footer()
};
Resize.storyName = 'Altura e Largura';
