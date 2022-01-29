<template>
  <div :class="wrapperClasses" :style="`padding-top: ${height}`">
    <picture>
      <img
        :class="imageClasses"
        :src="props.image.url"
        :alt="props.image.title"
        :height="props.image.height"
        :width="props.image.width"
        ref="defaultImage"
        loading="lazy"
      />
    </picture>
  </div>
</template>

<script setup lang="ts">
// Vue
import { ref, computed, onMounted } from '@composition';

// Types
import type { ComputedRef, Ref } from '@composition';
import type { PropImage } from './BaseImage.types';

// Constants
import { PropKeys } from './BaseImage.constants';

// Styles
// @ts-ignore
import styles from '@whirli-local/components/BaseImage/BaseImage.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BaseImage.config';

const ComponentStyles = ConfigStyles;

// @ts-ignore
const props = defineProps(ConfigProps);

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const wrapperClasses = [styles.image__wrapper, ...makeClasses(ComponentStyles, ConfigProps, props, styles)];
const imageClasses = [styles.image];

// Component specific

const defaultImage = ref(null) as Ref<HTMLElement | null>;

const height: ComputedRef<string> = computed(() => {
  const percentage =
    (parseInt((props[PropKeys.IMAGE] as unknown as PropImage).height) /
      parseInt((props[PropKeys.IMAGE] as unknown as PropImage).width)) *
    100;
  return `${percentage}%`;
});

const loadImage: () => void = (): void => {
  (defaultImage.value as unknown as HTMLElement).addEventListener('load', () => {
    (defaultImage.value as unknown as HTMLElement).setAttribute('loaded', 'true');
  });
};

onMounted((): void => {
  loadImage();
});
</script>
