import { useState } from "react";
import { Icon } from "../IconComponent/Icon";

interface OptionProps {
  label: string;
  value: string;
}

interface OptionGroupProps {
  [groupName: string]: OptionProps[];
}

export interface MultiSelectProps {
  options: OptionProps[] | OptionGroupProps[];
  placeholder: string;
  selectedOptions: OptionProps[];
  onChange: (selectedOptions: OptionProps[]) => void;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  grouped?: boolean;
}

function MultiSelect({ 
    options, 
    placeholder, 
    disabled = false, 
    size = 'md', 
    onChange, 
    selectedOptions,
    grouped=false 
  }: MultiSelectProps
) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: OptionProps) => {
    const newSelectedOptions = [...selectedOptions];
    
    if (selectedOptions.find((o) => o.label === option.label)) {
      const index = selectedOptions.findIndex((o) => o.label === option.label);
      newSelectedOptions.splice(index, 1);
    } else {
      newSelectedOptions.push(option);
    }
    onChange(newSelectedOptions);

  };

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

  const getDisabledStyle = (disabled:boolean) => {
    let className = '';
    if(disabled)
      className = 'pointer-events-none opacity-70'

    return className;
  }

  const ungroupedOptions = () => {
    return (
      <ul>
        {options.map((option: any) => (
          <li key={option.label}>
            <label className="flex items-center px-2">
              <input
                type="checkbox"
                className="h-4 w-4 mr-2 shadow"
                checked={selectedOptions.find((o) => o.label === option.label) !== undefined}
                onChange={() => handleOptionSelect(option)}
              />
              <span className="text-sm">{option.label}</span>
            </label>
          </li>
        ))}
      </ul>  
    )
  }

  const groupedOptions = () => {
    return options.map((group: any, idx:number) => (
      <ul key={idx}>
        <li key={Object.keys(group)[0]}>
          <label className="flex items-center px-2">
            <span className="text-sm font-bold">{Object.keys(group)[0]}</span>
          </label>
        </li>
        {(group[Object.keys(group)[0]] as OptionProps[]).map((option) => (
          <li key={option.label}>
            <label className="flex items-center px-2">
              <input
                type="checkbox"
                className="h-4 w-4 mr-2 shadow"
                checked={selectedOptions.find((o) => o.label === option.label) !== undefined}
                onChange={() => handleOptionSelect(option)}
              />
              <span className="text-sm">{option.label}</span>
            </label>
          </li>
        ))}
      </ul> 
    ))
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
        ${getDisabledStyle(disabled)}
      `}
    >
      <button
        type="button"
        className="
          flex 
          items-center 
          justify-between 
          w-full 
          px-4 
          p-[6px] 
          text-left 
          text-neutral-dark-dark02 
          rounded-md 
          bg-transparent 
          focus:outline-none 
          focus:shadow-outline
        "
        onClick={toggleOpen}
      >
        <span className="flex-1 truncate">
          {
            selectedOptions.length === 0 ?
            placeholder 
            : 
            selectedOptions.map((o) => o.value).join(", ")
          }
        </span>
        <Icon name="arrowDown" height="8.5" width="14" />
      </button>
      {isOpen && (
        <div 
          className="
            block 
            z-10 
            w-full 
            bg-transparent 
            border 
            border-neutral-dark-dark02 
            rounded-md 
            mt-1"
        >
          {
            grouped ? 
            ( groupedOptions() ) 
            : 
            ( ungroupedOptions() )
          }      
        </div>
      )}
    </div>
  );
}

export { MultiSelect };
