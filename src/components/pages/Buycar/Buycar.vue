<template>
     <div class="app-cart">
        <p v-if = "!commons.user_state"> 请 <router-link :to="{name: 'login'}">登录</router-link>后查看 </p>
        <div v-else>
                <h1>buyCar</h1>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        name: 'AppBuycar',
        computed: {
              ...mapState(['commons']),
        },
    }
</script>

<style scoped  lang="scss">
    .app-cart {
        padding: 0.40rem 0.40rem;
        font-size: 0.36rem;
        p{
            display: flex;
            // justify-content: space-between;
            border-bottom: 1px solid #333;
            a{
                padding:0 0.15rem;
                font-size: 0.36rem;
                font-weight: bold;
                color: #ff464e;
                
            }
        }
    }
</style>