<template>
  <div ref = "el" class="app-home-banner swiper-container" >
    <div class="swiper-wrapper loading-img">
        <div
            v-for = " banner in banners "
            :key = banner.id
        class="swiper-slide ">
            <img :src="banner.pic" alt="" >
        </div>
    </div>
    
    <div class="swiper-pagination"></div>
  </div>
  
</template>

<script>
import Vue from 'vue'
import Swiper from 'swiper'
export default {
  name: 'AppHomeBanner',
  data () {
    return {
        banners: []
    }
  },
  methods: {
        getBanners () {
            this.$http.get('https://webservice.juanpi.com/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_1456_1186_1220_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe&app_version=&platform=&catname=newest_zhe', {
            }).then(res => {
                // console.log(res);
                // console.log(res.data.adsInfo.slide_ads.config.slide)
                this.banners = res.data.adsInfo.slide_ads.config.slide
                Vue.nextTick(() => {
                     new Swiper(this.$refs.el, {
                            loop: true,
                            autoplay: true,
                            pagination: {
                            el: '.swiper-pagination'                        
                        }
                     })
                })
            })
        }
  },
  created () {
      this.getBanners()
  }
}
</script>
<style lang = "scss">
    .app-home-banner {
        .swiper-wrapper {
            width: 100%;
            height:2.9rem;
            
        }
        .swiper-slide {
            img {width: 100%;}
        }
        .swiper-pagination  {
            position: absolute;
            left: 0; bottom: 0;
            .swiper-pagination-bullet {
                width: 0.32rem; height: 0.16rem;
                border-radius: 0.1rem;
            }
            .swiper-pagination-bullet-active {
                background: #fff;
            }
        }

    }
        
</style>
