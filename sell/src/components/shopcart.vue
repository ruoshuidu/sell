<template>
    <div class="shopcart">
        <div class="content">
            <div class="chart-icon-wrapper">
                <div class="chart-icon icon-shopping_cart" :class="{noZchart:totalCount != 0}"></div>
                <div class="total-count" v-show="totalCount != 0" >{{totalCount}}</div>
            </div>
            <div class="deliver-fee">
                <div class="price" :class="{npZprice:totalCount != 0}">￥{{totalPrice}}</div>
                <div class="pricedelive">另需配送费￥{{deliveryPrice}}元</div>
            </div>
            <div class="deliver-base" :class="{ok:totalPrice >= minPrice}">{{inform}}</div>
        </div>
         <div class="list-wrapper" v-show="listShow">
            <div class="grap"></div>
            <div class="cart-list">
                <div class="list-header">
                    <span class="title">购物车</span>
                    <span class="empty">清空</span>
                </div>
                <div class="list-content">
                    <ul>
                        <li v-for="food in selectFoods">
                            <span class="name">{{food.name}}</span>
                            <div class="price">
                                <span>￥{{food.count * food.count}}</span>
                            </div>
                            <div class="cart-control-wrapper">
                                <cart-control :food="food"></cart-control>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import cartControl from './cartcontrol'
export default {
    props:{
        minPrice:Number,
        deliveryPrice:Number,
        selectFoods: {
            type:Array
        }
    },
    components:{
        cartControl
    },
    data() {
        return {
           listShow:true
        }
    },
    computed: {
        totalCount(){
            let totalCount = 0;
            this.selectFoods.forEach((food) => {
                totalCount += food.count
            })
            return totalCount
        },
        totalPrice() {
            let totalPrice = 0;
            this.selectFoods.forEach((food) => {
                totalPrice += food.count * food.price
            })
            return totalPrice
        },
        inform () {
            if(this.totalPrice === 0){
                return `￥${this.minPrice}`
            }else if(this.totalPrice > 0 && this.totalPrice < this.minPrice) {
                return `还差${this.minPrice - this.totalPrice}元起送`;
            }else{
                return '去结算'
            }
        }
    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
@import '../../static/style.css';
.shopcart{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 300;
    width: 100%;
    height: 48px;
    .content{
        background: #131d26;
        width: 100%;
        display: flex;
        .chart-icon-wrapper{
            flex: 0 0 80px;
            position: relative;
            .chart-icon{
                color: #fff;
                width: 100%;
                height: 100%; 
                width: 44px;
                height: 44px;
                border-radius: 100%;
                background-color: #2b343c;
                border:6px solid #131d26;   
                margin-top: -12px;
                font-size: 24px;
                color: rgba(255,255,255,0.4);
                line-height: 44px;
                text-align: center;  
                margin-left: 18px; 
                &.noZchart{
                    color: #fff;
                }      
            }
            .total-count{
                width: 24px;
                height: 18px;
                background: red;
                border-radius: 12px;
                position: absolute;
                top: -12px;
                right:0px;
                text-align: center;
                line-height: 18px;
                color: #fff;
                font-size: 10px;
            }
        }
        .deliver-fee{
            flex: 1;
            color: rgba(255,255,255,0.4);
            padding:12px 0;
            font-size: 12px;
            .price{
                display: inline-block;
                height: 24px;
                line-height: 24px;
                border-right: 1px solid rgba(255,255,255,0.2);
                padding-right: 12px;
                margin-right: 12px;
                font-weight: 900;
                &.npZprice{
                    color: #fff;
                }
            }
            .pricedelive{
                display: inline-block;
                height: 24px;
                line-height: 24px;
            }
        } 
        .deliver-base{
            flex: 0 0 105;
            width: 105px;
            background: #2b333b;
            line-height: 48px;
            font-size: 12px;
            text-align: center;
            color: rgba(255,255,255,0.4);
            font-weight: 900;
            &.ok{
                color: #fff;
                background: green;
            }
        }
        
    }
    
}
</style>
