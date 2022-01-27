export type Axis = "X" | "Y";

export type Align = "start" | "center" | "end";

export interface AnimationProps {
  axis?: Axis;
  reverse?: boolean;
  offset: -1 | 0 | 1;
  id: number;
}

export interface MarqueeComponentProps extends Omit<AnimationProps, "offset"> {
  align?: Align;
  background?: string;
  duration?: number;
  height?: string;
  pauseOnHover?: boolean;
  width?: string;
  className?: string;
  children: React.ReactNode;
}

export interface MarqueeProps extends Omit<MarqueeComponentProps, "children"> {}
