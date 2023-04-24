import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/** O componente `InputSwitch` é um componente usado para alternar entre dois estados, tais como on/off, verdaeiro/falso, sim/não, etc. */
function InputSwitch({ onChange, checked, disabled = false, className }) {
    const handleChange = (event) => {
        onChange(event.target.checked);
    };
    return (_jsxs("label", Object.assign({ className: `
                relative 
                flex
                items-center
                justify-items-start
                p-[1px]
                w-10
                h-[22px] 
                border 
                rounded-2xl 
                cursor-pointer
                ${checked ? 'border-brand-primary-dark bg-brand-primary-dark' : 'border-neutral-dark-dark03 bg-neutral-dark-dark03'}
                ${disabled ? 'pointer-events-none opacity-70' : ''}
                ${className}
            ` }, { children: [_jsx("input", { type: "checkbox", className: "absolute opacity-0 w-0 h-0", checked: checked, onChange: handleChange }), _jsx("span", { className: `
                    relative 
                    inline-block 
                    w-[18px] 
                    h-[18px] 
                    bg-neutral-light-base 
                    rounded-2xl 
                    shadow-inner 
                    transform 
                    translate-x-0 
                    transition-transform 
                    ease-in-out 
                    duration-200 
                    ${checked ? 'translate-x-full' : 'translate-x-0'}
                ` })] })));
}
export { InputSwitch };
