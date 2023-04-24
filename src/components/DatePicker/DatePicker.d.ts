/// <reference types="react" />
export interface DatePickerProps {
    label: string;
    hasSelected: boolean;
    variant: 1 | 2 | 3;
    dados: any;
    setDadosRetorno: React.Dispatch<React.SetStateAction<any>>;
}
declare function DatePicker(props: DatePickerProps): JSX.Element;
export { DatePicker };
//# sourceMappingURL=DatePicker.d.ts.map