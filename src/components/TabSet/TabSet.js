import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
function TabSet({ children, activeTabIndex, onChange }) {
    const onTabClick = (index) => {
        onChange(index);
    };
    const activeTab = children[activeTabIndex];
    return (_jsxs("div", Object.assign({ className: "flex flex-col w-full h-full" }, { children: [_jsx("div", Object.assign({ className: "flex border-b border-brand-primary-dark" }, { children: children.map((tab, index) => {
                    return React.cloneElement(tab, {
                        key: index,
                        active: activeTabIndex === index,
                        onTabClick: () => onTabClick(index),
                    });
                }) })), _jsx("div", Object.assign({ className: '\n          mt-6\n          bg-neutral-light-base \n          rounded-xl \n          border\n          border-neutral-light-light03\n          shadow-sm\n          p-6\n          overflow-y-auto\n          w-full\n          h-auto\n        ' }, { children: activeTab.props.children }))] })));
}
;
function Tab({ label, children, active, onTabClick }) {
    return (_jsx("button", Object.assign({ onClick: onTabClick, className: `
      font-roboto
      text-sm
      h-8
      px-3
      py-[5px]
      flex 
      items-center
      justify-center
      gap-[6px]
      border-x
      border-t
      border-brand-primary-dark
      rounded-t-xl
      text-brand-primary-dark
      ${active && 'outline-none text-neutral-light-base bg-brand-primary-dark shadow-lg'}
    ` }, { children: label })));
}
;
export { TabSet, Tab };
