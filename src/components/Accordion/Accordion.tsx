import type React from "react";

const Accordion: React.FC = () => {
  return (
    <div id="accordionExample" className="w-full overflow-hidden rounded-lg">
      {/* First Accordion Section */}
      <div className="rounded-t-lg border-2 border-slate-700 bg-[#CCA498] text-black">
        <h2 className="mb-0" id="headingOne">
          <button
            className="font-inter group relative flex w-full items-center rounded-t-lg border-0 bg-[#555D50] px-5 py-4 font-semibold text-[#E8CFC5] transition hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-twe-collapse-collapsed])]:bg-[#D75C0E] [&:not([data-twe-collapse-collapsed])]:text-black"
            type="button"
            data-twe-collapse-init
            data-twe-collapse-collapsed
            data-twe-target="#collapseOne"
            aria-controls="collapseOne"
          >
            How Holistic Health Haven Got Started
            <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
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
          className="!visible hidden"
          data-twe-collapse-item
          data-twe-collapse-show
          aria-labelledby="headingOne"
          data-twe-parent="#accordionExample"
        >
          <div className="px-5 py-4 text-justify font-jakarta">
            <p>
              Holistic Health Haven was founded in 2018 in Denver, CO, born from
              a passion for natural healing and a desire to create a sanctuary
              for holistic wellness. Our founders, inspired by their personal
              experiences with sustainable living and mindfulness, envisioned a
              space where individuals could reconnect with nature and prioritize
              their well-being.
            </p>
            <p className="mt-4">
              What started as a small local initiative in the heart of Denver
              quickly grew into a trusted destination for natural remedies,
              eco-friendly products, and resources for self-care. With a deep
              commitment to empowering individuals to nurture their mind, body,
              and spirit, Holistic Health Haven became a community-driven
              platform celebrating balance, mindfulness, and conscious living.
            </p>
            <p className="mt-4">
              Since 2018, we have been proud to serve as a resource and
              gathering place for those seeking to live in harmony with
              themselves and the environment. Our journey is your journey, and
              we are honored to be part of your path to holistic health.
            </p>
          </div>
        </div>
      </div>

      {/* Second Accordion Section */}
      <div className="-mt-[2px] border-2 border-slate-700 bg-[#CCA498] text-black">
        <h2 className="mb-0" id="headingTwo">
          <button
            className="font-inter group relative flex w-full items-center border-0 bg-[#555D50] px-5 py-4 font-semibold text-[#E8CFC5] transition hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-twe-collapse-collapsed])]:bg-[#D75C0E] [&:not([data-twe-collapse-collapsed])]:text-black"
            type="button"
            data-twe-collapse-init
            data-twe-collapse-collapsed
            data-twe-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Why should I use Holistic Health Haven's products?
            <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
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
          <div className="px-5 py-4 text-justify font-jakarta">
            <p>
              Holistic Health Haven's products are carefully curated to promote
              overall well-being while staying true to nature. We believe that
              what you put into your body and use in your daily life should
              align with your health goals and values. Our products are crafted
              with high-quality, sustainably sourced ingredients, ensuring they
              are safe, effective, and eco-friendly.
            </p>
            <p className="mt-4">
              When you choose Holistic Health Haven, you’re not just purchasing
              a product—you’re investing in a healthier lifestyle. Whether it’s
              our organic remedies, mindfulness tools, or eco-conscious
              essentials, every item is designed to nurture your mind, body, and
              spirit. We prioritize transparency and sustainability, so you can
              feel confident that you’re making choices that benefit not only
              yourself but also the planet.
            </p>
            <p className="mt-4">
              Join the thousands who trust Holistic Health Haven for their
              wellness journey. From natural skincare to herbal supplements, our
              products empower you to take charge of your health and embrace a
              more balanced, harmonious way of living. Together, let’s create a
              world where well-being and sustainability go hand in hand.
            </p>
          </div>
        </div>
      </div>

      {/* Third Accordion Section */}
      <div className="-mt-[2px] rounded-b-lg border-2 border-slate-700 bg-[#CCA498] text-black">
        <h2 className="mb-0" id="headingThree">
          <button
            className="font-inter group relative flex w-full items-center border-0 bg-[#555D50] px-5 py-4 font-semibold text-[#E8CFC5] transition hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-twe-collapse-collapsed])]:bg-[#D75C0E] [&:not([data-twe-collapse-collapsed])]:text-black"
            type="button"
            data-twe-collapse-init
            data-twe-collapse-collapsed
            data-twe-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Our Mission
            <span className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
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
          <div className="px-5 py-4 text-justify font-jakarta">
            <p>
              At Holistic Health Haven, our mission is to inspire and empower
              individuals to live healthier, more balanced lives through
              holistic wellness. We are committed to providing high-quality,
              natural, and sustainable products that nurture the mind, body, and
              spirit. By fostering a community rooted in mindfulness,
              sustainability, and self-care, we aim to create a sanctuary where
              people can reconnect with nature and prioritize their well-being.
            </p>
            <p className="mt-4">
              We believe that true wellness comes from living in harmony with
              ourselves and the world around us. Through our carefully curated
              offerings, we strive to make holistic living accessible and
              meaningful for everyone, guiding you on your journey to greater
              health, vitality, and balance. Together, let’s cultivate a future
              where wellness and sustainability go hand in hand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
