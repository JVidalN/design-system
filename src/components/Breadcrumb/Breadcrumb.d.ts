/// <reference types="react" />
interface BreadcrumbItemProps {
    label: string;
    href?: string;
}
interface BreadcrumbProps {
    items: BreadcrumbItemProps[];
}
declare function Breadcrumb({ items }: BreadcrumbProps): JSX.Element;
export { Breadcrumb };
//# sourceMappingURL=Breadcrumb.d.ts.map