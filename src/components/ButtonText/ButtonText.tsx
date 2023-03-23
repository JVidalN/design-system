import { ReactNode } from "react";

export interface ButtonTextRootProps {
    /** Recebe elementos do tipo `ButtonText.Icon` e `ButtonText.Label`. */
    children: ReactNode;
    /** Define qual variante será utilizada. */ 
    variant?: 'primary' | 'secondary' | 'danger' ;
    /** Indica quando o componente estará desabilitado. */ 
    disabled?: boolean;
    /** Indica quando o componente estará sublinhado. */ 
    underlined?: boolean;
    /** Será uma função javascript que será executada ao clicar no botão da ação. */ 
    onClick?: () => void;
}
  
 /** O `ButtonText` é um texto exibido em um botão onde o usuário pode clicar para executar uma ação ou navegar para um diferente área da aplicação. */ 
function ButtonTextRoot({variant = 'primary', children, disabled = false, underlined = false, onClick, ...props}: ButtonTextRootProps) {

    const chooseStyle = (variant:string) =>
    {
        let className = '';

        switch (variant) {
            case 'primary':
                className='text-brand-primary-dark hover:text-brand-primary-dark01 active:text-brand-primary-dark02';
                return className;
            case 'secondary':
                className='text-neutral-dark-dark02 hover:text-neutral-dark-dark04 active:text-neutral-dark-dark01';
                return className;
            case 'danger':
                className='text-extra-error hover:text-alert-danger-dark active:text-alert-danger-darkest';
                return className;
        }
    }

    const chooseFontStyle = (underlined:boolean) =>
    {
        let className = '';

        switch (underlined) {
            case true:
                className='font-markpro text-base font-[450]';
                return className;
            case false:
                className='font-roboto text-base font-medium';
        }
    }

    return (
        <div 
            className={`
                flex 
                flex-row
                items-center
                h-fit
                w-=fit
                bg-transparent
                cursor-pointer
                gap-1
                ${chooseStyle(variant)}
                ${chooseFontStyle(underlined)}
                ${disabled&&'opacity-60 shadow-[0px_2px_0px_rgba(0,0,0,0.016)]'}
                ${underlined&&'underline'}
            `}
            onClick={disabled?undefined:onClick}
            {...props}
        >
            {children}
        </div>
    )
}

export interface ButtonTextIconProps {
    /** Recebe um ícone como elemento. */
    children: ReactNode;
}

function ButtonTextIcon(props: ButtonTextIconProps) {
    return <div>{props.children}</div>
}


export interface ButtonTextLabelProps {
    /** Recebe um ícone como elemento. */
    children: ReactNode;
}

function ButtonTextLabel(props: ButtonTextLabelProps) {

    return <span>{props.children}</span>
}

ButtonTextRoot.displayName = 'ButtonText.Root';
ButtonTextIcon.displayName = 'ButtonText.Icon';
ButtonTextLabel.displayName = 'ButtonText.Label';

export const ButtonText = {
  Root: ButtonTextRoot,
  Label: ButtonTextLabel,
  Icon: ButtonTextIcon,
}
