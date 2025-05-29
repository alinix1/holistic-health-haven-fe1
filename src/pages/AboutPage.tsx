import type React from "react";
import { useEffect } from "react";
import { Collapse, initTWE } from "tw-elements";
import Accordion from "../components/Accordion/Accordion";
import holisticProductsImg from "../assets/holistic_products1.webp";
import productsBackgroundImg from "../assets/products_background1.webp";

const AboutPage: React.FC = () => {
  useEffect(() => {
    initTWE({ Collapse });
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5] px-6 py-10">
      {/* About Info */}
      <h1 className="font-inter mb-8 text-center text-3xl font-bold text-gray-800">
        <span className="font-quicksand italic"> About </span> Holistic Health
        Haven
      </h1>
      <p className="font-jakarta leading-relaxed">
        At Holistic Health Haven, we believe in empowering individuals to take
        charge of their well-being through natural and sustainable practices.
        Our mission is to create a sanctuary where holistic health meets modern
        living, offering a carefully curated selection of products designed to
        nourish the mind, body, and spirit. From organic remedies and herbal
        supplements to mindfulness tools and eco-friendly essentials, every item
        in our collection is thoughtfully sourced to support your journey toward
        balance and vitality.
      </p>
      <p className="mt-4 font-jakarta leading-relaxed">
        We are committed to fostering a community that values self-care,
        sustainability, and conscious living. Whether you’re exploring holistic
        health for the first time or deepening your existing practices, Holistic
        Health Haven is here to inspire, guide, and support you every step of
        the way. Together, let’s cultivate a lifestyle that embraces wellness in
        harmony with the world around us.
      </p>
      <div className="mt-10 flex flex-wrap justify-between">
        <Accordion />

        {/* Images */}
        <div className="flex w-full flex-col items-center justify-evenly md:flex-row">
          <img
            src={holisticProductsImg}
            alt="Holistic products"
            className="mt-12 w-full max-w-sm rounded-lg object-cover shadow-none transition-shadow duration-500 ease-in-out hover:shadow-4-strong"
          />
          <img
            src={productsBackgroundImg}
            alt="Products background"
            className="mt-12 w-full max-w-sm rounded-lg object-cover shadow-none transition-shadow duration-500 ease-in-out hover:shadow-4-strong"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
