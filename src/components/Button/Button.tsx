import { HTMLAttributes } from "react";
import { Icon } from "../IconComponent/Icon";


export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
    /** Texto do botão */ 
    label: string;
    /** Define qual variante será utilizada */ 
    variant?: 'primary' | 'secondary' | 'danger' | 'secondary-danger';
    /** Define qual variante será utilizada */ 
    disabled?: boolean;
    /** Exibe o estado Carregando. */ 
    loading?: boolean;
}

 /** Um botão é um controle que permite ao usuário se comunicar diretamente com o produto digital e enviar os comandos necessários para atingir um objetivo específico. */ 
function Button({ variant = 'primary', disabled, loading, label, ...props}: ButtonProps) {

    const chooseStyle = (variant:string) =>
    {
        let className = '';

        switch (variant) {
            case 'primary':
                className='bg-brand-primary-dark text-neutral-light-base';
                return className;
            case 'secondary':
                className='bg-neutral-light-base text-brand-primary-dark border border-brand-primary-dark';
                return className;
            case 'danger':
                className='bg-extra-error text-neutral-light-base';
                return className;
            case 'secondary-danger':
                className='bg-neutral-light-base text-extra-error border border-extra-error';
                return className;
        }
    }

    const chooseIconColor = (variant:string) =>
    {
        let className = '';

        switch (variant) {
            case 'primary':
            case 'danger':
                className='fill-neutral-light-base';
                return className;
            case 'secondary':
                className='fill-brand-primary-dark';
                return className;
            case 'secondary-danger':
                className='fill-extra-error';
                return className;
        }
    }
    
    return (
        <button 
            {...props}
            disabled={disabled}
            className={`
                rounded-md 
                px-2 
                py-4 
                h-[38px] 
                flex 
                justify-center 
                items-center 
                font-roboto
                text-sm2
                ${chooseStyle(variant)}
                ${disabled?'opacity-60 shadow-[0px_2px_0px_rgba(0,0,0,0.016)]':null}
            `}
        >
            {
                loading?
                <div className="w-full min-h-screen flex justify-center items-center">
                    <Icon 
                        name= 'loadingSpin'
                        color= {chooseIconColor(variant)}
                        width= '24px'
                        height= '24px'
                        className='w-6 h-6 animate-spin'
                    /> 
                </div>
                :
                label
            }
        </button>
    )
}

export { Button };
