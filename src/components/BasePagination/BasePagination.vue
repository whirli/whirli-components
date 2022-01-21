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
              @page-number:click="goToPage(option.number)"
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
import { computed, defineEmits } from '@composition';
import type { ComputedRef } from '@composition';
import { useRoute } from 'vue-router';

const Route = useRoute();
// @ts-ignore
const emit = defineEmits(['pagination:go-to', 'pagination:next', 'pagination:previous']);

// Styles
// @ts-ignore
import styles from '@whirli-local/components/BasePagination/BasePagination.module.scss?module';

// Data
import { ConfigStyles, ConfigProps } from './BasePagination.config';

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';
import type { PaginationOption } from '@whirli-components/@types/pagination';

// Components
import BaseGrid from '@whirli-components/components/BaseGrid/BaseGrid.vue';
import BaseRow from '@whirli-components/components/BaseRow/BaseRow.vue';
import BasePageNumber from '@whirli-components/components/BasePageNumber/BasePageNumber.vue';
import BaseIconButton from '@whirli-components/components/BaseIconButton/BaseIconButton.vue';
import BaseList from '@whirli-components/components/BaseList/BaseList.vue';
import BaseListItem from '@whirli-components/components/BaseListItem/BaseListItem.vue';
import BaseText from '@whirli-components/components/BaseText/BaseText.vue';
import BaseFormSelect from '@whirli-components/components/BaseFormSelect/BaseFormSelect.vue';

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

// @ts-ignore
const props: Props = defineProps(ConfigProps);

const firstPage = 1;
const currentPage: ComputedRef<number> = computed(() => (Route.query.page ? +Route.query.page : 1));

const isFirstPage: ComputedRef<boolean> = computed(() => currentPage.value === firstPage);
const isLastPage: ComputedRef<boolean> = computed(() => currentPage.value === props.lastPage);

// Classes
import useClasses from '@whirli-components/@use/class';
const { makeClasses } = useClasses();
const wrapperClasses = [styles.pagination, ...makeClasses(ComponentStyles, props, styles)];

function isCurrentPage(number: number): boolean {
  return number === currentPage.value;
}

function goToPage(page: number) {
  if (page < firstPage || page > props.lastPage) return;
  emit('pagination:go-to', page);
}

function goToNextPage() {
  if (currentPage.value === props.lastPage) return;
  emit('pagination:next');
}

function goToPreviousPage() {
  if (currentPage.value === firstPage) return;
  emit('pagination:previous');
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
  const placeholderOption: PaginationOption = { number: 0, isPlaceholder: true };

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
