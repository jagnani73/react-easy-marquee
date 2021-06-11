export interface AnimationProps {
  axis?: "X" | "Y";
  reverse?: boolean;
  offset: -1 | 0 | 1;
}

export interface MarqueeProps extends AnimationProps {
  align?: "start" | "end";
  background?: string;
  duration?: number;
  height?: string | number;
  width?: string | number;
  children: React.ReactNodeArray;
}
