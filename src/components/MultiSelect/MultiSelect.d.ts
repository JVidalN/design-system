/// <reference types="react" />
interface OptionProps {
    label: string;
    value: string;
}
interface OptionGroupProps {
    [groupName: string]: OptionProps[];
}
export interface MultiSelectProps {
    options: OptionProps[] | OptionGroupProps[];
    placeholder: string;
    selectedOptions: OptionProps[];
    onChange: (selectedOptions: OptionProps[]) => void;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    grouped?: boolean;
}
declare function MultiSelect({ options, placeholder, disabled, size, onChange, selectedOptions, grouped }: MultiSelectProps): JSX.Element;
export { MultiSelect };
//# sourceMappingURL=MultiSelect.d.ts.map