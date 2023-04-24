import { HTMLAttributes } from "react";
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
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
declare function Button({ variant, disabled, loading, label, ...props }: ButtonProps): JSX.Element;
export { Button };
//# sourceMappingURL=Button.d.ts.map