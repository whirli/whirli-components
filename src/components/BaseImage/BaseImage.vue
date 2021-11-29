<template>
  <div :class="styles.image__wrapper" :style="`padding-top: ${height}`">
    <picture>
      <img
        :class="styles.image"
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

<script setup="props" lang="ts">
// Vue
import { defineProps, ref, computed, onMounted } from 'vue';

// Types
import type { ComputedRef, Ref } from 'vue';
import type { PropImage } from './BaseImage.types';

// Constants
import { PropKeys } from './BaseImage.constants';

// Styles
import styles from '@whirli/BaseImage/BaseImage.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BaseImage.config';

const ComponentStyles = ConfigStyles;

const props = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const classes = makeClasses(ComponentStyles, props, styles);

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
