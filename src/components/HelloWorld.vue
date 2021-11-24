<template>
  <div class="hello">
    <FirstComponent
      background="background1"
      :decoration="{ default: 'underline', tablet: 'strikethrough' }"
      :color="{ default: 'color2', tablet: 'color1' }"
    />
    <BaseText :color="{ default: 'default', tablet: 'pink' }">Hello worldM</BaseText>
  </div>
</template>

<script setup>
import FirstComponent from './FirstComponent/FirstComponent.vue';
import BaseText from './BaseText/BaseText.vue';
</script>
