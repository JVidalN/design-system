import React, { ReactNode, Children, useState } from "react";

export interface ButtonToggleRootProps {
    children: ReactNode;
    activeChild: 'left' | 'right';
    onChange: (selectedValue: any)=> void;
}

 /** Um botão é um controle que permite ao usuário se comunicar diretamente com o produto digital e enviar os comandos necessários para atingir um objetivo específico. */ 
function ButtonToggleRoot({ children, onChange, activeChild }: ButtonToggleRootProps) {

    const handleLeftClick = () => {
        onChange('left');
    };

    const handleRightClick = () => {
        onChange('right');
    };

    return (
        <div 
            className="
                flex
                h-10 
                w-fit
                rounded-lg
                items-center
                font-roboto 
                text-sm 
                border
                border-brand-primary-dark
            "
        >
            {
                Children.map(children, (child, idx) => {
                    if (React.isValidElement(child)) {
                        const childProps = {
                            active: activeChild === 'left' ? true : false,
                            onClick: handleLeftClick
                        };
                        if (child.type === ButtonToggleRight) {
                            childProps.active = activeChild === 'right' ? true : false;
                            childProps.onClick = handleRightClick;
                        }
                        return React.cloneElement(child, childProps);
                    }
                    return child;
                })
            }
        </div>
    );
}

export interface ButtonToggleChildProps {
    onClick?: () => void;
    active?: boolean;
    children: React.ReactNode;
}

function ButtonToggleLeft({ ...props }: ButtonToggleChildProps) {
    return <ButtonToggleChild {...props}/>;
}

function ButtonToggleRight({ ...props }: ButtonToggleChildProps) {
    return <ButtonToggleChild {...props}/>;
}

function ButtonToggleChild({ children, active=false, ...props }: ButtonToggleChildProps) {

    const getStyle = (active: boolean) => {
        let className = '';

        switch (active) {
            case true:
                className = 'bg-brand-primary-dark text-neutral-light-base';
                return className;

            default:
                className ='bg-neutral-light-base text-brand-primary-dark';
                return className;
        }
    }

    return (
        <div 
            className={`
                w-full 
                h-full 
                rounded-lg 
                p-4
                flex
                items-center
                cursor-pointer
                right
                ${getStyle(active)}
            `}
            {...props}
        >
            {children}
        </div>
    );
}

ButtonToggleRoot.displayName = 'ButtonToggle.Root';
ButtonToggleLeft.displayName = 'ButtonToggle.Left';
ButtonToggleRight.displayName = 'ButtonToggle.Right';

export const ButtonToggle = { 
    Root: ButtonToggleRoot,
    Left: ButtonToggleLeft,
    Right: ButtonToggleRight
};
