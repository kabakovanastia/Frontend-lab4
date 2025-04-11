<template>
    <div class="rootelem">
        <HeaderComponent/>
        <MainComponent/>
        <FooterComponent/>
    </div>
</template>
<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import MainComponent from './components/MainComponent.vue';
</script>
<style scoped lang="sass">
@import '@csstools/normalize.css'
html, body, #__nuxt, .root
  height: 100%



</style>