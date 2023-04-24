/// <reference types="react" />
interface CardProps {
    title?: string;
    titleAlignment?: 'left' | 'center' | 'right';
    width?: string;
    height?: string;
    children: React.ReactNode;
}
declare function Card({ title, titleAlignment, width, height, children, }: CardProps): JSX.Element;
export { Card };
//# sourceMappingURL=Card.d.ts.map