<template>
    <footer>
        <div class="info">
            <img class="logo" src="/assets/logo2.svg" alt="logo">
            <nav>
                <a href="#" class="nav-link">Реализованные проекты</a>
                <a href="#" class="nav-link">Новости</a>
                <a href="#" class="nav-link">Контакты</a>
            </nav>
            <div class="contact-list">
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
                    <span>г. Владивосток,<br> ул. Выселковая 49, стр. 3</span>
                </div>
            </div>
            <button class="submit-app">Оставить заявку</button>
        </div>
        <div class="terms">
            <a href="#">© Загдом, 2021</a>
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Пользовательское соглашение</a>
        </div>
    </footer>
</template>
<script setup>
</script>
<style scoped lang="sass">
@use './styles/mixins.sass' as mixins;

footer
    display: flex
    flex-direction: column
    background-color: #254741
    font-family: Monserrat, sans-serif 
    color: white
    font-size: 14px

    height: 570px
    padding: 40px

    .info
        display: flex
        flex-direction: column
        > *
            margin-bottom: 40px
    
        .logo
            width: 160px
            align-self: flex-start

        nav
            font-family: Open Sans, sans-serif 
            font-size: 16px
            margin-top: 12px
            display: flex
            flex-direction: column

            a
                font-family: Open Sans, sans-serif
                color: white
                text-decoration: none
            > *:not(:last-child)
                margin-bottom: 24px

        .contact-list
            margin-top: 12px
            white-space: pre-line

            div
                margin-top: 24px
                display: flex
                align-items: center

                img
                    margin-right: 5px
                
                a
                    text-decoration: none
                    color: white

            div:first-child
                margin-top: 0

            div:last-child
                align-items: start
        
        .submit-app
            width: 204px
            height: 49px
            border-radius: 10px
            padding: 16px 40px
            font-family: inherit
            font-size: inherit
            background-color: #029F59
            border: 0
            color: white
     
    .terms
        display: flex
        flex-direction: column

        a
            text-decoration: none
            font-size: 14px
            color: #A8B5B3
            margin-right: 0
            font-family: 'PT Root UI', sans-serif

            > *:not(:last-child)
                margin-bottom: 16px        

    @include mixins.for-tablet-landscape-up
        height: 220px
        padding: 33px 20px

        .info
            justify-content: space-between
            flex: 1
            flex-direction: row

        .terms
            flex-direction: row

            a
                margin-right: 100px
                font-family: Open Sans, sans-serif 

    @include mixins.for-desktop-up
        padding: 33px 88px

        .terms a
            margin-right: 160px
</style>