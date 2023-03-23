import { InputHTMLAttributes, useRef, useState } from "react";
import { Icon } from "../IconComponent/Icon";

interface SelectOptionProps {
  label: string;
  value: string;
}

interface SelectOptionGroupProps {
  [groupName: string]: SelectOptionProps[];
}

export interface DropDownProps{
    placeholder?: string;
    options: SelectOptionProps[] | SelectOptionGroupProps[];
    selectedValue: string;
    onChange: (value: string) => void;
    grouped?: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

function DropDown({
    className, 
    placeholder, 
    options, 
    size = 'md', 
    selectedValue, 
    onChange, 
    grouped=false, 
    ...props
  }: DropDownProps
) {
  const selectRef = useRef<HTMLSelectElement>(null);
  const [,setValue] = useState<string>(selectedValue);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  const ungroupedOptions = () => {
    return options.map((option: any) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))
  }

  const groupedOptions = () => {
    return options.map((group: any) => (
      <optgroup label={Object.keys(group)[0]} key={Object.keys(group)[0]}>
        {(group[Object.keys(group)[0]] as SelectOptionProps[]).map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </optgroup>
    ))
  }

  const getSizeStyle = (size:string) => {
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
  }
  
  return (
    <div 
      className={`
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
      `}
    >
      <select 
          ref={selectRef}
          className='
            block 
            appearance-none 
            bg-transparent
            w-full 
            px-4 
            py-2 
            pr-8 
            rounded
            focus:outline-none 
            focus:shadow-outline
          '
          onChange={handleChange}
          {...props}
          defaultValue=''
      >
        { 
          placeholder && (
          <option key='placeholder' value="" disabled>{placeholder}</option>
          )
        }
        { 
          grouped ? 
          ( groupedOptions() ) 
          : 
          ( ungroupedOptions() )
        }
      </select>

      <div 
        className="
          pointer-events-none 
          absolute 
          inset-y-0 
          right-0 
          flex 
          items-center 
          px-3 
          text-neutral-dark-dark02
      ">
        <Icon name="arrowDown" height="8.5" width="14" />
      </div>
    </div>
  )
}

export { DropDown };
