/// <reference types="react" />
import * as Icons from '../../helpers/Icons/icons';
export interface IconProps {
    id?: string;
    name: keyof typeof Icons;
    color?: string;
    width?: string;
    height?: string;
    className?: string;
    onClick?: () => void;
}
declare function Icon({ id, name, color, width, height, onClick, className }: IconProps): JSX.Element;
export { Icon };
//# sourceMappingURL=Icon.d.ts.map