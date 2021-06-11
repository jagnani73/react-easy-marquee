import { Fragment } from "react";

import { MarqueeProps } from "./types";
import { Animation } from "./";

const Marquee = ({
  axis,
  reverse,
  align,
  background,
  duration,
  height,
  width,
  children,
}: MarqueeProps) => {
  const offsetValues: [-1, 0, 1] = [-1, 0, 1];

  return (
    <div
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
