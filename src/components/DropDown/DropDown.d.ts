/// <reference types="react" />
interface SelectOptionProps {
    label: string;
    value: string;
}
interface SelectOptionGroupProps {
    [groupName: string]: SelectOptionProps[];
}
export interface DropDownProps {
    placeholder?: string;
    options: SelectOptionProps[] | SelectOptionGroupProps[];
    selectedValue: string;
    onChange: (value: string) => void;
    grouped?: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}
declare function DropDown({ className, placeholder, options, size, selectedValue, onChange, grouped, ...props }: DropDownProps): JSX.Element;
export { DropDown };
//# sourceMappingURL=DropDown.d.ts.map