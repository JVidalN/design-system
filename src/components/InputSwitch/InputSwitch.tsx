import React, { useState } from 'react';

export interface InputSwitchProps {
    onChange: (value: boolean) => void;
    checked: boolean;
    disabled?: boolean;
    className?: string;
}

/** O componente `InputSwitch` é um componente usado para alternar entre dois estados, tais como on/off, verdaeiro/falso, sim/não, etc. */
function InputSwitch({ onChange, checked, disabled = false, className }: InputSwitchProps) {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
      onChange(event.target.checked);
    };
  
    return (
        <label 
            className={`
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
                ${isChecked? 'border-brand-primary-dark bg-brand-primary-dark': 'border-neutral-dark-dark03 bg-neutral-dark-dark03'}
                ${disabled? 'pointer-events-none opacity-70': ''}
                ${className}
            `}
        >
            <input
                type="checkbox"
                className="absolute opacity-0 w-0 h-0"
                checked={isChecked}
                onChange={handleChange}
            />
            <span
                className={`
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
                    ${isChecked? 'translate-x-full' : 'translate-x-0'}
                `}
            />
        </label>
    );
}

export { InputSwitch };
