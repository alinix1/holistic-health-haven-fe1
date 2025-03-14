import type React from "react";
import flowerFieldImage from "../assets/flower_field.png";

const TermsAndConditions: React.FC = () => {
  return (
    <div
      className="p-6 bg-cover bg-center bg-fixed min-h-screen flex flex-col items-center justify-center text-black"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${flowerFieldImage})`,
      }}
    >
      <div className="p-6 max-w-4xl mx-auto text-black">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Terms & Conditions
        </h1>
        <p className="mb-4">
          Effective Date: <strong>1/1/2025</strong>
        </p>
        <p className="mb-4 text-left">
          Welcome to Holistic Health Haven. By using our website, you agree to
          comply with and be bound by the following terms and conditions of use,
          which together with our privacy policy govern Holistic Health Haven's
          relationship with you in relation to this website. If you disagree
          with any part of these terms and conditions, please do not use our
          website.
        </p>
        <h2 className="text-2xl text-left font-bold mb-4">
          2. Intellectual Property
        </h2>
        <p className="mb-4 text-left">
          This website contains material that is owned by or licensed to us.
          This material includes, but is not limited to, the design, layout,
          look, appearance, and graphics. Reproduction is prohibited other than
          in accordance with the copyright notice, which forms part of these
          terms and conditions.
        </p>

        <h2 className="text-2xl text-left font-bold mb-4">
          3. Limitation of Liability
        </h2>
        <p className="text-left mb-4">
          Your use of any information or materials on this website is entirely
          at your own risk, for which we shall not be liable. It shall be your
          own responsibility to ensure that any products, services, or
          information available through this website meet your specific
          requirements.
        </p>

        <h2 className="text-2xl text-left font-bold mb-4">4. Governing Law</h2>
        <p className="text-left mb-4">
          Your use of this website and any dispute arising out of such use of
          the website is subject to the laws of United States.
        </p>

        <p className="text-left mt-6">
          If you have any questions about these terms and conditions, please
          contact us at:
        </p>
        <p className="text-left font-semibold">
          Email: support@holistichealthhaven.com
        </p>
        <p className="text-left font-semibold">Phone: +1 (555) 123-4567</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
