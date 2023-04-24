import { ReactNode } from "react";
export interface ButtonTextRootProps {
    /** Recebe elementos do tipo `ButtonText.Icon` e `ButtonText.Label`. */
    children: ReactNode;
    /** Define qual variante será utilizada. */
    variant?: 'primary' | 'secondary' | 'danger';
    /** Indica quando o componente estará desabilitado. */
    disabled?: boolean;
    /** Indica quando o componente estará sublinhado. */
    underlined?: boolean;
    /** Será uma função javascript que será executada ao clicar no botão da ação. */
    onClick?: () => void;
}
/** O `ButtonText` é um texto exibido em um botão onde o usuário pode clicar para executar uma ação ou navegar para um diferente área da aplicação. */
declare function ButtonTextRoot({ variant, children, disabled, underlined, onClick, ...props }: ButtonTextRootProps): JSX.Element;
declare namespace ButtonTextRoot {
    var displayName: string;
}
export interface ButtonTextIconProps {
    /** Recebe um ícone como elemento. */
    children: ReactNode;
}
declare function ButtonTextIcon(props: ButtonTextIconProps): JSX.Element;
declare namespace ButtonTextIcon {
    var displayName: string;
}
export interface ButtonTextLabelProps {
    /** Recebe um ícone como elemento. */
    children: ReactNode;
}
declare function ButtonTextLabel(props: ButtonTextLabelProps): JSX.Element;
declare namespace ButtonTextLabel {
    var displayName: string;
}
export declare const ButtonText: {
    Root: typeof ButtonTextRoot;
    Label: typeof ButtonTextLabel;
    Icon: typeof ButtonTextIcon;
};
export {};
//# sourceMappingURL=ButtonText.d.ts.map