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
/** O `ButtonText` é um texto exibido em um botão onde o usuário pode clicar para executar uma ação ou navegar para um diferente área da aplicação. */
function ButtonTextRoot(_a) {
    var { variant = 'primary', children, disabled = false, underlined = false, onClick } = _a, props = __rest(_a, ["variant", "children", "disabled", "underlined", "onClick"]);
    const chooseStyle = (variant) => {
        let className = '';
        switch (variant) {
            case 'primary':
                className = 'text-brand-primary-dark hover:text-brand-primary-dark01 active:text-brand-primary-dark02';
                return className;
            case 'secondary':
                className = 'text-neutral-dark-dark02 hover:text-neutral-dark-dark04 active:text-neutral-dark-dark01';
                return className;
            case 'danger':
                className = 'text-extra-error hover:text-alert-danger-dark active:text-alert-danger-darkest';
                return className;
        }
    };
    const chooseFontStyle = (underlined) => {
        let className = '';
        switch (underlined) {
            case true:
                className = 'font-markpro text-base font-[450]';
                return className;
            case false:
                className = 'font-roboto text-base font-medium';
        }
    };
    return (_jsx("div", Object.assign({ className: `
                flex 
                flex-row
                items-center
                h-fit
                w-=fit
                bg-transparent
                cursor-pointer
                gap-1
                ${chooseStyle(variant)}
                ${chooseFontStyle(underlined)}
                ${disabled && 'opacity-60 shadow-[0px_2px_0px_rgba(0,0,0,0.016)]'}
                ${underlined && 'underline'}
            `, onClick: disabled ? undefined : onClick }, props, { children: children })));
}
function ButtonTextIcon(props) {
    return _jsx("div", { children: props.children });
}
function ButtonTextLabel(props) {
    return _jsx("span", { children: props.children });
}
ButtonTextRoot.displayName = 'ButtonText.Root';
ButtonTextIcon.displayName = 'ButtonText.Icon';
ButtonTextLabel.displayName = 'ButtonText.Label';
export const ButtonText = {
    Root: ButtonTextRoot,
    Label: ButtonTextLabel,
    Icon: ButtonTextIcon,
};
