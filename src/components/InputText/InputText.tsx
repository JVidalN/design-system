import { InputHTMLAttributes, ReactNode } from "react";

export interface InputTextRootProps {
    children: ReactNode;
    className?: string;
}
  
function InputTextRoot(props: InputTextRootProps) {
    return (
            <div className={`
                flex 
                flex-row
                items-center
                h-10
                py-4 
                px-3 
                rounded-md
                bg-neutral-light-light01 
                w-full 
                focus-within:ring-1
                ring-brand-primary-dark
                border 
                border-neutral-dark-dark02
                focus-within:border-0
                max-w-[400px]
                justify-between
                ${props.className}
            `}>
                {props.children}
            </div>
    )
}

export interface InputTextIconProps {
    children: ReactNode;
}

function InputTextIcon(props: InputTextIconProps) {
    return (
        <div className='w-6 h-6 flex items-center text-neutral-dark-dark02 '>
            {props.children}
        </div>
    )
}


export interface InputTextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

 /** Um botão é um controle que permite ao usuário se comunicar diretamente com o produto digital e enviar os comandos necessários para atingir um objetivo específico. */ 
function InputTextInput(props: InputTextInputProps) {

    return (
        <input
            className="
                bg-transparent
                flex-auto
                h-auto
                w-auto
                font-roboto
                text-sm
                py-2
                px-4
                outline-none
            "
            {...props}
        />
    )
}

InputTextRoot.displayName = 'InputText.Root';
InputTextInput.displayName = 'InputText.Input';
InputTextIcon.displayName = 'InputText.Icon';

export const InputText = {
  Root: InputTextRoot,
  Input: InputTextInput,
  Icon: InputTextIcon,
}
