import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
;
function Card({ title, titleAlignment = 'center', width = 'full', height = 'auto', children, }) {
    return (_jsxs("div", Object.assign({ className: `
        bg-neutral-light-base 
        rounded-xl 
        border
        border-neutral-light-light03
        shadow-md
        p-6
        overflow-y-auto
      `, style: {
            width: `${width === 'full' ? '100%' : width}`,
            height: `${height === 'auto' ? 'auto' : height}`
        } }, { children: [title && (_jsx("div", Object.assign({ className: `
            font-bold
            text-lg
            text-neutral-dark-base
            mb-4 
            ${titleAlignment === 'left'
                    ? 'text-left'
                    : titleAlignment === 'center'
                        ? 'text-center'
                        : 'text-right'}
          ` }, { children: title }))), _jsx("div", { children: children })] })));
}
;
export { Card };
