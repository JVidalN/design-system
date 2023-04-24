import React, { ReactNode } from "react";
export interface ButtonToggleRootProps {
    children: ReactNode;
    activeChild: 'left' | 'right';
    onChange: (selectedValue: any) => void;
}
/** Um botão é um controle que permite ao usuário se comunicar diretamente com o produto digital e enviar os comandos necessários para atingir um objetivo específico. */
declare function ButtonToggleRoot({ children, onChange, activeChild }: ButtonToggleRootProps): JSX.Element;
declare namespace ButtonToggleRoot {
    var displayName: string;
}
export interface ButtonToggleChildProps {
    onClick?: () => void;
    active?: boolean;
    children: React.ReactNode;
}
declare function ButtonToggleLeft({ ...props }: ButtonToggleChildProps): JSX.Element;
declare namespace ButtonToggleLeft {
    var displayName: string;
}
declare function ButtonToggleRight({ ...props }: ButtonToggleChildProps): JSX.Element;
declare namespace ButtonToggleRight {
    var displayName: string;
}
export declare const ButtonToggle: {
    Root: typeof ButtonToggleRoot;
    Left: typeof ButtonToggleLeft;
    Right: typeof ButtonToggleRight;
};
export {};
//# sourceMappingURL=ButtonToggle.d.ts.map