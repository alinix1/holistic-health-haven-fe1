import type React from "react";
import anime from "animejs";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const GRID_WIDTH = 10;
const GRID_HEIGHT = 15;

const DotGrid = (): JSX.Element => {
  const handleDotClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    const target = event.currentTarget as HTMLDivElement;
    const { index } = target.dataset;

    if (!index) return;
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
        from: parseInt(index, 10),
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
        </div>,
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
      <h2 className="text-black text-3xl font-inter font-bold">
        Sorry, this URL does not exist.
      </h2>
      <Link to="/" className="bottom-0 left-0">
        <Button className="mt-4 md:mt-0 lowercase">Home</Button>
      </Link>
      <div className="pb-4">
        <p className="text-black text-md font-normal font-inter">
          In the meantime, click on the animation below.
        </p>
      </div>
    </div>
  );
};

const WaterDropGrid = () => {
  return (
    <div className="relative grid place-content-center bg-[#F1EDE5] px-8 py-12">
      <ErrorMessage />
      <DotGrid />
    </div>
  );
};

export default WaterDropGrid;
