import React from "react";
import { AnimationProps } from "./animation";

export interface MarqueeProps extends AnimationProps {
  align?: "start" | "end";
  background?: string;
  duration?: number;
  height?: string;
  pauseOnHover?: boolean;
  width?: string;
  className?: string;
  children: React.ReactChild[];
}
