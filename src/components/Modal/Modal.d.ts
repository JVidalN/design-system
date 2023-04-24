import React from "react";
export interface ModalProps {
    title?: React.ReactNode;
    height?: string;
    width?: string;
    isOpen: boolean;
    onClose: () => void;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}
declare function Modal({ title, isOpen, onClose, footer, children, width, height, }: ModalProps): JSX.Element;
export { Modal };
//# sourceMappingURL=Modal.d.ts.map