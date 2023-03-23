import { Fragment, HTMLProps, useRef } from "react";
import { Icon } from "../IconComponent/Icon";

interface BreadcrumbItemProps {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItemProps[];
}

function Breadcrumb({ items }: BreadcrumbProps) {
    
    return (
      <nav className="flex items-center mt-2 text-sm text-brand-primary-dark">
        {items.map((item, index) => (
          <div key={item.label} className="last:text-neutral-dark-dark01 flex">
            {item.href ? (
              <a href={item.href} className="hover:text-brand-primary-darkest">{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
            {index !== items.length - 1 && (
              <span className="mx-2">
                <Icon name="arrowRight" />
              </span>
            )}
          </div>
        ))}
      </nav>
    )
}

export { Breadcrumb };
