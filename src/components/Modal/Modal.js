import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Icon } from "../IconComponent/Icon";
function Modal({ title, isOpen, onClose, footer, children, width = '448px', height = '300px', }) {
    const handleModalClose = () => {
        onClose();
    };
    return (_jsx(_Fragment, { children: isOpen && (_jsx("div", Object.assign({ className: "\n            fixed \n            z-1 \n            top-0 \n            left-0 \n            w-screen \n            h-screen \n            flex \n            items-center \n            justify-center\n          " }, { children: _jsxs("div", Object.assign({ className: `
              relative 
              w-full
              mx-auto 
              rounded-md 
              shadow-lg 
              z-1 
              flex
              flex-col
              justify-between
              bg-neutral-light-base
            `, style: {
                    width: `${width && width}`,
                    height: `${height && height}`
                } }, { children: [title && (_jsxs("div", Object.assign({ className: "px-4 py-4" }, { children: [_jsx("div", Object.assign({ className: "font-roboto font-medium text-lg text-neutral-dark-base" }, { children: title })), _jsx("div", Object.assign({ className: "absolute top-0 right-0 p-4 focus:outline-none" }, { children: _jsx(Icon, { name: 'close', width: "14", height: "14", color: "text-neutral-dark-base", onClick: handleModalClose }) }))] }))), _jsx("div", Object.assign({ className: "grow p-6 break-words overflow-auto" }, { children: children })), footer
                        &&
                            _jsx("div", Object.assign({ className: "\n                  flex \n                  w-full \n                  h-fit\n                  gap-6 \n                  justify-end\n                  p-6\n                " }, { children: footer }))] })) }))) }));
}
;
export { Modal };
