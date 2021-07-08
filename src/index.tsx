import { useState } from "react";

import { MarqueeProps } from "./types";
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
}: Omit<MarqueeProps, "offset">) => {
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
        backgroundColor: background || "transparent",
        height: height || "5rem",
        width: width || "100%",
      }}
    >
      {offsetValues.map((offset) => (
        <section
          key={offset}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            position: "absolute",
            alignItems: "center",
            display: "flex",
            minWidth: "100%",
            minHeight: "100%",
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
            {children}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Marquee;
