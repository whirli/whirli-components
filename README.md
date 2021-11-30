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
While still under heavy development, the package is not in npm, it will need to be copied.

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

#### Copy the local config files
The the following command from your terminal

`cp -R node_modules/@whirli-components/whirli ./`

#### Create the local config
@todo, this shouls happen automatically when pulling the components

In the whirli folder, create a `config.ts` file and import the relative configs

```
import FirstComponent from './FirstComponent/FirstComponent.config'
export default {
    FirstComponent
}
```
