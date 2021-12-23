/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from '@composition'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.scss' {
  const content: {[className: string]: string};
  export default content;
}

declare module '*.scss?module' {
  const content: {[className: string]: string};
  export default content;
}
