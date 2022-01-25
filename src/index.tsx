import { useState } from "react";

import { Axis, Align, MarqueeProps, MarqueeComponentProps } from "./types";
import Animation from "./animation";

const Marquee = ({
  axis,
  reverse,
  align,
  background,
  duration,
  height,
  pauseOnHover,
  width,
  className,
  children,
}: MarqueeComponentProps) => {
  const [animate, setAnimate] = useState<"running" | "paused">("running");

  const offsetValues: [-1, 0, 1] = [-1, 0, 1];

  return (
    <div
      className={className}
      onMouseEnter={() => pauseOnHover && setAnimate("paused")}
      onMouseLeave={() => pauseOnHover && setAnimate("running")}
      style={{
        display: "flex",
        overflow: "hidden",
        alignItems: "center",
        position: "relative",
        backgroundColor: background ?? "transparent",
        height: height ?? "5rem",
        width: width ?? "100%",
      }}
    >
      {offsetValues.map((offset) => (
        <span
          key={offset}
          style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            position: "absolute",
            animation: `slide${offset} ${duration ?? 5000}ms linear infinite`,
            animationPlayState: animate ?? "running",
            minWidth: "100%",
          }}
        >
          <Animation reverse={reverse} offset={offset} axis={axis} />

          <div
            style={{
              width: "100%",
              height: "100%",
              whiteSpace: "nowrap",
              display: "flex",
              overflow: "hidden",
              justifyContent: "space-around",
              flexDirection:
                axis === "X"
                  ? reverse
                    ? "row-reverse"
                    : "row"
                  : axis === "Y"
                  ? reverse
                    ? "column-reverse"
                    : "column"
                  : "row",
              alignItems: align === "center" ? "center" : `flex-${align}`,
            }}
          >
            {children}
          </div>
        </span>
      ))}
    </div>
  );
};

export default Marquee;
export { Marquee, MarqueeProps, Axis, Align };
