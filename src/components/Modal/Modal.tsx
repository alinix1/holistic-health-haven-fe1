import type React from "react";
import type { ModalProps } from "../../resources/model";
import discount from "../../assets/discount1.webp";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100]">
      {/* Modal Container */}
      <div
        onClick={(event) => event.stopPropagation()}
        className="bg-white rounded-lg shadow-xl p-6 w-[90%] max-w-lg xs:h-[80%] md:h-[90%] lg:h-[90%] xl:h-[80%] overflow-y-auto overflow-x-hidden relative z-50"
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
          <span className="[&>svg]:h-6 [&>svg]:w-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
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
