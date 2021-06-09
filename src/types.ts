export interface AnimationProps {
  reverse?: boolean;
}

export interface MarqueeProps extends AnimationProps {
  duration: number;
  children: React.ReactNodeArray;
}
