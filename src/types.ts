export interface AnimationProps {
  reverse?: boolean;
  offset: -1 | 0 | 1;
}

export interface MarqueeProps extends AnimationProps {
  duration: number;
  children: React.ReactNodeArray;
}
