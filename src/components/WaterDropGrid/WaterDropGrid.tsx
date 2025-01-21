import React from "react";
import anime from "animejs";
import { Link } from "react-router-dom";

const GRID_WIDTH = 20;
const GRID_HEIGHT = 25;

const WaterDropGrid = () => {
  return (
    <div className="relative grid place-content-center bg-[#402B18] px-8 py-12">
      <ErrorMessage />
      <DotGrid />
    </div>
  );
};

const DotGrid = () => {
  const handleDotClick = (event: any) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: event.target.dataset.index,
      }),
    });
  };
  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-custom-light to-custom-dark opacity-50 group-hover:from-indigo-600 group-hover:to-white" />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid gap-2"
    >
      {dots}
    </div>
  );
};

const ErrorMessage = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-8">
      <h2 className="text-white text-3xl font-bold">
        Sorry, this URL does not exist.
      </h2>
      <Link to="/" className="bottom-0 left-0">
        <button
          type="button"
          className="inline-block rounded bg-[#5A7340] px-8 py-2 text-md font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-[#8BA663]-accent-300 hover:shadow-primary-2 focus:bg-[#8BA663]-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-[#8BA663]-600 active:shadow-[#8BA663]-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        >
          home
        </button>
      </Link>
      <p className="text-white text-md font-normal">
        In the meantime, click on the animation below.
      </p>
    </div>
  );
};

export default WaterDropGrid;
