import type React from "react";
import type { ModalProps } from "../../model";
import discount from "../../assets/discount.jpg";
import xIcon from "../../assets/x-mark.png";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   title?: string;
//   children: React.ReactNode;
// }

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40">
      {/* Modal Container */}
      <div
        onClick={(event) => event.stopPropagation()}
        className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-lg h-[70%] relative z-50"
      >
        <img
          src={discount}
          alt="Discount price"
          className="absolute top-2 right-2 w-[10rem] h-[10rem] z-60"
        />
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 z-70"
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
