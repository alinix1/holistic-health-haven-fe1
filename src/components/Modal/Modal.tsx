import React, { ReactNode } from "react";
import xIcon from "../../assets/x-mark.png";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      {/* Modal Container */}
      <div
        onClick={(event) => event.stopPropagation()}
        className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          <img src={xIcon} alt="close icon" className="w-4 h-4" />
        </button>
        {/* Modal Title */}
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}

        {/* Modal Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
