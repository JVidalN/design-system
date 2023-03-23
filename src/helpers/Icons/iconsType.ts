import * as icons from './icons';

const iconNamesAsType = Object.keys(icons) as (keyof typeof icons)[];

export { iconNamesAsType };
