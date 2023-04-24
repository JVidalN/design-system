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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { Icon } from "../IconComponent/Icon";
function DropDown(_a) {
    var { className, placeholder, options, size = 'md', selectedValue, onChange, grouped = false } = _a, props = __rest(_a, ["className", "placeholder", "options", "size", "selectedValue", "onChange", "grouped"]);
    const selectRef = useRef(null);
    const handleChange = (event) => {
        onChange(event.target.value);
    };
    const ungroupedOptions = () => {
        return options.map((option) => (_jsx("option", Object.assign({ value: option.value }, { children: option.label }), option.value)));
    };
    const groupedOptions = () => {
        return options.map((group) => (_jsx("optgroup", Object.assign({ label: Object.keys(group)[0] }, { children: group[Object.keys(group)[0]].map((option) => (_jsx("option", Object.assign({ value: option.value }, { children: option.label }), option.value))) }), Object.keys(group)[0])));
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
        ${className}
      ` }, { children: [_jsxs("select", Object.assign({ ref: selectRef, className: '\n            block \n            appearance-none \n            bg-transparent\n            w-full \n            px-4 \n            py-2 \n            pr-8 \n            rounded\n            focus:outline-none \n            focus:shadow-outline\n          ', onChange: handleChange }, props, { defaultValue: '' }, { children: [placeholder && (_jsx("option", Object.assign({ value: "", disabled: true }, { children: placeholder }), 'placeholder')), grouped ?
                        (groupedOptions())
                        :
                            (ungroupedOptions())] })), _jsx("div", Object.assign({ className: "\n          pointer-events-none \n          absolute \n          inset-y-0 \n          right-0 \n          flex \n          items-center \n          px-3 \n          text-neutral-dark-dark02\n      " }, { children: _jsx(Icon, { name: "arrowDown", height: "8.5", width: "14" }) }))] })));
}
export { DropDown };
