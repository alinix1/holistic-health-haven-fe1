let holisticProductData = [
  {
    id: 1,
    product_type: ["immune system support", "anti-inflammatory"],
    product_title: "Vitamin C",
    img: "https://www.verywellhealth.com/thmb/gCoBqPnmydeTKB9XC6le1JmNAlQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-benefits-of-vitamin-c-supplements-89083-primary-recirc-ec07af56471e41caa683c0d7ed67c6b2.jpg",
    product_description:
      "describe overall product, quantity, recommended dose per serving, potential side effects",
    price: 24.99,
  },
  {
    id: 2,
    product_type: ["anti-inflammatory", "de-stress", "muscle relaxation"],
    product_title: "CBD salve",
    img: "https://www.shutterstock.com/image-photo/hemp-salve-joints-muscles-relaxing-600nw-1793404621.jpg",
    product_description:
      "describe overall product, quantity, recommended dose per serving, potential side effects",
    price: 30.0,
  },
  {
    id: 3,
    product_type: ["de-stress", "muscle relaxation"],
    product_title: "Epsom salts",
    img: "https://hips.hearstapps.com/hmg-prod/images/handmade-lavender-soap-and-salt-royalty-free-image-1625928611.jpg?crop=0.736xw:1.00xh;0.0609xw,0&resize=640:*",
    product_description:
      "describe overall product, quantity, recommended dose per serving, potential side effects",
    price: 15.99,
  },
  {
    id: 4,
    product_type: ["heart health", "muscle relaxation"],
    product_title: "Potassium",
    img: "https://ucmscdn.healthgrades.com/33/d3/b6b115594a9d892a7a0b212384bf/gettyimages-185061828.jpg",
    product_description:
      "describe overall product, quantity, recommended dose per serving, potential side effects",
    price: 10.5,
  },
];

let reviewsData = [
  {
    id: 1,
    holistic_product_id: 1,
    user_name: "Maria",
    user_review:
      "This Vitamin C supplement has been a game-changer for me. I've experienced a significant boost in my immune system, and I appreciate the added energy it brings to my daily routine.",
  },
  {
    id: 2,
    holistic_product_id: 2,
    user_name: "Pierre",
    user_review:
      "This CBD salve is a lifesaver for soothing my muscle soreness and promoting relaxation. Its fast-acting formula and calming scent make it a must-have in my daily wellness routine.",
  },
  {
    id: 3,
    holistic_product_id: 3,
    user_name: "Carlos",
    user_review:
      "This Epsom salt bath product is my go-to for relaxation and muscle relief. It transforms my bath into a soothing oasis, alleviating tension and leaving me feeling refreshed and rejuvenated.",
  },
  {
    id: 4,
    holistic_product_id: 4,
    user_name: "Brenna",
    user_review:
      "This potassium supplement has been instrumental in maintaining my electrolyte balance and preventing muscle cramps. I appreciate its effectiveness and the positive impact it has had on my overall well-being.",
  },
];

export { holisticProductData, reviewsData };
