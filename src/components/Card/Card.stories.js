var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Card } from "./Card";
export default {
    title: 'Design System/Componentes/Card',
    component: Card,
    args: {
        title: "Example Card",
        titleAlignment: "center",
        children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    argTypes: {
        titleAlignment: {
            control: {
                type: 'inline-radio'
            }
        },
        width: {
            table: {
                disable: true
            }
        },
        height: {
            table: {
                disable: true
            }
        }
    }
};
const InputTextTemplate = (_a) => {
    var { children } = _a, args = __rest(_a, ["children"]);
    return _jsx(Card, Object.assign({}, args, { children: children }));
};
export const Default = InputTextTemplate.bind({});
Default.storyName = 'Default Responsivo';
export const Resize = InputTextTemplate.bind({});
Resize.args = {
    width: '300px',
    height: '300px'
};
Resize.argTypes = {
    width: {
        table: {
            disable: false
        }
    },
    height: {
        table: {
            disable: false
        }
    }
};
Resize.storyName = 'Altura e Largura';
export const WithoutTitle = InputTextTemplate.bind({});
WithoutTitle.args = {
    title: ''
};
WithoutTitle.storyName = 'Sem Título';
