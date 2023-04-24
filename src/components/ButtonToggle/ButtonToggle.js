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
import React, { Children } from "react";
/** Um botão é um controle que permite ao usuário se comunicar diretamente com o produto digital e enviar os comandos necessários para atingir um objetivo específico. */
function ButtonToggleRoot({ children, onChange, activeChild }) {
    const handleLeftClick = () => {
        onChange('left');
    };
    const handleRightClick = () => {
        onChange('right');
    };
    return (_jsx("div", Object.assign({ className: "\n                flex\n                h-10 \n                w-fit\n                rounded-lg\n                items-center\n                font-roboto \n                text-sm \n                border\n                border-brand-primary-dark\n            " }, { children: Children.map(children, (child, idx) => {
            if (React.isValidElement(child)) {
                const childProps = {
                    active: activeChild === 'left' ? true : false,
                    onClick: handleLeftClick
                };
                if (child.type === ButtonToggleRight) {
                    childProps.active = activeChild === 'right' ? true : false;
                    childProps.onClick = handleRightClick;
                }
                return React.cloneElement(child, childProps);
            }
            return child;
        }) })));
}
function ButtonToggleLeft(_a) {
    var props = __rest(_a, []);
    return _jsx(ButtonToggleChild, Object.assign({}, props));
}
function ButtonToggleRight(_a) {
    var props = __rest(_a, []);
    return _jsx(ButtonToggleChild, Object.assign({}, props));
}
function ButtonToggleChild(_a) {
    var { children, active = false } = _a, props = __rest(_a, ["children", "active"]);
    const getStyle = (active) => {
        let className = '';
        switch (active) {
            case true:
                className = 'bg-brand-primary-dark text-neutral-light-base';
                return className;
            default:
                className = 'bg-neutral-light-base text-brand-primary-dark';
                return className;
        }
    };
    return (_jsx("div", Object.assign({ className: `
                w-full 
                h-full 
                rounded-lg 
                p-4
                flex
                items-center
                cursor-pointer
                right
                ${getStyle(active)}
            ` }, props, { children: children })));
}
ButtonToggleRoot.displayName = 'ButtonToggle.Root';
ButtonToggleLeft.displayName = 'ButtonToggle.Left';
ButtonToggleRight.displayName = 'ButtonToggle.Right';
export const ButtonToggle = {
    Root: ButtonToggleRoot,
    Left: ButtonToggleLeft,
    Right: ButtonToggleRight
};
