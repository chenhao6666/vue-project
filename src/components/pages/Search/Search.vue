<template>
    <div class="app-search">
        <div>
            <div class="title">
                <mt-search placeholder="搜索" class="search" autofocus></mt-search>
            </div>
            <span class="remove" @click="$router.go(-1)">取消</span>
            <p class="hot">热搜</p>
            <div class="keywords">
                <ul>
                    <li v-for= "(aa, i) in aas" :key= "i+100" >
                        <a>{{aa.text}}</a>
                    </li>
                    <li v-for= "(keyword, i) in keywords" :key="i"
                           
                    >
                        <a  :class="{other:keyword.is_red==0}"  >{{keyword.text}}</a>
                    </li>
                </ul>
                
            </div>
        </div>
        
    </div>
</template>

<script>

//      <mt-search v-model="value">
//      <mt-cell
//      v-for="item in result"
//     :title="item.title"
//     :value="item.value">
//      </mt-cell>
//      </mt-search>
import { Indicator } from 'mint-ui';

    export default {
        name: 'AppSearch',
        data () {
            return {
                keywords: [],
                aas: []
            }
        },
        methods: {
            getSearchRes () {
                Indicator.open('加载中...');
                this.$http.get('/jp/keywords/search?plateform=m&zy_ids=c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391').then(res => {
                    console.log(res);
                    Indicator.close();
                    this.keywords = res.data.hot_keywords
                    console.log(res.data.jump_keywords);
                    this.aas = res.data.jump_keywords
                    // this.jumpKeyWrods = res.data.jump_keywords
                    // console.log(jumpKeyWrods);
                    
                })
            }
        },
        created() {
            this.getSearchRes()
        }
    }
</script>

<style scoped lang = "scss">
  
    .title{
        height: 0.88rem;
    }
    .remove{
        display: inline-block;
        box-sizing: border-box;
        height: 0.44rem;
        /* padding: 0.2rem 0.2rem; */
        margin: 0.3rem 0.3rem;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 100000;
    }
    .hot{
        margin-top: 0.28rem;
        font-size: 0.28rem;
        color: #999;
        font-family: PingFang-SC-Regular,Helvetica Neue,Helvetica,Droid Sans Fallback,microsoft yahei,sans-serif;
    }
    .keywords{
        list-style: none;
        padding: 0 0.28rem;
        ul{
            li{
                display: inline-block;
                background-color: #f4f4f4;
                border-radius: .17067rem;
                font-size: 0.24rem;
                margin-right: 0.20rem;
                margin-bottom: 0.06rem;
                margin-top: 0.16rem;
                padding-bottom: 0.10rem;
                padding-top: 10px;
                padding-right: 20px;
                padding-left: 20px;
                font-family: PingFang-SC-Regular,Helvetica Neue,Helvetica,Droid Sans Fallback,microsoft yahei,sans-serif;
                a{
                    color: #ff464e;
                }
                .other{
                    color: #666;
                }
            }
        }
    }
</style>
