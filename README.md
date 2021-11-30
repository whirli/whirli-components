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

Create a plugin, import and install desired plugins

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
