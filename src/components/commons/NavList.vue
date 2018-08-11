<template>
    <div id= "app-home-foot">
        <div class="footList">
            <router-link 
            :to = "routes[i].path"
            v-for = "(foot, i) in foots" 
            :key = "i"
            class="footListItem">
                <img :src =" (routes[i].path === $route.path ? foot.act_icon : foot.bg_icon)" alt="">
                <!-- <img :src ="foot.bg_icon" alt=""> -->
                <span :class =" (routes[i].path === $route.path ? foot_act : foot_bg) ">{{foot.top_text}}</span>
            </router-link>    
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: "AppHomeFoot",
  data() {
    return {
      foot_act: 'foot_act',
      foot_bg: 'foot_bg',
      foots: [],
      routes: [
          { id: 1, path: '/' },
          { id: 2, path: '/classify' },
          { id: 3, path: 'buycar' },
          { id: 4, path: '/mine' }
      ],
    };
  },
  methods: {
    getfoots() {
      this.$http
        .get(
          "https://webservice.juanpi.com/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe&app_version=&platform=&catname=newest_zhe",
          {}
        )
        .then(res => {
            // console.log(res);
            // console.log(this)
            
            // console.log(res.data.menuInfo.app_menu.menulist,);
          this.foots = res.data.menuInfo.pre_app_menu.menulist;
        });
    },
        
  },

  created() {
    this.getfoots();
        // this.foots =  this.$store.state.commons.nav_data;
        // console.log(this.foots);
  },

};
</script>

<style scoped lang = "scss" >      
        .footList {
            z-index: 100000;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            box-sizing: border-box;
            display: flex;
            background: #fff;
            .footListItem {
                color: #999999;
                flex: 1;
                display: flex;
                flex-flow: column;
                align-items: center;
                justify-content: space-between;
                height: 1rem;
                img{
                    display: block;
                    width: 0.48rem;
                    height: 0.48rem;
                    margin:0.1rem 0.69rem;
                }
            }
            .foot_act{
            color:#FF464E
            }
            .foot_bg{
                color:#999999
            }
        }
        
</style>