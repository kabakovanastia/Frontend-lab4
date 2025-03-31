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
    </header>
</template>
<style scoped lang="sass">
header 
    display: flex
    flex-direction: row
    justify-content: space-between
    height: 97px
    align-items: center
    padding: 0 88px
.nav-cont
    display: flex
    flex-direction: row
.logo
    width: 160px
    height: 39px
    margin-right: 80px
.submit-app
    margin-left: 24px
    width: 204px
    height: 49px
    border-radius: 10px
    padding: 16px 40px
    font-family: inherit
    font-size: inherit
    background-color: #029F59
    border: 0
    color: white
a
    margin-left: 24px
    font-family: Open Sans, sans-serif
    color: #666666
    text-decoration: none
a:first-child
    margin-left: 0
nav
    display: flex
    align-items: center
    font-size: 16px
.number-cont
    font-family: Monserrat, sans-serif 
    font-size: 14px
    color: #666666
span
    margin-left: 8px
</style>