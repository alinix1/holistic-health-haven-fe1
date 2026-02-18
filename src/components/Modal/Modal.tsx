import type React from "react";
import type { ModalProps } from "../../resources/model";
import discount from "../../assets/discount1.webp";

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Modal Container */}
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative z-50 w-[90%] max-w-lg overflow-y-auto overflow-x-hidden rounded-lg bg-neutral-50 p-6 shadow-2xl xs:h-[80%] md:h-[90%] lg:h-[90%] xl:h-[80%]"
      >
        <img
          src={discount}
          alt="Discount price"
          className="z-60 absolute right-2 top-2 h-[10rem] w-[10rem]"
        />
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="z-70 absolute right-3 top-3 text-[#B64A50] transition-all hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B64A50] focus:ring-offset-2"
          aria-label="Close"
        >
          <span className="[&>svg]:h-8 [&>svg]:w-8">
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
        {title && <h2 className="mb-4 text-xl font-bold">{title}</h2>}

        {/* Modal Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
