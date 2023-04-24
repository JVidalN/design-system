import { jsx as _jsx } from "react/jsx-runtime";
function VoidState({ children = 'Nenhum registro encontrado.' }) {
    return (_jsx("div", Object.assign({ className: "\n                flex \n                items-center\n                justify-center\n                bg-neutral-light-light02 \n                rounded-lg\n                w-full\n                h-full\n                text-neutral-dark-dark01\n                text-sm2\n            " }, { children: children })));
}
export { VoidState };
