import { ReactSVG } from 'react-svg';
import * as Icons from '../../helpers/Icons/icons';

export interface IconProps {
    id?:string;
    name: keyof typeof Icons;
    color?: string;
    width?: string;
    height?: string; 
    className?: string; 
    onClick?: () => void;
}
  
function Icon({ id, name, color='black', width='24', height='24', onClick, className }: IconProps) {
    const iconSvg = Icons[name];

    return (
        <ReactSVG
            id={id}
            src={iconSvg}
            className={`${color} ${!!onClick && 'cursor-pointer'} ${className&&className}`}
            wrapper="svg"
            width={width}
            height={height}
            onClick={onClick}
        />
    )
}

export { Icon };
