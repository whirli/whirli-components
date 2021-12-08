# whirli-components-package

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

## Install
Install the package dependencies in package.json:
`"@whirli/components": "https://github.com/whirli/whirli-constants.git#master"`

### Vue

#### Create a plugin

Create a plugin, import and install desired plugins.
@todo, this should be automatic, potentially `import * as WhirliComponents from '@whirli-components'` or similar.

```/plugins/whirli-components.ts
import FirstComponent from "@whirli-components/src/components/FirstComponent/FirstComponent.vue";

export default {
    install: (app: any, options: any) => {
        app.component("FirstComponent", FirstComponent);
    },
};
```

#### Register plugin

```main.ts
import WhirliComponents from '../plugins/WhirliComponents';
import WhirliConfig from '../whirli/config';

app.use(WhirliComponents, WhirliConfig);
```

### Nuxt

#### Register plugin

Add plugin to nuxt.config.ts buildModules

```ts
buildModules: [
  /**/
  '@whirli/components/nuxt'
]
```

### Vue / Nuxt

#### Copy the local config files
The the following command from your terminal

`cp -R node_modules/@whirli/components/whirli ./`


#### Add SCSS to your shim file

```shims.vue.d.ts
declare module '*.scss' {
  const content: {[className: string]: string};
  export default content;
}
```

#### Add package alias

##### nuxt.config.ts
```ts
'@whirli-local': resolve(__dirname, './whirli'),
'@whirli-components': resolve(__dirname, './node_modules/@whirli/components'),
```

##### tsconfig.json
```ts
"paths": {
    "@whirli-local": [
      "./whirli"
    ],
    "@whirli-components/*": [
      "node_modules/@whirli/components/*"
    ],
  }
```

##### jest.config.js
```js
module.exports = {
    moduleFileExtensions: ['js', 'ts', 'scss', 'vue'],
    /**/
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.tsx?$': 'ts-jest',
    },
    /**/
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!@whirli.*)'],
    moduleNameMapper: {
      '^@whirli-components(.*)$': '<rootDir>/node_modules/@whirli/components/$1',
      '^@whirli-local(.*)$': '<rootDir>/whirli/$1',
    },
};
```

