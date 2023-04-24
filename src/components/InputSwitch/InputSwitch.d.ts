/// <reference types="react" />
export interface InputSwitchProps {
    onChange: (value: boolean) => void;
    checked: boolean;
    disabled?: boolean;
    className?: string;
}
/** O componente `InputSwitch` é um componente usado para alternar entre dois estados, tais como on/off, verdaeiro/falso, sim/não, etc. */
declare function InputSwitch({ onChange, checked, disabled, className }: InputSwitchProps): JSX.Element;
export { InputSwitch };
//# sourceMappingURL=InputSwitch.d.ts.map