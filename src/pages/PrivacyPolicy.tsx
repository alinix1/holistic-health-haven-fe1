import type React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import flowerFieldImage from "../assets/flower_field1.webp";

const PrivacyPolicy: React.FC = () => {
  return (
    <div
      className="min-h-screen overflow-auto bg-cover bg-fixed bg-center p-6 text-black"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${flowerFieldImage})`,
      }}
    >
      <div className="mx-auto max-w-4xl p-6">
        <h1 className="font-inter mb-6 text-center text-3xl font-bold">
          Privacy Policy
        </h1>
        <p className="mb-4 font-jakarta">
          Effective Date: <strong>1/1/2025</strong>
        </p>
        <p className="mb-4 font-jakarta">
          Holistic Health Haven ("we," "our," or "us") is committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you use our app.
          Please read this policy carefully to understand our views and
          practices regarding your personal data and how we will treat it.
        </p>
        <h2 className="font-inter mb-4 text-2xl font-bold">
          1. Information We Collect
        </h2>
        <p className="mb-4 font-jakarta">
          We may collect and process the following information:
        </p>
        <ul className="mb-4 list-none pl-6">
          <li className="flex items-start">
            <CheckCircleIcon className="mr-2 h-5 w-5 flex-shrink-0 text-[#9C3C07]" />
            <span className="font-jakarta">
              <strong>Information You Provide Directly:</strong> Name, email
              address, and any other personal details when you subscribe, create
              an account, or fill out forms.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="mr-2 h-5 w-5 flex-shrink-0 text-[#9C3C07]" />
            <span className="font-jakarta">
              <strong>Automatically Collected Information:</strong> Usage data,
              device information, and IP address.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="mr-2 h-5 w-5 flex-shrink-0 text-[#9C3C07]" />
            <span className="font-jakarta">
              <strong>Cookies and Tracking Technologies:</strong> Data collected
              using cookies to enhance user experience.
            </span>
          </li>
        </ul>

        <h2 className="font-inter mb-4 text-2xl font-bold">
          2. How We Use Your Information
        </h2>
        <p className="mb-4 font-jakarta">
          We use the collected information to provide and improve our services,
          personalize your experience, and communicate with you.
        </p>

        <h2 className="font-inter mb-4 text-2xl font-bold">
          3. Sharing Your Information
        </h2>
        <p className="mb-4 font-jakarta">
          We may share your information with service providers, legal
          authorities, or during business transfers. We do not sell your
          personal data.
        </p>

        <h2 className="font-inter mb-4 text-2xl font-bold">4. Your Rights</h2>
        <p className="mb-4 font-jakarta">
          You may have rights to access, correct, delete, or opt out of data
          processing depending on your location. Contact us at
          <strong> support@holistichealthhaven.com</strong> to exercise these
          rights.
        </p>

        <h2 className="font-inter mb-4 text-2xl font-bold">5. Data Security</h2>
        <p className="mb-4 font-jakarta">
          We take reasonable measures to protect your data but cannot guarantee
          absolute security.
        </p>

        <h2 className="font-inter mb-4 text-2xl font-bold">6. Contact Us</h2>
        <p className="mb-4 font-jakarta">
          If you have any questions or concerns, please contact us at:
        </p>
        <p className="font-jakarta font-semibold">
          Email: support@holistichealthhaven.com
        </p>
        <p className="font-jakarta font-semibold">Phone: +1 (555) 123-4567</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
