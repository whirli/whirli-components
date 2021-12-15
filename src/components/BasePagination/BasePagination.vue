<template>
  <nav :class="wrapperClasses">
    <BaseGrid>
      <BaseRow justify="between" align="center">
        <BaseIconButton
          tag="a"
          icon="ArrowCenter"
          :href="previousPageUrl"
          @click="goToPreviousPage()"
          backdrop="circle"
        />
        <BaseList direction="row">
          <BaseListItem v-for="pageNumber in getPageNumbers" :key="`page-number-${pageNumber}`">
            <BasePageNumber
              :disabled="props.busy"
              :page-number="pageNumber"
              @page-number:click="goToPage(pageNumber)"
            />
          </BaseListItem>
        </BaseList>
        <BaseIconButton
          tag="a"
          icon="ArrowCenter"
          :href="nextPageUrl"
          @click="goToNextPage()"
          backdrop="circle"
        />
      </BaseRow>
    </BaseGrid>
  </nav>
</template>

<script setup="props" lang="ts">
// Vue
import { computed, defineProps, defineEmits } from 'vue';
import type { ComputedRef } from 'vue';
import { useRoute } from 'vue-router';

const Route = useRoute();
const Emit = defineEmits(['pagination:go-to', 'pagination:next', 'pagination:previous']);

// Styles
import styles from '@whirli-local/components/BasePagination/BasePagination.module.scss';

// Data
import { ConfigStyles, ConfigProps } from './BasePagination.config';

// Types
import {
  ComponentStyles as ComponentStylesInterface,
  ComponentProps as ComponentPropsInterface,
} from '../../@types/components';

// Components
import BaseGrid from '../BaseGrid/BaseGrid.vue';
import BaseRow from '../BaseRow/BaseRow.vue';
import BasePageNumber from '../BasePageNumber/BasePageNumber.vue';
import BaseIconButton from '../BaseIconButton/BaseIconButton.vue';
import BaseList from '../BaseList/BaseList.vue';
import BaseListItem from '../BaseListItem/BaseListItem.vue';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: ComponentPropsInterface = defineProps(ConfigProps);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const wrapperClasses = [styles.pagination, ...makeClasses(ComponentStyles, props, styles)];

function goToPage(page: number) {
  if (page < props.firstPage || page > props.lastPage) return;
  Emit('pagination:go-to', page);
}

function goToNextPage() {
  if (props.currentPage === props.lastPage) return;
  Emit('pagination:next');
}

function goToPreviousPage() {
  if (props.currentPage === props.firstPage) return;
  Emit('pagination:previous');
}

function isCurrentPage(number: number): boolean {
  return number === props.currentPage;
}

const previousPageUrl: ComputedRef<string | boolean> = computed(() => {
  const previousPageNumber: number = (props.currentPage as number) - 1;
  return previousPageNumber < 1 ? false : `${Route.path}?page=${previousPageNumber}`;
});

const nextPageUrl: ComputedRef<string | boolean> = computed(() => {
  const nextPageNumber: number = (props.currentPage as number) + 1;
  return nextPageNumber > props.lastPage ? false : `${Route.path}?page=${nextPageNumber}`;
});

const getPageNumbers: ComputedRef<number[]> = computed(() => {
  const lowerBound = Math.max(2, (props.currentPage as number) - (props.delta as number));
  const upperBound = Math.min(
    (props.lastPage as number) - 1,
    (props.currentPage as number) + (props.delta as number)
  );

  const range = [];
  for (let pageNumber = lowerBound; pageNumber <= upperBound; pageNumber += 1) {
    range.push(pageNumber);
  }

  range.unshift(1);

  if (props.lastPage !== 1) {
    range.push(props.lastPage);
  }

  return range as number[];
});
</script>
