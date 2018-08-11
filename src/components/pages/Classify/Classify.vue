<template>
  <div class="app-classify">
    
    <div class="search_box">
      <router-link  tag="input" placeholder='搜索商品'  :to="{name: 'search'}" type="text" name="" id="">
      </router-link>
    </div>

    <div class="content">
      <div class="list-left">
        <ul>
          <li v-for="(item,i) in list" :key = 'i'  @click="cli(i)" :class="{active:shows == i}">{{item.name}}</li>
        </ul>
      </div>
      <div class="list-right">
        <router-link class="goods" v-for = "(item,i) in erji" :key = 'i' :to ="{name:'classifyItem'}" >
          <img :src="'https://s2.juancdn.com'+item.icon" alt="" class="loading-img">
          <p>{{item.name}}</p>
        </router-link>
      </div>
    </div>

    <app-home-nav-list></app-home-nav-list>


</div>
</template>

<script>
import { Indicator } from 'mint-ui';
export default {
  name: "AppClassify",
  data(){
    return{
      list:[],
      erji:[],
      idx:0,
      shows:0
    }
  },
  methods:{
    getclass() {
      Indicator.open('加载中...');
      this.jsonp("/jp/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_="+Date.now(), null, (err, data) => {
        if (err) {
          console.error(err.message);
        } else {
          Indicator.close();
          this.list = data
          this.erji = data[this.idx].secondCateList
          console.log(this.erji)
        }
      });
    },
    cli(i){
      // console.log(i)
      this.idx = i;
      this.getclass()
      this.shows = i      
    }

  },
  created(){
    this.getclass()
  },


 
       

};
</script>

<style scoped lang="scss">
#app .active{
  color:red;
  border-left:  2px solid red;
}
  .search_box {
      height: 0.617rem;
      margin: 0.3rem;
      border: 1px solid #bbb;
      border-radius: 5px;
      background-color: #fff;
      padding: .125rem 0;
      box-sizing: border-box;
      input{
          width: 6rem;
          font: -webkit-small-control;
          font-size: 0.16rem;
          color: initial;
          letter-spacing: normal;
          word-spacing: normal;
          text-transform: none;
          text-indent: 0;
          text-shadow: none;
          display: inline-block;
          text-align: start;
          border: none;
          outline-style: none;
          word-break: normal;
          vertical-align: middle;
          height: 24px;
          line-height: 0.24rem;
          margin-left: 0.25rem;
          color: #666;
          position: absolute;
          border-bottom:  1px solid #bbb;
      }
  }
  .content{
    
    .list-left{
      float: left;
      width: 25%;
      background: #f9f9f9;
      overflow: hidden;
      font-size: 0.28rem;
      ul{
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: left;
        text-indent: 0.3rem;
        margin-bottom: 1rem;
        li{
          line-height: 0.9rem;
          position: relative;
          border-bottom: 1px solid #ebebeb;
          cursor: pointer;
          border-left: 4px solid #f9f9f9;
          color: #333;
         
        }
      }
    }
    .list-right{
      float: left;
      width: 71%;
      font-size: 12px;
      padding-left: 4%;
      .goods{
        height: 1.8rem;
        display: inline-block;
        text-align: center;
        padding: 0 4%;
        box-sizing: border-box;
        position: relative;
        img{
          width: 1.2rem;
          height: 1.2rem;
        }
        span{
          position: absolute;
          top: 0;
          right: 0;
           .new{
            color: blue; 
          }
          .hot{
            color: red;
          }
        }
      }
    }
  }
</style>
