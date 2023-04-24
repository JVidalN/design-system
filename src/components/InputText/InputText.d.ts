import { InputHTMLAttributes, ReactNode } from "react";
export interface InputTextRootProps {
    children: ReactNode;
    className?: string;
}
declare function InputTextRoot(props: InputTextRootProps): JSX.Element;
declare namespace InputTextRoot {
    var displayName: string;
}
export interface InputTextIconProps {
    children: ReactNode;
}
declare function InputTextIcon(props: InputTextIconProps): JSX.Element;
declare namespace InputTextIcon {
    var displayName: string;
}
export interface InputTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
}
/** Um botão é um controle que permite ao usuário se comunicar diretamente com o produto digital e enviar os comandos necessários para atingir um objetivo específico. */
declare function InputTextInput(props: InputTextInputProps): JSX.Element;
declare namespace InputTextInput {
    var displayName: string;
}
export declare const InputText: {
    Root: typeof InputTextRoot;
    Input: typeof InputTextInput;
    Icon: typeof InputTextIcon;
};
export {};
//# sourceMappingURL=InputText.d.ts.map