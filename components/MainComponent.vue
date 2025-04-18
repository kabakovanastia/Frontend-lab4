<template>
    <div class="main-cont">
        <HeaderComponent />
        <main>
            <span>Hello, world!</span>
        </main>
        <FooterComponent />
    </div>
</template>
<script setup>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';
</script>
<style scoped lang="sass">
.main-cont
    display: flex
    flex-direction: column
    min-height: 100vh
main
    flex-grow: 1
#FooterComponent
    margin-bottom: 0
</style>