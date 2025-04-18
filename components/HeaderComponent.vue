<template>
    <header>
        <div class="nav-cont">
            <img class="logo" src="/assets/logo.svg" alt="logo">
            <nav>
                <a href="#">Реализованные проекты</a>
                <a href="#">Новости</a>
                <a href="#">Контакты</a>
            </nav>
        </div>
        <div class="number-cont">
            <img class="telephone" src="/assets/telephone.svg" alt="telephone">
            <span>+7 (900) 900-90-90</span>
            <button class="submit-app">Оставить заявку</button>
        </div>
        <label for="drawer-checkbox">
            <div><img src="/assets/burgermenu.svg" alt=""></div>
        </label>
    </header>


    <input id="drawer-checkbox" type="checkbox" v-model="checked">
    <div class="drawer">
        <label for="drawer-checkbox">
            <div><img src="/assets/cross.svg" alt=""></div>
        </label>
        <nav>
            <a href="#">Реализованные проекты</a>
            <a href="#">Новости</a>
            <a href="#">Контакты</a>
        </nav>
        <div class="vspace"></div>
        <footer>
            <div>
                <img src="/assets/telephone.svg">
                <a href="tel:+79009009090">+7 (900) 900-90-90</a>
            </div>
            <div>
                <img src="/assets/email.svg">
                <a href="mailto:info@gmail.com">info@gmail.com</a>
            </div>
            <div class="placeholderdiv">
                <img class="placeholderimg" src="/assets/placeholder.svg">
                <div>
                    <span>г. Владивосток,</span>
                    <span>ул. Выселковая 49, стр. 3</span>
                </div>
            </div>
        </footer>
    </div>
    <div class="drawer-backdrop" @click="disableCheckbox"></div>
</template>
<style scoped lang="sass">
@use './styles/mixins.sass' as mixins;
$burger-duration: 0.5s
.drawer
    position: absolute 
    top: 0 
    right: 0
    height: 100vh
    width: 70%
    background-color: #029F59
    // background-color: white
    transform: translateX(100%)
    transition: transform $burger-duration ease
    z-index: 5

    display: flex
    flex-direction: column
    align-items: center

    label 
        align-self: flex-end

        div 
            display: flex
            justify-content: center
            align-items: center
            border-radius: 6px
            width: 32px
            height: 32px
            background-color: #ffffff32

            margin: 31px

    nav
        display: flex
        flex-direction: column
        align-items: flex-start
        width: 90%
        
        a
            margin: 5px
            @include mixins.nav-a(white, 16px)

    .vspace
        flex-grow: 1

    footer 
        display: flex
        flex-direction: column
        align-items: flex-start
        width: 90%
        margin-bottom: 35px

        div
            margin: 8px 5px
            font-family: Open Sans, sans-serif   

            img 
                filter: invert(100%) brightness(1000%)
                margin-right: 5px
                // margin: 0 auto

            a
                @include mixins.nav-a(white, 16px)
            
            span
                display: block
                color: white
                flex-grow: 1
                margin: 0
                width: 100%
                text-align: start
                
            
            &:last-child
                display: flex
                align-items: flex-start

                div
                    flex-grow: 1
                    display: flex
                    flex-direction: column
                    margin: 0
                    align-items: flex-start

header 
    display: flex
    flex-direction: row
    height: 97px
    align-items: center
    padding: 0 20px
    justify-content: space-between

    label
        display: none
        div
            display: flex
            justify-content: center
            align-items: center
            background-color: #029F59
            border-radius: 10px
            width: 56px
            height: 46px

    @include mixins.for-phone-only
        nav
            display: none
        .number-cont
            display: none
        label
            display: inline

    @include mixins.for-tablet-portrait-up
        header:first-child
            justify-content: flex-start

        > *:not(:first-child)
            justify-content: flex-end
        .number-cont + .submit-app
            margin-left: auto
        nav
            visibility: hidden

        .submit-app
            display: none
        
        label
            display: inline

    @include mixins.for-tablet-landscape-up
        nav
            visibility: visible

        .submit-app
            display: inline
        
        label
            display: none

    @include mixins.for-desktop-up
        padding: 0 88px

#drawer-checkbox
    position: absolute
    visibility: hidden

    &:checked
        ~.drawer
            transform: translateX(0%)
            transition: transform $burger-duration ease
    
        ~.drawer-backdrop
            opacity: 0.4
            pointer-events: auto
            



















body.drawer-open
    overflow: hidden
    height: 100vh



.drawer-backdrop
    position: absolute
    inset: 0
    opacity: 0
    height: 100vh
    width: 100vw
    pointer-events: none
    background-color: black
    z-index: 4

.nav-cont
    display: flex
    flex-direction: row

    nav a
        margin-right: 24px
        margin-bottom: 7px
        @include mixins.nav-a(#666666)

        &:last-child
            margin-right: 0

.logo
    width: 160px
    height: 39px
    margin-right: 80px

.submit-app
    width: 204px
    height: 49px
    border-radius: 10px
    font-family: inherit
    font-size: inherit
    background-color: #029F59
    border: 0
    color: white

nav
    display: flex
    align-items: center
    font-size: 16px
    flex-wrap: wrap

.number-cont
    display: flex
    flex-wrap: nowrap

    font-family: Monserrat, sans-serif 
    font-size: 14px
    color: #666666

span
    margin-left: 8px
    margin-right: 24px
    width: 121px
    align-self: center
</style>
<script setup>
    import { ref } from 'vue'
    const checked = ref(false)

    const disableCheckbox = () => {
        checked.value = false
    }

    import { onMounted, onBeforeUnmount } from 'vue'

onMounted(() => {
  const checkbox = document.getElementById('drawer-checkbox')

  const toggleBodyScroll = () => {
    if (checkbox.checked) {
      document.body.classList.add('drawer-open')
    } else {
      document.body.classList.remove('drawer-open')
    }
  }

  checkbox.addEventListener('change', toggleBodyScroll)

  // На случай перезагрузки, если чекбокс уже был активен
  toggleBodyScroll()

  onBeforeUnmount(() => {
    checkbox.removeEventListener('change', toggleBodyScroll)
    document.body.classList.remove('drawer-open')
  })
})
</script>