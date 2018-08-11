<template>
  <div id="app-home-head"> 
        <!-- <h1>hahahha</h1> -->
        <div class="downloadImg">
            <img src="" alt="">
        </div>
        <div class="search">    
            <router-link :to="{ name: 'search' }" class="search_first">
                   
               <i class="fa fa-search"></i>
                <span class="search_img"><img src="https://s1.juancdn.com/bao/170926/8/2/59ca3863a9fcf823cd42cfcb_84x60.png" alt=""></span> 
                <span>搜索</span>
             </router-link>
            <router-link :to="{ name: 'search' }" href="#" class="classify">
                <img src="https://goods3.juancdn.com/bao/170421/4/9/58f9f3bca43d1f15ff678b8c_132x132.png" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: "AppHomeHead"
};
</script>

<style scoped lang = "scss">
.downloadImg{
    width: 100%;
    height: 1.12rem;
    background: url('//jp.juancdn.com/jpwebapp/images/go_load_new.png') center center;
    background-size: cover;
}
.search { 
    text-align: left;
    height: 0.88rem;
    padding-left: 0.28rem;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    background: #fff;
    .search_first{
        display: inline-block;
        height: 0.56rem;
        line-height: 0.56rem;
        color: rgb(153, 153, 153);
        width: 6.2rem;
        background-color: #f2f2f2;
        border-radius: 0.1rem;
        i{
            display: inline-block;
            width: 0.3rem;
            height: 0.3rem;
            font-size: 0.36rem;
            padding-left: .1rem;
        }
        img{
            vertical-align: middle;
            display: inline-block;
            margin:0 0.2rem 0.1rem 0.2rem; 
                width: 0.42rem;
            height: 0.30rem;
        }
    }
    .classify{
        img{
            display: inline-block;
            width: 0.78rem;
            height: 0.78rem;
        }
    }
       
    
} 
</style>