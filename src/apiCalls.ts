import holisticProductData from "./mockData";

const getHolisticProducts = () => {
  return Promise.resolve({
    json: () => Promise.resolve(holisticProductData),
    ok: true,
  });
};

export { getHolisticProducts };
