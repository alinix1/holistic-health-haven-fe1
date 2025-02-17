import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export interface CartDropdownProps {
  toggleIsCartOpen: () => void;
  cartItems: HolisticProduct[];
}

export interface CartIconProps {
  className?: string;
  isCartOpen: boolean;
  toggleIsCartOpen: () => void;
  cartCount: number;
}

export interface CartState {
  cartItems: HolisticProduct[];
}

export interface DropdownProps {
  handleAilmentSelect: (selectedAilment: string) => void;
  ailment: string;
}

export interface HeaderProps {
  children?: React.ReactNode;
}

export interface HolisticProduct {
  id: number;
  product_type: string[];
  product_title: string;
  img: string;
  product_description: string;
  price: number;
  quantity?: number;
}

export interface HolisticProductProps {
  id: number;
  product_type: string[];
  product_title: string;
  img: string;
  product_description: string;
  price: number;
}
export interface HolisticProductListProps {
  holisticProducts: HolisticProduct[];
}

export interface HolisticProductPageProps {
  holisticProducts: HolisticProduct[];
  id: number;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export interface PaymentFormValues {
  fullName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  cardNumber: string;
  expireDate: string;
  cvv: string;
  cardholderName: string;
}

export interface Review {
  id?: number;
  holistic_product_id: number;
  user_name: string;
  user_review: string;
}

export interface ReviewFormProps {
  onSubmit: (values: Review) => void;
}

export interface SearchBarProps {
  handleSearchInput: (value: string) => void;
  searchValue: string;
  handleSearch: () => void;
  filteredProducts: HolisticProduct[];
  hasSearched: boolean;
}
