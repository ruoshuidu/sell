<template>
    <div class="shopcart">
        <div class="content">
            <div class="chart-icon-wrapper">
                <div class="chart-icon icon-shopping_cart"></div>
                <div class="total-count">3</div>
            </div>
            <div class="deliver-fee">
                <div class="price">￥33</div>
                <div class="pricedelive">另需配送费￥4元</div>
            </div>
            <div class="deliver-base">还差21元起送</div>
        </div>
    </div>
</template>
<script>
export default {
    
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
