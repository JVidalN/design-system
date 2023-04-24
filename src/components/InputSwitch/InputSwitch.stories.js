import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import { InputSwitch } from './InputSwitch';
export default {
    title: "Design System/Componentes/InputSwitch",
    component: InputSwitch,
    args: {
        disabled: false
    },
    argTypes: {
        checked: {
            table: {
                disable: true
            }
        },
        onChange: {
            table: {
                disable: true
            }
        },
        className: {
            table: {
                disable: true
            }
        }
    }
};
export const Default = (args) => {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        action('Switch Event')(`Valor atual: ${checked}`);
    }, [checked]);
    return (_jsx(InputSwitch, Object.assign({}, args, { onChange: setChecked, checked: checked })));
};
Default.args = {
    checked: false
};
Default.storyName = 'Default';
