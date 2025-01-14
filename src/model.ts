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

export interface DropdownProps {
  handleAilmentSelect: (selectedAilment: string) => void;
}

export interface HeaderProps {
  children?: React.ReactNode;
  cartItems: HolisticProduct[];
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export interface HolisticProductProps {
  id: number;
  product_type: string[];
  product_title: string;
  img: string;
  product_description: string;
  price: number;
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

export interface HolisticProductListProps {
  holisticProducts: HolisticProduct[];
}

export interface HolisticProductPageProps {
  holisticProducts: HolisticProduct[];
  id: number;
  addToCart: (product: HolisticProduct) => void;
}

export interface SearchBarProps {
  handleSearchInput: (value: string) => void;
  searchValue: string;
}

export interface Review {
  id: number;
  holistic_product_id: number;
  user_name: string;
  user_review: string;
}
