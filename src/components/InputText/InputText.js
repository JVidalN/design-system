import { jsx as _jsx } from "react/jsx-runtime";
function InputTextRoot(props) {
    return (_jsx("div", Object.assign({ className: `
                flex 
                flex-row
                items-center
                h-10
                py-4 
                px-3 
                rounded-md
                bg-neutral-light-light01 
                w-full 
                focus-within:ring-1
                ring-brand-primary-dark
                border 
                border-neutral-dark-dark02
                focus-within:border-0
                max-w-[400px]
                justify-between
                ${props.className}
            ` }, { children: props.children })));
}
function InputTextIcon(props) {
    return (_jsx("div", Object.assign({ className: 'w-6 h-6 flex items-center text-neutral-dark-dark02 ' }, { children: props.children })));
}
/** Um botão é um controle que permite ao usuário se comunicar diretamente com o produto digital e enviar os comandos necessários para atingir um objetivo específico. */
function InputTextInput(props) {
    return (_jsx("input", Object.assign({ className: "\n                bg-transparent\n                flex-auto\n                h-auto\n                w-auto\n                font-roboto\n                text-sm\n                py-2\n                px-4\n                outline-none\n            " }, props)));
}
InputTextRoot.displayName = 'InputText.Root';
InputTextInput.displayName = 'InputText.Input';
InputTextIcon.displayName = 'InputText.Icon';
export const InputText = {
    Root: InputTextRoot,
    Input: InputTextInput,
    Icon: InputTextIcon,
};
