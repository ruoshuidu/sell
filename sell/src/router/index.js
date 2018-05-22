import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods'
import Ratings from '@/components/rating'
import Sellers from '@/components/seller'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Goods',
      component: Goods
    },{
      path: '/goods',
      component: Goods
    },{
      path: '/rating',
      component: Ratings
    },{
      path: '/seller',
      component: Sellers
    }

  ]
})
