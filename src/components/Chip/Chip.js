import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, useEffect, useState } from "react";
import { Icon } from "../IconComponent/Icon";
import { InputText } from "../InputText/InputText";
function ChipCore({ children, close = false, onClose }) {
    return (_jsxs("span", Object.assign({ className: `
    py-[2px]
    px-2
    rounded-[20px]
    inline-flex 
    relative 
    items-center 
    mr-2
    text-sm 
    h-[25px]
    text-neutral-dark-base
    bg-brand-primary-dark/[0.15] 
    ${close ? 'gap-[6px]' : ''}` }, { children: [children, close && (_jsx(Icon, { name: "cancel", color: "text-brand-primary-dark", width: "15", height: "15", onClick: onClose }))] })));
}
;
function ChipInput({ children, limit, placeholder = 'Adicione..', onChange }) {
    const [chips, setChips] = useState([]);
    const [value, setValue] = useState('');
    const fillFirstChildren = () => {
        Children.forEach(children, (child) => {
            setChips([...chips, child.props.children]);
        });
    };
    useEffect(() => {
        fillFirstChildren();
    }, []);
    useEffect(() => {
        if (chips) {
            onChange(chips);
        }
    }, [chips]);
    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if ((limit && chips.length >= limit) || !value)
                return;
            setChips([...chips, value]);
            setValue('');
        }
    };
    const handleClose = (index) => {
        const newChips = [...chips];
        newChips.splice(index, 1);
        setChips(newChips);
    };
    return (_jsxs(InputText.Root, Object.assign({ className: "!p-0 !h-fit" }, { children: [_jsx(InputText.Input, { placeholder: placeholder, type: "text", value: value, onChange: (e) => { setValue(e.target.value); }, onKeyUp: handleEnter }), _jsx("div", Object.assign({ className: "flex flex-wrap w-fit h-fit gap-1 p-1" }, { children: chips.map((chip, index) => (_jsx(ChipCore, Object.assign({ close: true, onClose: () => handleClose(index) }, { children: chip }), index))) }))] })));
}
;
ChipCore.displayName = 'Chip.Core';
ChipInput.displayName = 'Chip.Input';
export const Chip = {
    Core: ChipCore,
    Input: ChipInput
};
