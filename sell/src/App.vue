<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item"><router-link to="goods">商品</router-link></div>
      <div class="tab-item"><router-link to="rating">评价</router-link></div>
      <div class="tab-item"><router-link to="seller">商家</router-link></div>
    </div>
    <div class="content"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header'
import Goods from './components/goods'

import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      seller:{}
    }
  },
  components:{
    'v-header':Header,
    Goods
  },
  created () {
    axios.get('/good/seller').then(
      res => {
        if(res.data.code === 0) {
          this.seller = res.data.data
        }
      }
    )
  }
}
</script>

<style lang="less" scoped>
.tab{
  display: flex;
  flex-direction: row;
  .tab-item{
    flex: 1;
    width: 100%;
    height:40px;
    line-height: 40px;
    text-align: center;
    color:rgb(77,85,93);
    font-size: 14px;
    a{
      width: 100%;
      height: 100%;
      display: block;
    }
    a.active{
      color:rgb(240,20,20) !important;
    }
  }
}


</style>
