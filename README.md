## typescript

- npm i typescript -D
- tsc --init



## packages

**webpack**

- webpack
- webpack-cli
- webpack-dev-server

**babel**

- @babel/core 
- @babel/preset-env
- @babel/preset-react
- @babel/preset-typescript

**loader**

- babel-loader
- ts-loader
- style-loader
- css-loader
- sass-loader
- @svgr/webpack
- url-loader

**webpack plugin**

- mini-css-extract-plugin (split css from js)
- copy-webpack-plugin (copy files in public to dist)
- html-webpack-plugin (auto generate script & link tag)


## .babelrc

```json
{
  "presets": [
    "@babel/preset-env" /* convert js flavor */,
    "@babel/preset-typescript" /* typescript support */,
    ["@babel/preset-react", { "runtime": "automatic" }] /* jsx transform */
  ]
}
```

## custom.d.ts

```ts
declare module '*.css';
declare module '*.scss';
declare module '*.jpg';

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}
```