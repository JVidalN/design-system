import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Icon } from "../IconComponent/Icon";
function MultiSelect({ options, placeholder, disabled = false, size = 'md', onChange, selectedOptions, grouped = false }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionSelect = (option) => {
        const newSelectedOptions = [...selectedOptions];
        if (selectedOptions.find((o) => o.label === option.label)) {
            const index = selectedOptions.findIndex((o) => o.label === option.label);
            newSelectedOptions.splice(index, 1);
        }
        else {
            newSelectedOptions.push(option);
        }
        onChange(newSelectedOptions);
    };
    const getSizeStyle = (size) => {
        let className = '';
        switch (size) {
            case 'sm':
                className = 'w-[180px]';
                return className;
            case 'md':
                className = 'w-[250px]';
                return className;
            case 'lg':
                className = 'w-80';
                return className;
        }
    };
    const getDisabledStyle = (disabled) => {
        let className = '';
        if (disabled)
            className = 'pointer-events-none opacity-70';
        return className;
    };
    const ungroupedOptions = () => {
        return (_jsx("ul", { children: options.map((option) => (_jsx("li", { children: _jsxs("label", Object.assign({ className: "flex items-center px-2" }, { children: [_jsx("input", { type: "checkbox", className: "h-4 w-4 mr-2 shadow", checked: selectedOptions.find((o) => o.label === option.label) !== undefined, onChange: () => handleOptionSelect(option) }), _jsx("span", Object.assign({ className: "text-sm" }, { children: option.label }))] })) }, option.label))) }));
    };
    const groupedOptions = () => {
        return options.map((group, idx) => (_jsxs("ul", { children: [_jsx("li", { children: _jsx("label", Object.assign({ className: "flex items-center px-2" }, { children: _jsx("span", Object.assign({ className: "text-sm font-bold" }, { children: Object.keys(group)[0] })) })) }, Object.keys(group)[0]), group[Object.keys(group)[0]].map((option) => (_jsx("li", { children: _jsxs("label", Object.assign({ className: "flex items-center px-2" }, { children: [_jsx("input", { type: "checkbox", className: "h-4 w-4 mr-2 shadow", checked: selectedOptions.find((o) => o.label === option.label) !== undefined, onChange: () => handleOptionSelect(option) }), _jsx("span", Object.assign({ className: "text-sm" }, { children: option.label }))] })) }, option.label)))] }, idx)));
    };
    return (_jsxs("div", Object.assign({ className: `
        relative
        h-10
        w-full
        rounded-md
        text-neutral-dark-dark02
        bg-neutral-light-light01 
        border 
        border-neutral-dark-dark02
        focus-within:ring-1
        ring-brand-primary-dark
        ${getSizeStyle(size)}
        ${getDisabledStyle(disabled)}
      ` }, { children: [_jsxs("button", Object.assign({ type: "button", className: "\n          flex \n          items-center \n          justify-between \n          w-full \n          px-4 \n          p-[6px] \n          text-left \n          text-neutral-dark-dark02 \n          rounded-md \n          bg-transparent \n          focus:outline-none \n          focus:shadow-outline\n        ", onClick: toggleOpen }, { children: [_jsx("span", Object.assign({ className: "flex-1 truncate" }, { children: selectedOptions.length === 0 ?
                            placeholder
                            :
                                selectedOptions.map((o) => o.value).join(", ") })), _jsx(Icon, { name: "arrowDown", height: "8.5", width: "14" })] })), isOpen && (_jsx("div", Object.assign({ className: "\n            block \n            z-10 \n            w-full \n            bg-transparent \n            border \n            border-neutral-dark-dark02 \n            rounded-md \n            mt-1" }, { children: grouped ?
                    (groupedOptions())
                    :
                        (ungroupedOptions()) })))] })));
}
export { MultiSelect };
