<template>
    <footer>
        <div class="info">
            <img class="logo" src="/assets/logo2.svg" alt="logo">
            <nav>
                <a href="#" class="nav-link">Реализованные проекты</a>
                <a href="#" class="nav-link">Новости</a>
                <a href="#" class="nav-link">Контакты</a>
            </nav>
            <div class="contacts">
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
            </div>
            <button class="submit-app">Оставить заявку</button>
        </div>
        <div class="terms">
            <a href="#" class="term">© Загдом, 2021</a>
            <a href="#" class="term">Политика конфиденциальности</a>
            <a href="#" class="term">Пользовательское соглашение</a>
        </div>
    </footer>
</template>
<script setup>
</script>
<style scoped lang="sass">
nav a
    margin-top: 24px
    font-family: Open Sans, sans-serif
    color: white
    text-decoration: none
nav a:first-child
    margin-top: 0
.terms a 
    text-decoration: none
    font-family: Open Sans, sans-serif 
    font-size: 14px
    color: #A8B5B3

.contact-list div
    margin-top: 24px
    display: flex
    align-items: center
.contact-list div:first-child
    margin-top: 0
.contact-list div:last-child
    align-items: start
.contact-list img
    margin-right: 5px
.contact-list a
    text-decoration: none
    color: white
footer
    display: flex
    flex-direction: column
    height: 246px
    padding: 33px 88px
    background-color: #254741
    font-family: Monserrat, sans-serif 
    color: white
    font-size: 14px

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
.info
    display: flex
    flex-direction: row
    justify-content: space-between
    flex: 1
ul
    list-style: none
    padding: 0
    margin: 0
.terms
    display: flex
    flex-direction: row
.term
    margin-right: 172px
.logo
    width: 160px
    align-self: flex-start
nav
    font-family: Open Sans, sans-serif 
    font-size: 16px
    margin-top: 12px
    display: flex
    flex-direction: column
.contacts
    margin-top: 12px
    white-space: pre-line
li
    margin-bottom: 24px
li:last-child
    margin-bottom: 0
</style>