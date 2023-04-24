import { ReactNode } from "react";
export interface ChipCoreProps {
    close?: boolean;
    onClose?: () => void;
    children: ReactNode;
}
declare function ChipCore({ children, close, onClose }: ChipCoreProps): JSX.Element;
declare namespace ChipCore {
    var displayName: string;
}
export interface ChipInputProps {
    placeholder?: string;
    children: ReactNode;
    limit?: number;
    onChange: (chips: string[]) => void;
}
declare function ChipInput({ children, limit, placeholder, onChange }: ChipInputProps): JSX.Element;
declare namespace ChipInput {
    var displayName: string;
}
export declare const Chip: {
    Core: typeof ChipCore;
    Input: typeof ChipInput;
};
export {};
//# sourceMappingURL=Chip.d.ts.map