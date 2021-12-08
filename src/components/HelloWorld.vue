<template>
  <div class="hello">
    <BaseText size="5xl" line-height="default" letter-spacing="md">Heading 1</BaseText>
    <BaseSpacer />
    <BaseButton url="https://www.bbc.co.uk">Link</BaseButton>
    <BaseButton url="/about">Internal</BaseButton>
    <BaseButton @click="alertMe('pressed')">Button</BaseButton>
    <BaseButton :state="buttonState" type="submit">Submit</BaseButton>

    <BaseSpacer />

    <BaseImage
      :image="{
        url: 'https://ci3.googleusercontent.com/proxy/Q3vmw6LoCHG5urZF91lfso3bbea9fP7EtmiSDde4NiFZrgAhPqMzyESGdDNBB__Gfr62BmNkJpuI_ZXELfjacIpuUqfjBu0TH5_GERUuwXpibGFuQJVnueYiaPK5FaPNfO9l=s0-d-e1-ft#https://whirli-email-images.s3.eu-west-2.amazonaws.com/gift-email-top-update.png',
        width: '410',
        height: '290',
        title: 'Test',
      }"
    />
    <BaseContainer>
      <BaseGrid>
        <BaseColumn>Hello world</BaseColumn>
      </BaseGrid>
    </BaseContainer>
    <BaseGrid>
      <BaseColumn :spans="{ default: 12, tablet: 6 }">Hello world</BaseColumn>
      <BaseColumn :spans="{ default: 12, tablet: 6 }">Hello world 2</BaseColumn>
    </BaseGrid>
    <BaseSection :size="{ top: { default: 'lg', tablet: '5xl' }, bottom: 'default' }">
      <BaseText color="default" font="mono">Hello from section</BaseText>
    </BaseSection>
  </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';

import FirstComponent from './FirstComponent/FirstComponent.vue';
import BaseText from './BaseText/BaseText.vue';
import BaseSpacer from './BaseSpacer/BaseSpacer.vue';
import BaseImage from './BaseImage/BaseImage.vue';
import BaseGrid from './BaseGrid/BaseGrid.vue';
import BaseColumn from './BaseColumn/BaseColumn.vue';
import BaseContainer from './BaseContainer/BaseContainer.vue';
import BaseSection from './BaseSection/BaseSection.vue';
import BaseButton from './BaseButton/BaseButton.vue';

function alertMe(string: string): void {
  alert(string);
}

const buttonState: Ref<string> = ref('loading');

onMounted((): void => {
  setTimeout(() => {
    buttonState.value = 'processing';
  }, 1000);
  setTimeout(() => {
    buttonState.value = 'complete';
  }, 2000);
  setTimeout(() => {
    buttonState.value = 'default';
  }, 3000);
});
</script>
