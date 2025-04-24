import { lazy } from 'react'; 

// Lazy load all page components 

export const HolisticProductList = lazy(() => 
import('../pages/HolisticProducList')); 
export const HolisticProductPage = lazy(() => 
import('../pages/HolisticProductPage')); 
export const TestimonialsPage = lazy(() => 
import('../pages/TestimonialsPage')); 
export const ReviewSubmit = lazy(() => 
import('../components/ReviewSubmit/ReviewSubmit')); 
export const TermsAndConditions = lazy(() => 
import('../pages/TermsAndConditions')); 
export const PrivacyPolicy = lazy(() => 
import('../pages/PrivacyPolicy')); 
export const CheckoutItem = lazy(() => 
import('../pages/CheckoutItem')); 
export const PaymentContainer = lazy(() => 
import('../components/PaymentContainer/PaymentContainer')); 
export const PaymentSuccess = lazy(() => 
import('../pages/PaymentSuccess')); 
export const AboutPage = lazy(() => 
import('../pages/AboutPage')); 
export const BadURL = lazy(() => import('../pages/BadURL'));

