import { ReactElement, ReactNode } from "react";
export interface TableRootProps {
    values: any[];
    children: ReactElement | ReactElement[] | null;
    title?: string;
    hasTotalizer?: boolean;
    maxHeight?: string;
}
/** A Table exibe dados de maneira tabular e estruturada.  */
declare function TableRoot({ title, children, values, hasTotalizer, maxHeight, ...props }: TableRootProps): JSX.Element;
declare namespace TableRoot {
    var displayName: string;
}
export interface ColumnProps {
    header: string;
    field: string;
    sortable?: boolean;
    maxWidth?: string;
    dataType: string;
    chipped?: boolean;
    format?: string;
}
declare function TableColumn(props: ColumnProps): any;
declare namespace TableColumn {
    var displayName: string;
}
export interface ActionProps {
    children?: ReactNode;
    onClick?: (line: any) => void;
}
declare function TableAction({ onClick, children }: ActionProps): JSX.Element;
declare namespace TableAction {
    var displayName: string;
}
export interface SearchProps {
    children?: ReactNode;
}
declare function TableSearch({ children }: SearchProps): JSX.Element;
declare namespace TableSearch {
    var displayName: string;
}
export interface RegisterProps {
    children?: ReactNode;
}
declare function TableRegister({ children }: RegisterProps): JSX.Element;
declare namespace TableRegister {
    var displayName: string;
}
export declare const Table: {
    Root: typeof TableRoot;
    Column: typeof TableColumn;
    Action: typeof TableAction;
    Search: typeof TableSearch;
    Register: typeof TableRegister;
};
export {};
//# sourceMappingURL=Table.d.ts.map