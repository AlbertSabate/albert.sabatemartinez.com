declare module '*.css?url' {
  type Css = string;
  const css: Css;
  export = css;
}
