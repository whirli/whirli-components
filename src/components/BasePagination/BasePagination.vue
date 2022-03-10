<template>
  <nav :class="wrapperClasses">
    <BaseGrid>
      <BaseRow justify="between" align="center">
        <BaseIconButton
          ref="previousButton"
          tag="a"
          icon="ArrowCenter"
          :href="previousPageUrl"
          backdrop="circle"
          size="lg"
          rotate="90"
          :is-disabled="isFirstPage"
          aria-label="Previous page"
          @click.native.prevent="goToPreviousPage()"
        />
        <BaseList direction="row" :class="styles['pages-list']">
          <BaseListItem v-for="(option, index) in getPageNumbers" :key="`page-number-${index}`">
            <BaseText v-if="option.isPlaceholder">{{ props.placeholder }}</BaseText>
            <BasePageNumber
              v-else-if="option"
              :is-disabled="props.busy"
              :current-page="props.currentPage"
              :page-number="option.number"
              @page-number:click="goToPage(option.number)"
            />
          </BaseListItem>
        </BaseList>
        <BaseText ref="pageCount" :class="styles['pages-of']">
          Page {{ props.currentPage }} of {{ props.lastPage }}
        </BaseText>
        <BaseIconButton
          ref="nextButton"
          tag="a"
          icon="ArrowCenter"
          :href="nextPageUrl"
          backdrop="circle"
          size="lg"
          rotate="270"
          :is-disabled="isLastPage"
          aria-label="Next page"
          @click.native.prevent="goToNextPage()"
        />
      </BaseRow>
      <BaseRow :class="styles['pages-select']">
        <BaseFormSelect
          name="pagination"
          label="Jump to"
          :value="props.currentPage"
          :has-dropdown-message="false"
          @change="goToPage($event.target.value)"
        >
          <BaseFormSelectOption
            v-for="(number, index) in props.lastPage"
            :key="index"
            :value="number"
            :selected="props.currentPage"
          >
            {{ number }}
          </BaseFormSelectOption>
        </BaseFormSelect>
      </BaseRow>
    </BaseGrid>
  </nav>
</template>

<script setup lang="ts">
// Vue
import { computed, ComputedRef, defineEmits } from '@composition';

// Styles
// @ts-ignore
import styles from '@whirli-local/components/BasePagination/BasePagination.module.scss?module';

// Data

// Types
import { ComponentStyles as ComponentStylesInterface } from '@whirli-components/@types/components';
import { Props } from '@whirli-components/@types/props';
import { PaginationOption } from '@whirli-components/@types/pagination';

// Components
// @ts-ignore
import BaseGrid from '@whirli-components/components/BaseGrid/BaseGrid.vue';
// @ts-ignore
import BaseRow from '@whirli-components/components/BaseRow/BaseRow.vue';
// @ts-ignore
import BasePageNumber from '@whirli-components/components/BasePageNumber/BasePageNumber.vue';
// @ts-ignore
import BaseIconButton from '@whirli-components/components/BaseIconButton/BaseIconButton.vue';
// @ts-ignore
import BaseList from '@whirli-components/components/BaseList/BaseList.vue';
// @ts-ignore
import BaseListItem from '@whirli-components/components/BaseListItem/BaseListItem.vue';
// @ts-ignore
import BaseText from '@whirli-components/components/BaseText/BaseText.vue';
// @ts-ignore
import BaseFormSelect from '@whirli-components/components/BaseFormSelect/BaseFormSelect.vue';
// @ts-ignore
import BaseFormSelectOption from '@whirli-components/components/BaseFormSelectOption/BaseFormSelectOption.vue';

// Composables
import useClasses from '@whirli-components/@use/class';
import { ConfigStyles, ConfigProps } from './BasePagination.config';

/* eslint-disable  no-undef */
// @ts-ignore
const Route = useRoute();
/* eslint-enable  no-undef */
// @ts-ignore
const emit = defineEmits(['pagination:go-to', 'pagination:next', 'pagination:previous']);

const ComponentStyles: ComponentStylesInterface = ConfigStyles;

// @ts-ignore
const props: Props = defineProps(ConfigProps);

const firstPage = 1;

const isFirstPage: ComputedRef<boolean> = computed(() => props.currentPage === firstPage);
const isLastPage: ComputedRef<boolean> = computed(() => props.currentPage === props.lastPage);

// Classes
const { makeClasses } = useClasses();
const wrapperClasses = [styles.pagination, ...makeClasses(ComponentStyles, ConfigProps, props, styles)];

function isCurrentPage(number: number): boolean {
  return number === props.currentPage;
}

function goToPage(page: number) {
  if (page < firstPage || page > props.lastPage) return;
  emit('pagination:go-to', page);
}

function goToNextPage() {
  if (props.currentPage === props.lastPage) return;
  emit('pagination:next');
}

function goToPreviousPage() {
  if (props.currentPage === firstPage) return;
  emit('pagination:previous');
}

const previousPageUrl: ComputedRef<string | boolean> = computed(() => {
  const previousPageNumber: number = props.currentPage - 1;
  return previousPageNumber < 1 ? false : `${Route.path}?page=${previousPageNumber}`;
});

const nextPageUrl: ComputedRef<string | boolean> = computed(() => {
  const nextPageNumber: number = props.currentPage + 1;
  return nextPageNumber > props.lastPage ? false : `${Route.path}?page=${nextPageNumber}`;
});

const getPageNumbers: ComputedRef<PaginationOption[]> = computed(() => {
  const placeholderOption: PaginationOption = { number: 0, isPlaceholder: true };

  const lowerBound = Math.max(2, props.currentPage - (props.delta as number));
  const upperBound = Math.min((props.lastPage as number) - 1, props.currentPage + (props.delta as number));

  const range = [];
  for (let pageNumber = lowerBound; pageNumber <= upperBound; pageNumber += 1) {
    range.push({ number: pageNumber, isPlaceholder: false, isCurrentPage: isCurrentPage(pageNumber) });
  }

  if (props.currentPage - (props.delta as number) > 2) range.unshift(placeholderOption);

  if (props.currentPage + (props.delta as number) < (props.lastPage as number) - 1)
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
