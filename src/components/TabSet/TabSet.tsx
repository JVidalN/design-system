import React, { ReactNode, useState } from "react";

interface Tab {
  /** Título da `Tab` que pode conter apenas o texto ou também um ícone. */
  label: ReactNode;
  /** Conteúdo que deve ser exibido dentro da `Tab`. */
  children?: ReactNode;
}

interface TabSetProps {
  children: React.ReactElement<Tab>[];
  activeTabIndex: number;
  onChange: (index: any)=> void;
}

function TabSet({ children, activeTabIndex, onChange }:TabSetProps){

  const onTabClick = (index: number) => {
    onChange(index);
  };

  const activeTab = children[activeTabIndex];

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex border-b border-brand-primary-dark">
        {children.map((tab: any, index: number) => {
          return React.cloneElement(tab, {
            key: index,
            active: activeTabIndex === index,
            onTabClick: () => onTabClick(index),
          });
        })}
      </div>
      
      <div className='
          mt-6
          bg-neutral-light-base 
          rounded-xl 
          border
          border-neutral-light-light03
          shadow-sm
          p-6
          overflow-y-auto
          w-full
          h-auto
        '>{activeTab.props.children}</div>
    </div>
  );
};

interface TabProps extends Tab {
  /** Indica qual `Tab` está ativa. */
  active?: boolean;
  /** Evento para mudar a `Tab` ativa quando for clicada. */
  onTabClick?: () => void;
  /** Elementos do tipo `Tab`. */
  children: ReactNode;
}

function Tab({ label, children, active, onTabClick }:TabProps){return (
  <button
    onClick={onTabClick}
    className={`
      font-roboto
      text-sm
      h-8
      px-3
      py-[5px]
      flex 
      items-center
      justify-center
      gap-[6px]
      border-x
      border-t
      border-brand-primary-dark
      rounded-t-xl
      text-brand-primary-dark
      ${active&&'outline-none text-neutral-light-base bg-brand-primary-dark shadow-lg'}
    `}
  >
    {label}
  </button>
);
};

export { TabSet, Tab };
