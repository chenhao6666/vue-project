<template>
  <div class="contents">
    <div class="content">
        <div class="navto"><span :class="['all',{active:shows==1}]" @click="getGoods(),ind()">精选专场</span><span :class="['one',{active:shows==2}]"  @click="getGoodsb(),indw() ">精选单品</span></div>
        <div class="goodss" v-for = "(good, i) in goods" :key="i">
        <div class="pos loading-img"> 
          <img :src="good.pic_url" class="lo">
          <img :src="good.logo_url" class="log " v-if="good.logo_url">
        </div>
        <p class="sale">{{good.coupon_tips}}</p>
        <p class="hotb"><img :src="good.corner" class="hot" v-if = "good.corner"></p>
        <p><span v-if="good.priceList" class="jiage">￥{{good.cprice}}</span><span v-if="good.priceList" class="yuanjia">￥{{good.oprice}}</span></p>
        <div class="na"><span class="naa">{{good.title}}</span> <span v-if="good.coupon_tips" class="new">{{good.time_left}}</span></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {
      goods: [],
    };
  },
  methods: {
 
    getGoods() {
      this.$http
        .get(
          "https://webservice.juanpi.com/api/getGoods?page=1&zy_ids=p8_c4_l4_0&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc"
        )
        .then(res => {
          // console.log(res);
          
          this.goods = res.data.data.goods;
          // console.log(this.goods);
        });
    },
    getGoodsb() {
      this.$http
        .get(
          "https://webservice.juanpi.com/api/getGoods?page=1&zy_ids=p8_c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp"
        )
        .then(res => {
          this.goods = res.data.data.goods;
          // console.log(this.goods);
        });
    },
    ind(){
      this.shows = 1
      
    },
      indw(){
      this.shows = 2
    },
  },
  created() {
    this.getGoods();
    this.ind();
  }
};
</script>

<style scoped lang="scss">
p {
  display: block;
  -webkit-margin-before: 0em;
  -webkit-margin-after: 0em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}
.contents {
  display: flex;
  .content {
    flex: 1;
    width: 100%;
    .lo {
      width: 3.53rem;
      height: 3.53rem;
    }
  }
}
.log {
  width: 0.9998rem;
  height: 0.4998rem;
  position: absolute;
  right: 0;
  bottom: 37px;
}
.hot{
  width: 0.9rem;
  height: 0.9rem;
  position: absolute;
  top: 0;left: 0;
}
.goodss {
  display: flex;
  flex-direction: column;
  float: left;
  position: relative;
  margin-top: 1px;
  // width: 1.8616rem;
  margin-right: 2px;
  width: 3.53rem;
}
.naa {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 2.3rem;display: inline-block;
  font-size: 13px;
  margin-top: 4px;
}
.new{
  float: right;
  font-size: 12px;
  color:#bbb;
  margin-top: 4px;
  
}
.active{
border-bottom: 2px solid #FF464E;color: #FF464E;
}
.sale{
  color: #FF464E;
  font-size: 14px;
  margin-top: 4px;
  
}
.jiage{
   color:#FF464E;margin-right: 5px;font-size: 14px;
}
.yuanjia{
  font-size: 12px;text-decoration: line-through;
}
.all,.one{
  font-size: 0.34rem;
  margin-right: 10px;
}
.navto{
  height: 40px;
  line-height: 40px;
}
</style>