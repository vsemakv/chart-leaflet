<template>
    <div class="navbar">
        <router-link to="/posts" class="navbar__links">Публікації</router-link>
        <router-link to="/" class="navbar__links">Мапа</router-link>
        <router-link to="/stats" class="navbar__links">Статистика</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .navbar { 
        width: 100%;
        height: 70px;
        background-color: antiquewhite;
        display: flex;
        justify-content: space-around;
        align-items: center;
        &__links { 
            text-decoration: none;
            color: black;
            transition: ease 0.4s;
            font-size: 40px;
            &:hover { 
                color: rgb(49, 49, 49);
                transition: ease 0.4s;
            }
        }
    }
</style>