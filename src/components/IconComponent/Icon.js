import { jsx as _jsx } from "react/jsx-runtime";
import { ReactSVG } from 'react-svg';
import * as Icons from '../../helpers/Icons/icons';
function Icon({ id, name, color = 'black', width = '24', height = '24', onClick, className }) {
    const iconSvg = Icons[name];
    return (_jsx(ReactSVG, { id: id, src: iconSvg, className: `${color} cursor-pointer ${className && className}`, wrapper: "svg", width: width, height: height, onClick: onClick }));
}
export { Icon };
