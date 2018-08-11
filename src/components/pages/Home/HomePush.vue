<template>
    <div id="app-home-push">

        <div class="discountShow">
            <a v-for = "show in shows" :key="show.id" :style= " {background: 'url(' + show.imgurl + ') no-repeat center center' , backgroundSize: show.size } "></a>   
        </div>
        <!-- <div class="imgShow">
            <img :src="imgshow.imgurl">
        </div> -->
        <div class="adShow loading-img">
            <img :src="adshow.imgurl">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AppHomePush',
        data() {
            return {
                shows: [ 
                    { id: 1, imgurl: 'https://goods5.juancdn.com/jas/180222/8/5/5a8e9c188150a133c81553be_270x241.png?iopcmd=convert&Q=85&dst=png', size: 'cover'},
                    { id: 2, imgurl: 'https://goods8.juancdn.com/jas/180530/f/e/5b0e68b4b6f8ea11b8424b37_270x241.png?imageMogr2/quality/85!/format/png', size: 'cover'},
                    { id: 3, imgurl: 'https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png', size: 'cover' },
                    { id: 4, imgurl: 'https://goods2.juancdn.com/jas/180530/2/a/5b0e68bf33b0896c6c75300b_270x241.png?imageMogr2/quality/85!/format/png', size: 'cover' }
                ],
                imgshow: {
                    imgurl: 'https://s2.juancdn.com/jas/180731/f/d/5b600a60b6f8ea060421cb9a_1080x328.gif'
                },
                adshow: {
                    imgurl: 'https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png?iopcmd=convert&Q=85&dst=png'
                }
            }
        }
    }
</script>

<style scoped lang = "scss">
    .discountShow{
        height: 1.68rem;
        display: flex;
        a{  
            flex: 1;
            display: inline-block;
            width: 100%;
            height: 100%;
        }
        p{
          
        }
    }
    .imgShow{
        img{
            width: 100%;
            height: 2.28rem;
        }
    }
    .adShow{
        img{
            margi: 0.20rem 0;
            width: 7.5rem;
            height: 0.96rem;
        }
       
    }
</style>        
        
 
        
