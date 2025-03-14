import type React from "react";
import { useEffect } from "react";
import { Collapse, initTWE } from "tw-elements";
import Accordion from "../components/Accordion/Accordion";
import holisticProductsImg from "../assets/holistic_products.jpg";
import productsBackgroundImg from "../assets/products_background.jpg";

const AboutPage: React.FC = () => {
  useEffect(() => {
    initTWE({ Collapse });
  }, []);

  return (
    <div className="py-10 px-6 min-h-screen bg-[#F5F5F5]">
      {/* About Info */}
      <h1 className="text-3xl font-inter font-bold text-center text-gray-800 mb-8">
        <span className="italic font-quicksand"> About </span> Holistic Health
        Haven
      </h1>
      <p className="leading-relaxed font-jakarta">
        At Holistic Health Haven, we believe in empowering individuals to take
        charge of their well-being through natural and sustainable practices.
        Our mission is to create a sanctuary where holistic health meets modern
        living, offering a carefully curated selection of products designed to
        nourish the mind, body, and spirit. From organic remedies and herbal
        supplements to mindfulness tools and eco-friendly essentials, every item
        in our collection is thoughtfully sourced to support your journey toward
        balance and vitality.
      </p>
      <p className="mt-4 leading-relaxed font-jakarta">
        We are committed to fostering a community that values self-care,
        sustainability, and conscious living. Whether you’re exploring holistic
        health for the first time or deepening your existing practices, Holistic
        Health Haven is here to inspire, guide, and support you every step of
        the way. Together, let’s cultivate a lifestyle that embraces wellness in
        harmony with the world around us.
      </p>
      <div className="flex flex-wrap gap-8 mt-10 justify-between">
        <Accordion />
        {/* Images */}
        <div className="w-full items-center flex flex-col md:flex-row justify-evenly overflow-x-hidden">
          <img
            src={holisticProductsImg}
            alt="Holistic products"
            className="w-full max-w-sm rounded-lg shadow-none mt-12 object-cover transition-shadow duration-500 ease-in-out hover:shadow-4-strong"
          />
          <img
            src={productsBackgroundImg}
            alt="Products background"
            className="w-full max-w-sm rounded-lg shadow-none mt-12 gap:3 object-cover transition-shadow duration-500 ease-in-out hover:shadow-4-strong"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
