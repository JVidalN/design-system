import React, { ReactNode } from "react";
interface Tab {
    /** Título da `Tab` que pode conter apenas o texto ou também um ícone. */
    label: ReactNode;
    /** Conteúdo que deve ser exibido dentro da `Tab`. */
    children?: ReactNode;
}
interface TabSetProps {
    children: React.ReactElement<Tab>[];
    activeTabIndex: number;
    onChange: (index: any) => void;
}
declare function TabSet({ children, activeTabIndex, onChange }: TabSetProps): JSX.Element;
interface TabProps extends Tab {
    /** Indica qual `Tab` está ativa. */
    active?: boolean;
    /** Evento para mudar a `Tab` ativa quando for clicada. */
    onTabClick?: () => void;
    /** Elementos do tipo `Tab`. */
    children: ReactNode;
}
declare function Tab({ label, children, active, onTabClick }: TabProps): JSX.Element;
export { TabSet, Tab };
//# sourceMappingURL=TabSet.d.ts.map