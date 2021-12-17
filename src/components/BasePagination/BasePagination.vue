<template>
  <nav :class="wrapperClasses">
    <BaseGrid>
      <BaseRow justify="between" align="center">
        <BaseIconButton
          tag="a"
          icon="ArrowCenter"
          :href="previousPageUrl"
          @click.prevent="goToPreviousPage()"
          backdrop="circle"
          rotate="90"
          ref="previousButton"
          :is-disabled="isFirstPage"
          aria-label="Previous page"
        />
        <BaseList direction="row" class="from-tablet">
          <BaseListItem v-for="(option, index) in getPageNumbers" :key="`page-number-${index}`">
            <BaseText v-if="option.isPlaceholder">{{ props.placeholder }}</BaseText>
            <BasePageNumber
              v-else-if="option"
              :is-disabled="props.busy"
              :page-number="option.number"
              @page-number:click="goToPage(option.number ?? 1)"
            />
          </BaseListItem>
        </BaseList>
        <BaseText ref="pageCount" class="until-tablet">
          Page {{ currentPage }} of {{ props.lastPage }}
        </BaseText>
        <BaseIconButton
          tag="a"
          icon="ArrowCenter"
          :href="nextPageUrl"
          @click.prevent="goToNextPage()"
          backdrop="circle"
          rotate="270"
          ref="nextButton"
          :is-disabled="isLastPage"
          aria-label="Next page"
        />
      </BaseRow>
      <BaseRow class="until-tablet">
        <BaseFormSelect name="pagination" label="Jump to" @change="goToPage($event.target.value)">
          <option
            v-for="(number, index) in props.lastPage"
            :key="index"
            :value="number"
            :selected="number === currentPage"
          >
            {{ number }}
          </option>
        </BaseFormSelect>
      </BaseRow>
    </BaseGrid>
  </nav>
</template>

<script setup lang="ts">
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
import { ComponentStyles as ComponentStylesInterface } from '../../@types/components';
import { Props } from '../../@types/props';
import type { PaginationOption } from '../../@types/pagination';

// Components
import BaseGrid from '../BaseGrid/BaseGrid.vue';
import BaseRow from '../BaseRow/BaseRow.vue';
import BasePageNumber from '../BasePageNumber/BasePageNumber.vue';
import BaseIconButton from '../BaseIconButton/BaseIconButton.vue';
import BaseList from '../BaseList/BaseList.vue';
import BaseListItem from '../BaseListItem/BaseListItem.vue';
import BaseText from '../BaseText/BaseText.vue';
import BaseFormSelect from '../BaseFormSelect/BaseFormSelect.vue';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

const props: Props = defineProps(ConfigProps);

const firstPage = 1;
const currentPage: ComputedRef<number> = computed(() => (Route.query.page ? +Route.query.page : 1));

const isFirstPage: ComputedRef<boolean> = computed(() => currentPage.value === firstPage);
const isLastPage: ComputedRef<boolean> = computed(() => currentPage.value === props.lastPage);

// Classes
import useClasses from '../../@use/class';
const { makeClasses } = useClasses();
const wrapperClasses = [styles.pagination, ...makeClasses(ComponentStyles, props, styles)];

function isCurrentPage(number: number): boolean {
  return number === currentPage.value;
}

function goToPage(page: number) {
  if (page < firstPage || page > props.lastPage) return;
  Emit('pagination:go-to', page);
}

function goToNextPage() {
  if (currentPage.value === props.lastPage) return;
  Emit('pagination:next');
}

function goToPreviousPage() {
  if (currentPage.value === firstPage) return;
  Emit('pagination:previous');
}

const previousPageUrl: ComputedRef<string | boolean> = computed(() => {
  const previousPageNumber: number = currentPage.value - 1;
  return previousPageNumber < 1 ? false : `${Route.path}?page=${previousPageNumber}`;
});

const nextPageUrl: ComputedRef<string | boolean> = computed(() => {
  const nextPageNumber: number = currentPage.value + 1;
  return nextPageNumber > props.lastPage ? false : `${Route.path}?page=${nextPageNumber}`;
});

const getPageNumbers: ComputedRef<PaginationOption[]> = computed(() => {
  const placeholderOption: PaginationOption = { isPlaceholder: true };

  const lowerBound = Math.max(2, currentPage.value - (props.delta as number));
  const upperBound = Math.min((props.lastPage as number) - 1, currentPage.value + (props.delta as number));

  const range = [];
  for (let pageNumber = lowerBound; pageNumber <= upperBound; pageNumber += 1) {
    range.push({ number: pageNumber, isPlaceholder: false, isCurrentPage: isCurrentPage(pageNumber) });
  }

  if (currentPage.value - (props.delta as number) > 2) range.unshift(placeholderOption);

  if (currentPage.value + (props.delta as number) < (props.lastPage as number) - 1)
    range.push(placeholderOption);

  range.unshift({ number: 1, isPlaceholder: false, isCurrentPage: isCurrentPage(1) });

  if (props.lastPage !== 1) {
    range.push({
      number: props.lastPage as number,
      isPlaceholder: false,
      isCurrentPage: isCurrentPage(props.lastPage as number),
    });
  }

  return range;
});
</script>
