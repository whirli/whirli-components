import { join } from 'pathe';
import { defineNuxtModule } from '@nuxt/kit-edge';

export default defineNuxtModule({
  hooks: {
    'components:dirs'(dirs) {
      // Add ./components dir to the list
      dirs.push({
        path: join(__dirname, 'src/components'),
        prefix: '',
      });
    },
  },
});
