<template>
  <div class="hello">
    <FirstComponent
      background="background1"
      :decoration="{ default: 'underline', tablet: 'strikethrough' }"
      :color="{ default: 'color2', tablet: 'color1' }"
    />
  </div>
</template>

<script setup>
import FirstComponent from './FirstComponent/FirstComponent.vue';
</script>
