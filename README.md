# react-easy-marquee

> A `marquee` component for React using CSS.

<br />

[![NPM](https://img.shields.io/npm/v/react-easy-marquee.svg?style=for-the-badge)](https://npmjs.com/package/react-easy-marquee)
[![NPM](https://img.shields.io/github/stars/jagnani73/react-easy-marquee?style=for-the-badge&color=yellow)](https://npmjs.com/package/react-easy-marquee)
[![NPM](https://img.shields.io/github/issues/jagnani73/react-easy-marquee?style=for-the-badge&color=red)](https://npmjs.com/package/react-easy-marquee)
[![NPM](https://img.shields.io/github/forks/jagnani73/react-easy-marquee?style=for-the-badge&color=green)](https://npmjs.com/package/react-easy-marquee)
[![NPM](https://img.shields.io/github/license/jagnani73/react-easy-marquee?style=for-the-badge&color=purple)](https://npmjs.com/package/react-easy-marquee)
[![NPM](https://img.shields.io/badge/author-jagnani73-green?style=for-the-badge&color=blue)](https://github.com/jagnani73)

<br />

## 💡 Project Description

A highly customisable `marquee` component for React built using CSS. Renders anything given between the tags, be it an image, text or a custom JSX element!

<br />

## 🔧 Installation

```shell
npm install react-easy-marquee
```

or

```shell
yarn add react-easy-marquee
```

<br />

## 📦 Example

A [demo](https://jagnani73.github.io/react-easy-marquee/) is worth a thousand words!

```tsx
import Marquee from "react-easy-marquee";

const Example = () => {
  const images = ["https://picsum.photos/200", "https://picsum.photos/100"];

  return (
    <div>
      <Marquee duration={10000} background="#fafafa" height="250px">
        <h1>I go weee!</h1>

        {images.map((image) => (
          <img src={image} alt="picsum" />
        ))}
      </Marquee>
    </div>
  );
};

export default Example;
```

<br />

## 🖇️ Props

|      Name      |                                   Description                                   |   Type/Values    | Required |    Default    |                           Example                            |
| :------------: | :-----------------------------------------------------------------------------: | :--------------: | :------: | :-----------: | :----------------------------------------------------------: |
|    Children    |                          Component that should animate                          |   JSX Element    |  `true`  |      N/A      |                             N/A                              |
|   Class Name   |                          Extra classes for the marquee                          |      string      | `false`  |      N/A      |                             N/A                              |
|    Duration    | Duration for a loop to run in `ms`<br/>**NOTE**: It changes with the `children` |      number      | `false`  |     5000      |                      `duration={5000}`                       |
|    Reverse     |                            Direction of the marquee                             |     boolean      | `false`  |     false     |                      `reverse={false}`                       |
|   Background   |     Background color of the marquee<br/>Accepts any color format as string      |      string      | `false`  | "transparent" | `background="#fafafa"`<br/>`background="RGB(250, 250, 250)"` |
|     Height     |                              Height of the marquee                              |      string      | `false`  |    "5rem"     |                       `height="5rem"`                        |
|     Width      |                              Width of the marquee                               |      string      | `false`  |    "100%"     |                        `width="100%"`                        |
|      Axis      |                   The axis along which `children` should move                   |    "X" or "Y"    | `false`  |      "X"      |                          `axis="X"`                          |
|     Align      |                 Alignment of the `children` inside the marquee                  | "start" or "end" | `false`  |   "center"    |                        `align="end"`                         |
| Pause On Hover |                  Animation to pause when marquee is on `hover`                  |     boolean      | `false`  |     false     |                    `pauseOnHover={false}`                    |

<br />

## 🚨 Forking this repo

Many people have contacted us asking if they can use this code for their own websites. The answer to that question is usually "yes", with attribution. There are some cases, such as using this code for a business or something that is greater than a personal project, that we may be less comfortable saying yes to. If in doubt, please don't hesitate to ask us.

We value keeping this site open source, but as you all know, _**plagiarism is bad**_. We spent a non-negligible amount of effort developing, designing, and trying to perfect this iteration of our website, and we are proud of it! All we ask is to not claim this effort as your own.

So, feel free to fork this repo. If you do, please just give us proper credit by linking back to this repo, https://github.com/jagnani73/react-easy-marquee. Refer to this handy [quora post](https://www.quora.com/Is-it-bad-to-copy-other-peoples-code) if you're not sure what to do. Thanks!

<br />

## 📜 License

`react-easy-marquee` is available under the MIT license. See the `LICENSE` file for more info.

<br />

## 🤝 Contributing

Please read [`Contributing.md`](https://github.com/jagnani73/react-easy-marquee/blob/main/Contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

<br />

## 💥 Mention

A special thanks to [`Styled Components`](https://github.com/styled-components/styled-components-website) for the inspiration, and [`SneakySensei`](https://github.com/SneakySensei) to introducing me to it.
