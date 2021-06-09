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
      <Animation reverse={reverse} />

      {offsetValues.map((offset) => (
        <div
          key={offset}
          style={{
            animation: `${
              offset === -1
                ? `slideNegative`
                : offset === 0
                ? `slideAbsolute`
                : `slidePositive`
            } ${duration}ms linear infinite`,
            display: "inline-block",
            whiteSpace: "nowrap",
            overflow: "hidden",
            position: "absolute",
          }}
        >
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
