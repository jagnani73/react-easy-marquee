import { AnimationProps } from "./types";

const Animation = ({ reverse, offset }: AnimationProps) => {
  return (
    <style>
      {`
        @keyframes slide${offset} {
          from {
            transform: translateX(${offset * 100}%);
          }
          to {
            transform: translateX(${(reverse ? -100 : 100) + 100 * offset}%);
          }
        }
      `}
    </style>
  );
};

export default Animation;
