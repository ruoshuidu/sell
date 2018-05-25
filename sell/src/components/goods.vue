<template>
    <div id="goods">
      <div class="menu-wrapper" ref="menuWrapper">
          <div v-for="(item,index) in goods" 
                :key="index" class="menu-item" 
                @click="selectIndex(index,$event)"
                :class="{current : currentIndex === index}"
          >
              <div class="text-wrapper">
                 <span class="icon" v-show="item.type > 0" :class="classMap[item.type]"></span>
                 <span class="text">{{item.name}}</span>
              </div>
          </div>
      </div>
      <div class="foods-wrapper" ref="foodWrapper">
        <ul>
            <li v-for="(items,index) in goods" :key="index" class="foods-list">
                <div class="items-title">{{items.name}}</div>
                <ul class="items-content">
                    <li v-for="(food,index) in items.foods" :key="index" class="items-content-wrapper">
                        <div class="item-icon"><img :src="food.icon" alt=""></div>
                        <div class="item-content">
                            <div class="item-name">{{food.name}}</div>
                            <div v-show="food.description" class="items-description">
                                {{food.description}}
                            </div>
                            <div class="rating">
                                <span>月售{{food.sellCount}}份</span>
                                <span style="margin-left:12px;">好评率{{food.rating}}%</span>
                            </div>
                            <div class="prices">
                                <span class="price">{{food.price}}</span>
                                <span class="old-price" v-if="food.oldPrice" style="margin-left:8px;">￥{{food.oldPrice}}</span>
                            </div>
                            <div class="cart-control-wrapper">
                                <cart-control :food="food"></cart-control>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>    
        </ul>    
      </div>  
      <!-- 购物车 -->
      <shopcart :minPrice="seller.minPrice" :deliveryPrice="seller.deliveryPrice" :selectFoods="selectFoods"></shopcart>
    </div>
</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import BScroll from 'better-scroll'
import ShopCart from './shopcart'
import cartControl from './cartcontrol'
export default {
    data () {
        return {
            goods:[],
            heightList:[],
            seller:{},
        }
    },
    
    components:{
        'shopcart':ShopCart,
        cartControl
    },
    created () {
        this.classMap = ['decrease','discount','special','invoice','guarantee']
        axios.get('/good/goods').then(res => {
           this.goods = res.data.data 
           Vue.nextTick(() => {
               this._initScroll()//初始化scroll
               this._caculateHeight()//计算每一个foods-list高度
           })          
        }),
        axios.get('/good/seller').then(res => {
            this.seller = res.data.data
        })    
    },
    computed:{
        currentIndex() {
            for(let i = 0; i < this.heightList.length; i ++){
                let height1 = this.heightList[i]
                let height2 = this.heightList[i + 1]
                if(!height2 || (this.scrollY >= height1 && this.scrollY <= height2)){
                    return i
                }
            }
            return 0
        },
        selectFoods() {
            let foods = []
            this.goods.forEach((good) => {
                good.foods.forEach((food) => {
                    if(food.count){
                        foods.push(food)
                    }
                })
            })
            return foods
        }
    },
    methods:{
        selectIndex($index,$event) {
            if(!$event._constructed){
                return
            }
            let foodsList = this.$refs.foodWrapper.getElementsByClassName('foods-list')
            this.foodsScroll.scrollToElement(foodsList[$index],300)
        },
        _initScroll() {
            this.menuScroll = new BScroll(this.$refs.menuWrapper,{
                click:true
            })
            this.foodsScroll = new BScroll(this.$refs.foodWrapper,{
                probeType:3,
                click:true
            })
            //获取鼠标y值
            this.foodsScroll.on('scroll',(pos) => {
              this.scrollY = Math.abs(Math.round(pos.y))
            })
        },
        _caculateHeight() {
           let foodsList = this.$refs.foodWrapper.getElementsByClassName('foods-list')
           let height = 0;
           this.heightList.push(height)
           for(let i = 0; i < foodsList.length; i ++){
               height += foodsList[i].clientHeight
               this.heightList.push(height)
           }
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../static/style.css';
#goods{
    display: flex;
    position: absolute;
    top: 174px;
    bottom: 48px;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    .menu-wrapper{
        flex:0 0 80px;
        width: 80px;
        background: #f3f5f7;
        .menu-item{
            padding: 0 12px;
            font-size: 0;
            border-bottom: 1px solid rgba(7,17,27,0.1);
            
            .text-wrapper{
                display: table-cell;
                vertical-align: middle;
                height: 54px;
                .icon{
                    display: inline-block;
                    vertical-align: top;
                    width: 16px;
                    height: 16px; 
                    &.special{
                        background: url('../assets/img/special_2@2x.png') no-repeat;
                        background-size: 16px 16px;  
                    }   
                    &.discount{
                        background: url('../assets/img/discount_2@2x.png') no-repeat;
                        background-size: 16px 16px;  
                    }  
                    &.decrease{
                        background: url('../assets/img/decrease_2@2x.png') no-repeat;
                        background-size: 16px 16px;  
                    }
                    &.invoice{
                        background: url('../assets/img/invoice_2@2x.png') no-repeat;
                        background-size: 16px 16px;  
                    }
                    &.guarantee{
                        background: url('../assets/img/guarantee_2@2x.png') no-repeat;
                        background-size: 16px 16px;  
                    }                               
                }   
                .text{
                    font-weight:200;
                    font-size: 12px;
                    width: 56px;
                    line-height: 14px;
                }   
            }
        }
        .current{
            background: #fff;
            &:after{
                border-top: 1px solid #fff;
                font-size: 12px;
            }
            .text{
                font-weight: bold;
            }
        }
    }
    .foods-wrapper{
       flex: 1;
       background: #fff;
       .foods-list{
           .items-title{
               width: 100%;
               background: #f3f5f7;
               padding: 0 18px;
               height: 26px;
               font-size:12px;
               color: rgb(147,153,159);
               line-height: 26px;
               border-left: 4px solid #d9dde1;
           }
           .items-content{
               .items-content-wrapper{
                   display: flex;
                   margin:18px;
                   position: relative;
                   background: #fff;
                   padding-bottom: 18px;
                   border-bottom: 1px solid #d9dde1;
                   &:last-child{
                       border: 1px solid #fff;
                       margin-bottom: 0;
                   }
                   .item-icon{
                       flex: 0 0 57px;
                       img{
                            width: 57px;
                            height: 57px;
                       }
                   }
                   .item-content{
                       flex: 1;
                       padding-left: 10px;
                       .item-name{
                           font-size: 14px;
                           color:rgb(7,17,27);
                       }
                       .items-description,.rating{
                           color: rgb(147,153,159);
                           font-size: 10px;
                           margin: 8px 0 0 0;
                       }
                       .prices{
                           font-size: 20px;
                           color: rgb(240,20,20);
                           font-weight: 700;
                           margin-top:6px;
                           .old-price{
                               font-size: 12px;
                               color:rgb(147,153,159);
                               vertical-align: top;
                               text-decoration: line-through;
                           }
                       }
                       .cart-control-wrapper{
                           position: absolute;
                           bottom: 14px;
                           right: 0;
                       }
                   }
               }
           }
       }
    }
}
</style>

