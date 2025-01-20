import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import flowerFieldImage from "../../assets/flower_field.png";

const PrivacyPolicy: React.FC = () => {
  return (
    <div
      className="p-6 bg-cover bg-center bg-fixed min-h-screen overflow-auto text-black"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${flowerFieldImage})`,
      }}
    >
      <div className="p-6 max-w-4xl mx-auto text-black">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="mb-4">
          Effective Date: <strong>1/1/2025</strong>
        </p>
        <p className="mb-4 text-left">
          Holistic Health Haven ("we," "our," or "us") is committed to
          protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you use our app.
          Please read this policy carefully to understand our views and
          practices regarding your personal data and how we will treat it.
        </p>
        <h2 className="text-2xl text-left font-bold mb-2">
          1. Information We Collect
        </h2>
        <p className="mb-4 text-left">
          We may collect and process the following information:
        </p>
        <ul className="list-none pl-6 mb-4 text-left">
          <li className="flex items-start">
            <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
            <span>
              <strong>Information You Provide Directly:</strong> Name, email
              address, and and any other personal details when you subscribe,
              create an account, or fill out forms.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500" />
            <span>
              <strong>Automatically Collected Information:</strong> Usage data,
              device information, and IP address.
            </span>
          </li>
          <li className="flex items-start">
            <CheckCircleIcon className="w-5 h-5 mr-2 text-green-500" />
            <span>
              <strong>Cookies and Tracking Technologies:</strong> Data collected
              using cookies to enhance user experience.
            </span>
          </li>
        </ul>

        <h2 className="text-2xl text-left font-bold mb-2">
          2. How We Use Your Information
        </h2>
        <p className="mb-4 text-left">
          We use the collected information to provide and improve our services,
          personalize your experience, and communicate with you.
        </p>

        <h2 className="text-2xl text-left font-bold mb-2">
          3. Sharing Your Information
        </h2>
        <p className="mb-4 text-left">
          We may share your information with service providers, legal
          authorities, or during business transfers. We do not sell your
          personal data.
        </p>

        <h2 className="text-2xl text-left font-bold mb-2">4. Your Rights</h2>
        <p className="mb-4 text-left">
          You may have rights to access, correct, delete, or opt out of data
          processing depending on your location. Contact us at
          <strong> support@holistichealthhaven.com</strong> to exercise these
          rights.
        </p>

        <h2 className="text-2xl text-left font-bold mb-2">5. Data Security</h2>
        <p className="mb-4 text-left">
          We take reasonable measures to protect your data but cannot guarantee
          absolute security.
        </p>

        <h2 className="text-2xl text-left font-bold mb-2">6. Contact Us</h2>
        <p className="text-left">
          If you have any questions or concerns, please contact us at:
        </p>
        <p className="text-left font-semibold">
          Email: support@holistichealthhaven.com
        </p>
        <p className="text-left font-semibold">Phone: +1 (555) 123-4567</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
