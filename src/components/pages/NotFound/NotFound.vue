<template>
    <div class="not-found">
        <div class="all">
            <header class="bar bar-nav">
                <a @click="back" class="icon icon-left pull-left"></a>
            </header>

            <div class="content">
                <h4>访问的页面不存在 <router-link to="/">回到首页</router-link> </h4>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app-not-found',
        methods: {
            back () {
                //返回， 编程式导航
            this.$router.go(-1)
        }
    }  
    }
</script>

<style scoped lang = "scss">
    .all{
        background: red;
        height: 0.58rem;
        .bar{
            a {
                font-size: 0.18rem;
            } 
        }
      
    }
</style>