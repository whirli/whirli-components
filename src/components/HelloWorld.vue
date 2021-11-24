<template>
  <div class="hello">
    <FirstComponent
      background="background1"
      :decoration="{ default: 'underline', tablet: 'strikethrough' }"
      :color="{ default: 'color2', tablet: 'color1' }"
    />
    <BaseSpacer />
    <BaseText color="default">Hello worldM</BaseText>
    <BaseImage
      :image="{
        url: 'https://ci3.googleusercontent.com/proxy/Q3vmw6LoCHG5urZF91lfso3bbea9fP7EtmiSDde4NiFZrgAhPqMzyESGdDNBB__Gfr62BmNkJpuI_ZXELfjacIpuUqfjBu0TH5_GERUuwXpibGFuQJVnueYiaPK5FaPNfO9l=s0-d-e1-ft#https://whirli-email-images.s3.eu-west-2.amazonaws.com/gift-email-top-update.png',
        width: '100',
        height: '100',
        title: 'Test',
      }"
    />
  </div>
</template>

<script setup>
import FirstComponent from './FirstComponent/FirstComponent.vue';
import BaseText from './BaseText/BaseText.vue';
import BaseSpacer from './BaseSpacer/BaseSpacer.vue';
import BaseImage from './BaseImage/BaseImage.vue';
</script>
