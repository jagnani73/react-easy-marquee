import { MarqueeProps as Marquee } from "./types";
import { Animation } from "./";

const Marquee = ({ reverse, duration, children }: Marquee) => {
  const offsetValues: [-1, 0, 1] = [-1, 0, 1];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        height: "360px",
      }}
    >
      {offsetValues.map((offset) => (
        <div
          key={offset}
          style={{
            animation: `slide${offset} ${duration}ms linear infinite`,
            display: "inline-block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            position: "absolute",
          }}
        >
          <Animation reverse={reverse} offset={offset} />

          <section
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              display: "flex",
              flexDirection: reverse ? "row" : "row-reverse",
            }}
          >
            {children.map((node, index) => (
              <span key={index}>{node}</span>
            ))}
          </section>
        </div>
      ))}
    </div>
  );
};

export default Marquee;
