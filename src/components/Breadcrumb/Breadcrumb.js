import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from "../IconComponent/Icon";
function Breadcrumb({ items }) {
    return (_jsx("nav", Object.assign({ className: "flex items-center mt-2 text-sm text-brand-primary-dark" }, { children: items.map((item, index) => (_jsxs("div", Object.assign({ className: "last:text-neutral-dark-dark01 flex" }, { children: [item.href ? (_jsx("a", Object.assign({ href: item.href, className: "hover:text-brand-primary-darkest" }, { children: item.label }))) : (_jsx("span", { children: item.label })), index !== items.length - 1 && (_jsx("span", Object.assign({ className: "mx-2" }, { children: _jsx(Icon, { name: "arrowRight" }) })))] }), item.label))) })));
}
export { Breadcrumb };
