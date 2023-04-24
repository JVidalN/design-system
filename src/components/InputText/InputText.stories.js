import { jsx as _jsx } from "react/jsx-runtime";
import { Icon } from '../IconComponent/Icon';
import { InputText } from "./InputText";
export default {
    title: 'Design System/Componentes/InputText',
    component: InputText.Root,
    args: {
        children: [
            _jsx(InputText.Input, { placeholder: 'Escreva seu e-mail', type: "text" }, 'default'),
            _jsx(InputText.Icon, { children: _jsx(Icon, { name: 'search', width: '17.49px', height: '17.49px' }) }, 'defaultIcon')
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }
};
const InputTextTemplate = (args) => _jsx(InputText.Root, Object.assign({}, args));
export const Default = InputTextTemplate.bind({});
export const WithoutIcon = InputTextTemplate.bind({});
WithoutIcon.args = {
    children: _jsx(InputText.Input, { placeholder: 'Escreva seu e-mail', type: "text" }, 'withoutIcon')
};
WithoutIcon.storyName = 'Sem Ícone';
export const Enabled = InputTextTemplate.bind({});
Enabled.args = {
    children: _jsx(InputText.Input, { placeholder: 'Escreva seu e-mail', type: "text", autoFocus: true }, 'enabled')
};
Enabled.storyName = 'Ativo';
export const Disabled = InputTextTemplate.bind({});
Disabled.args = {
    children: _jsx(InputText.Input, { placeholder: 'Escreva seu e-mail', type: "text", disabled: true }, 'disabled')
};
Disabled.storyName = 'Desabilitado';
export const WithError = InputTextTemplate.bind({});
WithError.args = {
    children: _jsx(InputText.Input, { placeholder: 'Escreva seu e-mail', type: "text", required: true }, 'withError')
};
WithError.storyName = 'Com Erro';
