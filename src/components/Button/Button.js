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
import { Icon } from "../IconComponent/Icon";
/** Um botão é um controle que permite ao usuário se comunicar diretamente com o produto digital e enviar os comandos necessários para atingir um objetivo específico. */
function Button(_a) {
    var { variant = 'primary', disabled, loading, label } = _a, props = __rest(_a, ["variant", "disabled", "loading", "label"]);
    const chooseStyle = (variant) => {
        let className = '';
        switch (variant) {
            case 'primary':
                className = 'bg-brand-primary-dark text-neutral-light-base';
                return className;
            case 'secondary':
                className = 'bg-neutral-light-base text-brand-primary-dark border border-brand-primary-dark';
                return className;
            case 'danger':
                className = 'bg-extra-error text-neutral-light-base';
                return className;
            case 'secondary-danger':
                className = 'bg-neutral-light-base text-extra-error border border-extra-error';
                return className;
        }
    };
    const chooseIconColor = (variant) => {
        let className = '';
        switch (variant) {
            case 'primary':
            case 'danger':
                className = 'fill-neutral-light-base';
                return className;
            case 'secondary':
                className = 'fill-brand-primary-dark';
                return className;
            case 'secondary-danger':
                className = 'fill-extra-error';
                return className;
        }
    };
    return (_jsx("button", Object.assign({}, props, { disabled: disabled, className: `
                rounded-md 
                px-2 
                py-4 
                h-[38px] 
                flex 
                justify-center 
                items-center 
                font-roboto
                text-sm2
                ${chooseStyle(variant)}
                ${disabled ? 'opacity-60 shadow-[0px_2px_0px_rgba(0,0,0,0.016)]' : null}
            ` }, { children: loading ?
            _jsx("div", Object.assign({ className: "w-full min-h-screen flex justify-center items-center" }, { children: _jsx(Icon, { name: 'loadingSpin', color: chooseIconColor(variant), width: '24px', height: '24px', className: 'w-6 h-6 animate-spin' }) }))
            :
                label })));
}
export { Button };
