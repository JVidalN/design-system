import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Icon } from '../IconComponent/Icon';
import { Tab, TabSet } from "./TabSet";
import { useState } from 'react';
export default {
    title: 'Design System/Componentes/TabSet',
    component: TabSet,
    subcomponents: { Tab },
    decorators: [
        (Story) => (_jsxs("div", Object.assign({ className: "w-[700px] border rounded-md p-2 bg-brand-background" }, { children: [_jsx("h1", Object.assign({ className: "text-3xl font-bold mb-4" }, { children: "Exemplo da TabSet" })), Story()] }))),
    ],
};
export const Default = (args) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    return (_jsxs(TabSet, Object.assign({}, args, { onChange: (index) => setActiveTabIndex(index), activeTabIndex: activeTabIndex }, { children: [_jsx(Tab, Object.assign({ label: "Tab 1" }, { children: _jsx("p", { children: "Qualquer conte\u00FAdo da Tab 1." }) })), _jsx(Tab, Object.assign({ label: "Tab 2" }, { children: _jsx("p", { children: "Qualquer conte\u00FAdo da Tab 2." }) })), _jsx(Tab, Object.assign({ label: "Tab 3" }, { children: _jsx("p", { children: "Qualquer conte\u00FAdo da Tab 3." }) }))] })));
};
export const WithIcon = (args) => {
    const tabOne = () => {
        return (_jsxs(_Fragment, { children: [_jsx("span", { children: "Tab 1" }), _jsx(Icon, { name: 'check', color: 'text-alert-success-dark', width: '18', height: '18' })] }));
    };
    const tabThree = () => {
        return (_jsxs(_Fragment, { children: [_jsx("span", { children: "Tab 3" }), _jsx(Icon, { name: 'cancel', color: 'text-alert-danger-dark', width: '18', height: '18' })] }));
    };
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    return (_jsxs(TabSet, Object.assign({}, args, { onChange: (index) => setActiveTabIndex(index), activeTabIndex: activeTabIndex }, { children: [_jsx(Tab, Object.assign({ label: tabOne() }, { children: _jsx("p", { children: "Content for Tab 1 goes here." }) })), _jsx(Tab, Object.assign({ label: "Tab 2" }, { children: _jsx("p", { children: "Content for Tab 2 goes here." }) })), _jsx(Tab, Object.assign({ label: tabThree() }, { children: _jsx("p", { children: "Content for Tab 3 goes here." }) }))] })));
};
