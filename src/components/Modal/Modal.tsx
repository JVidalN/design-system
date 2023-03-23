
import React, { useState, useEffect } from "react";
import { Icon } from "../IconComponent/Icon";

export interface ModalProps {
  title?: React.ReactNode;
  height?: string;
  width?: string;
  isOpen: boolean;
  onClose: () => void;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

function Modal({
  title,
  isOpen,
  onClose,
  footer,
  children,
  width = '448px',
  height = '300px',
}: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const handleModalClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <>
      {isModalOpen && (
        <div 
          className="
            fixed 
            z-1 
            top-0 
            left-0 
            w-screen 
            h-screen 
            flex 
            items-center 
            justify-center
          "
        >
          <div 
            className={`
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
            `}
            style={{
              width: `${width && width}`, 
              height: `${height && height}`
            }}
          >
            {title && (
              <div className="px-4 py-4">
                <div className="font-roboto font-medium text-lg text-neutral-dark-base">
                  {title}
                </div>
                <div className="absolute top-0 right-0 p-4 focus:outline-none">
                  <Icon 
                    name='close' 
                    width="14" 
                    height="14" 
                    color="text-neutral-dark-base" 
                    onClick={handleModalClose}
                  />
                </div>
              </div>
            )}
            <div className="grow p-6 break-words overflow-auto">
              {children}
            </div>
            {
              footer 
              && 
              <div 
                className="
                  flex 
                  w-full 
                  h-fit
                  gap-6 
                  justify-end
                  p-6
                "
              >
                {footer}
              </div>
            }
          </div>
        </div>
      )}
    </>
  );
};

export { Modal };
