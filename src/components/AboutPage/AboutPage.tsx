import type React from "react";
import { useEffect } from "react";
import { Collapse, initTWE } from "tw-elements";
import holisticProductsImg from "../../assets/holistic_products.jpg";

const AboutPage: React.FC = () => {
  useEffect(() => {
    initTWE({ Collapse });
  }, []);

  return (
    <div className="py-10 px-6 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        <span className="italic"> About </span> Holistic Health Haven
      </h1>
      <p className="leading-relaxed">
        At Holistic Health Haven, we believe in empowering individuals to take
        charge of their well-being through natural and sustainable practices.
        Our mission is to create a sanctuary where holistic health meets modern
        living, offering a carefully curated selection of products designed to
        nourish the mind, body, and spirit. From organic remedies and herbal
        supplements to mindfulness tools and eco-friendly essentials, every item
        in our collection is thoughtfully sourced to support your journey toward
        balance and vitality.
      </p>
      <p className="mt-4 leading-relaxed">
        We are committed to fostering a community that values self-care,
        sustainability, and conscious living. Whether you’re exploring holistic
        health for the first time or deepening your existing practices, Holistic
        Health Haven is here to inspire, guide, and support you every step of
        the way. Together, let’s cultivate a lifestyle that embraces wellness in
        harmony with the world around us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
        {/* Accordion Section */}
        <div id="accordionExample" className="py-10 px-6 min-h-screen">
          <div className="rounded-t-lg border text-white border-neutral-200 bg-[#736555]">
            <h2 className="mb-0" id="headingOne">
              <button
                className="group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-white transition hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white"
                type="button"
                data-twe-collapse-init
                data-twe-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How Holistic Health Haven Got Started
                <span className="ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="!visible"
              data-twe-collapse-item
              data-twe-collapse-show
              aria-labelledby="headingOne"
              data-twe-parent="#accordionExample"
            >
              <div className="px-5 py-4 text-justify">
                <p>
                  Holistic Health Haven was founded in 2018 in Denver, CO, born
                  from a passion for natural healing and a desire to create a
                  sanctuary for holistic wellness. Our founders, inspired by
                  their personal experiences with sustainable living and
                  mindfulness, envisioned a space where individuals could
                  reconnect with nature and prioritize their well-being.
                </p>
                <p className="mt-4">
                  What started as a small local initiative in the heart of
                  Denver quickly grew into a trusted destination for natural
                  remedies, eco-friendly products, and resources for self-care.
                  With a deep commitment to empowering individuals to nurture
                  their mind, body, and spirit, Holistic Health Haven became a
                  community-driven platform celebrating balance, mindfulness,
                  and conscious living.
                </p>
                <p className="mt-4">
                  Since 2018, we have been proud to serve as a resource and
                  gathering place for those seeking to live in harmony with
                  themselves and the environment. Our journey is your journey,
                  and we are honored to be part of your path to holistic health.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-t-lg border text-white border-neutral-200 bg-[#736555]">
            <h2 className="mb-0" id="headingTwo">
              <button
                className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-white transition hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark"
                type="button"
                data-twe-collapse-init
                data-twe-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Why should I use Holistic Health Haven's products?
                <span className="ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="!visible hidden"
              data-twe-collapse-item
              aria-labelledby="headingTwo"
              data-twe-parent="#accordionExample"
            >
              <div className="px-5 py-4 text-justify">
                <p>
                  Holistic Health Haven's products are carefully curated to
                  promote overall well-being while staying true to nature. We
                  believe that what you put into your body and use in your daily
                  life should align with your health goals and values. Our
                  products are crafted with high-quality, sustainably sourced
                  ingredients, ensuring they are safe, effective, and
                  eco-friendly.
                </p>
                <p className="mt-4">
                  When you choose Holistic Health Haven, you’re not just
                  purchasing a product—you’re investing in a healthier
                  lifestyle. Whether it’s our organic remedies, mindfulness
                  tools, or eco-conscious essentials, every item is designed to
                  nurture your mind, body, and spirit. We prioritize
                  transparency and sustainability, so you can feel confident
                  that you’re making choices that benefit not only yourself but
                  also the planet.
                </p>
                <p className="mt-4">
                  Join the thousands who trust Holistic Health Haven for their
                  wellness journey. From natural skincare to herbal supplements,
                  our products empower you to take charge of your health and
                  embrace a more balanced, harmonious way of living. Together,
                  let’s create a world where well-being and sustainability go
                  hand in hand.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-t-lg border text-white border-neutral-200 dark:border-neutral-600 bg-[#736555]">
            <h2 className="mb-0" id="headingThree">
              <button
                className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white"
                type="button"
                data-twe-collapse-init
                data-twe-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Our Mission
                <span className="ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:rotate-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="!visible hidden"
              data-twe-collapse-item
              aria-labelledby="headingThree"
              data-twe-parent="#accordionExample"
            >
              <div className="px-5 py-4 text-justify">
                <p>
                  At Holistic Health Haven, our mission is to inspire and
                  empower individuals to live healthier, more balanced lives
                  through holistic wellness. We are committed to providing
                  high-quality, natural, and sustainable products that nurture
                  the mind, body, and spirit. By fostering a community rooted in
                  mindfulness, sustainability, and self-care, we aim to create a
                  sanctuary where people can reconnect with nature and
                  prioritize their well-being.
                </p>
                <p className="mt-4">
                  We believe that true wellness comes from living in harmony
                  with ourselves and the world around us. Through our carefully
                  curated offerings, we strive to make holistic living
                  accessible and meaningful for everyone, guiding you on your
                  journey to greater health, vitality, and balance. Together,
                  let’s cultivate a future where wellness and sustainability go
                  hand in hand.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={holisticProductsImg}
            alt="Holistic products"
            className="w-full max-w-sm rounded-lg shadow-none mt-12 object-cover transition-shadow duration-500 ease-in-out hover:shadow-4-strong"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
