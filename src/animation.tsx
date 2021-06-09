import { AnimationProps } from "./types";

const Animation = ({ reverse }: AnimationProps) => {
  return (
    <style>
      {`
        @keyframes slideNegative {
          from {
            transform: translateX(${-1 * 100}%);
          }
          to {
            transform: translateX(${(reverse ? -100 : 100) + 100 * -1}%);
          }
        }

        @keyframes slideAbsolute {
          from {
            transform: translateX(${0 * 100}%);
          }
          to {
            transform: translateX(${(reverse ? -100 : 100) + 100 * 0}%);
          }
        }

        @keyframes slidePositive {
          from {
            transform: translateX(${1 * 100}%);
          }
          to {
            transform: translateX(${(reverse ? -100 : 100) + 100 * 1}%);
          }
        }
      `}
    </style>
  );
};

export default Animation;
