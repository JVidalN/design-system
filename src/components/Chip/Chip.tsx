import React, { Children, ReactNode, useEffect, useState } from "react";
import { Icon } from "../IconComponent/Icon";
import { InputText } from "../InputText/InputText";

export interface ChipCoreProps {
  close?: boolean;
  onClose?: () => void;
  children: ReactNode;
}

function ChipCore({ children, close = false, onClose }:ChipCoreProps){
  return (
    <span className={`
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
    ${close ? 'gap-[6px]' : ''}`}
  >
      {children}
      {close && ( <Icon name="cancel" color="text-brand-primary-dark" width="15" height="15" onClick={onClose}/>)}
    </span>
  );
};

export interface ChipInputProps {
  placeholder?: string;
  children: ReactNode;
  limit?: number;
  onChange: (chips: string[]) => void;
}

function ChipInput({ children, limit, placeholder='Adicione..', onChange }:ChipInputProps){
  const [chips, setChips] = useState<Array<string>>([]);
  const [value, setValue] = useState<string>('');

  const fillFirstChildren = () => {
    Children.forEach(children, (child: any) => {
      setChips([...chips, child.props.children]);
    })
  }

  useEffect(() => {
    fillFirstChildren();
  }, [])

  useEffect(() => {
    if(chips){
      onChange(chips);
    }
  }, [chips])
  
  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if ((limit&&chips.length >= limit) || !value)
        return;
  
      setChips([...chips, value]);
      setValue('');
    }
  };

  const handleClose = (index: number) => {
    const newChips = [...chips];
    newChips.splice(index, 1);
    setChips(newChips);
  };

  return (
      <InputText.Root className="!p-0 !h-fit">
        <InputText.Input 
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={(e)=>{setValue(e.target.value)}}
          onKeyUp={handleEnter}
        />
        <div className="flex flex-wrap w-fit h-fit gap-1 p-1">
          {chips.map((chip, index) => (
            <ChipCore key={index} close={true} onClose= {() => handleClose(index)}>
              {chip}
            </ChipCore>
          ))}
        </div>
      </InputText.Root> 
  );
};

ChipCore.displayName = 'Chip.Core';
ChipInput.displayName = 'Chip.Input';

export const Chip = {
  Core: ChipCore,
  Input: ChipInput
};
