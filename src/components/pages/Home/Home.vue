<template>
  <div id="app-home" class="page">
  
   
    <div class="contents">
      <app-home-head></app-home-head>
      <app-home-banner></app-home-banner>
      <app-home-push></app-home-push>
      <app-home-content></app-home-content>  
    </div>
    <app-home-nav-list></app-home-nav-list>
  
  </div>
</template>

<script>
import AppHomeBanner from './HomeBanner'
import AppHomeHead from './HomeHead'
import AppNavList from '../../commons/NavList'
import AppHomePush from './HomePush'
import AppHomeContent from './content'
export default {
  name: 'AppHome',
  components: {
    AppHomeHead,
    AppHomeBanner,
    AppNavList,
    AppHomePush,
    AppHomeContent,
  
  }
}
</script>
// lang=scss 表示写的是scss代码
<style scoped lang = "scss">
  .contents{
    width: 100%;
    height: 570px;
    overflow: auto;
  }
</style>
