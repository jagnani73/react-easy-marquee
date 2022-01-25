import { Fragment, useState } from "react";

import Marquee from "react-easy-marquee";

const Example = () => {
  const [marqueeProps, setMarqueeProps] = useState({
    duration: 5000,
    background: "#00DEFB",
    height: "220px",
    width: "100%",
    axis: "X",
    align: "center",
    pauseOnHover: false,
    reverse: false,
  });
  const images = ["https://picsum.photos/200", "https://picsum.photos/100"];

  return (
    <main>
      <div>
        <h1 className="heading">
          <a
            href="https://npmjs.com/package/react-easy-marquee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>REACT-EASY-MARQUEE</span>{" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 12 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"
              />
            </svg>
          </a>
        </h1>

        <div className="marquee">
          <Marquee {...marqueeProps}>
            <h1>I go weee!</h1>

            {images.map((image) => (
              <img key={image} src={image} alt="picsum" />
            ))}
          </Marquee>
        </div>

        <div className="wrapper">
          <pre className="codeblock">
            <code>
              <span className="text-blue">{`<Marquee`}</span>
              {Object.entries(marqueeProps).map((prop) => (
                <Fragment key={prop[0]}>
                  <br />
                  {"  "}
                  <span>{prop[0]}=</span>
                  <span className="text-green">
                    {typeof prop[1] === "string" ? `"` : `{`}
                    {`${prop[1]}`}
                    {typeof prop[1] === "string" ? `"` : `}`}
                  </span>
                </Fragment>
              ))}
              <br />
              <span className="text-blue">{`>`}</span>
              <br />
              {`  `}
              <span>{`{children}`}</span>
              <br />
              <span className="text-blue">{`</Marquee>`}</span>
            </code>
          </pre>

          <div className="settings">
            <div>
              <div>
                <label htmlFor="duration">Duration</label>
                <input
                  type="number"
                  name="duration"
                  value={marqueeProps["duration"]}
                  onChange={(e) =>
                    setMarqueeProps({
                      ...marqueeProps,
                      duration: +e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label htmlFor="background">Background</label>
                <input
                  type="text"
                  name="background"
                  value={marqueeProps["background"]}
                  onChange={(e) =>
                    setMarqueeProps({
                      ...marqueeProps,
                      background: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="height">Height</label>
                <input
                  type="text"
                  name="height"
                  value={marqueeProps["height"]}
                  onChange={(e) =>
                    setMarqueeProps({ ...marqueeProps, height: e.target.value })
                  }
                />
              </div>

              <div>
                <label htmlFor="width">Width</label>
                <input
                  type="text"
                  name="width"
                  value={marqueeProps["width"]}
                  onChange={(e) =>
                    setMarqueeProps({ ...marqueeProps, width: e.target.value })
                  }
                />
              </div>
            </div>

            <section>
              <div>
                <div>
                  <label htmlFor="axis">Axis</label>
                  <select
                    name="axis"
                    value={marqueeProps["axis"]}
                    onChange={(e) =>
                      setMarqueeProps({ ...marqueeProps, axis: e.target.value })
                    }
                  >
                    <option value="X">X</option>
                    <option value="Y">Y</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="align">Align</label>
                  <select
                    name=""
                    value={marqueeProps["align"]}
                    onChange={(e) =>
                      setMarqueeProps({
                        ...marqueeProps,
                        align: e.target.value,
                      })
                    }
                  >
                    <option value="center">Center</option>
                    <option value="start">Start</option>
                    <option value="end">End</option>
                  </select>
                </div>
              </div>

              <div>
                <div>
                  <label htmlFor="pauseOnHover">Reverse</label>
                  <input
                    type="checkbox"
                    name="reverse"
                    checked={marqueeProps["reverse"]}
                    onChange={(e) =>
                      setMarqueeProps({
                        ...marqueeProps,
                        reverse: !marqueeProps["reverse"],
                      })
                    }
                  />
                </div>

                <div>
                  <label htmlFor="pauseOnHover">Pause On Hover</label>
                  <input
                    type="checkbox"
                    name="pauseOnHover"
                    checked={marqueeProps["pauseOnHover"]}
                    onChange={(e) =>
                      setMarqueeProps({
                        ...marqueeProps,
                        pauseOnHover: !marqueeProps["pauseOnHover"],
                      })
                    }
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <footer>
        <p>
          View on{" "}
          <a
            href="http://github.com/jagnani73/react-easy-marquee"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <span>|</span>
        <p>
          Rendered on ☕ by{" "}
          <a
            href="https://github.com/jagnani73"
            target="_blank"
            rel="noopener noreferrer"
          >
            jagnani73
          </a>
        </p>
      </footer>
    </main>
  );
};

export default Example;
