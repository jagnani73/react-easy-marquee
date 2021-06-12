import { Fragment, useState } from "react";

import { MarqueeProps } from "./types";
import { Animation } from "./";

const Marquee = ({
  axis,
  reverse,
  align,
  background,
  duration,
  height,
  pauseOnHover,
  width,
  children,
}: MarqueeProps) => {
  const [animate, setAnimate] = useState<"running" | "paused">("running");

  const offsetValues: [-1, 0, 1] = [-1, 0, 1];

  return (
    <div
      onMouseEnter={() => pauseOnHover && setAnimate("paused")}
      onMouseLeave={() => pauseOnHover && setAnimate("running")}
      style={{
        display: "flex",
        overflow: "hidden",
        position: "relative",
        backgroundColor: background || "transparent",
        height: height || "5rem",
        width: width || "100%",
      }}
    >
      {offsetValues.map((offset) => (
        <>
          <Animation reverse={reverse} offset={offset} axis={axis} />

          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              display: "flex",
              overflow: "hidden",
              justifyContent: "space-around",
              animation: `slide${offset} ${duration || 5000}ms linear infinite`,
              animationPlayState: animate || "running",
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
              alignItems:
                align === "end" || align === "start"
                  ? `flex-${align}`
                  : "center",
            }}
          >
            {children.map((node, index) => (
              <Fragment key={index}>{node}</Fragment>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Marquee;
