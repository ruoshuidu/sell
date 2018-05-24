<template>
    <div class="header">
        <div class="header-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" alt="" class="avatar-img">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand "></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="desc">
                    {{seller.description}} / {{seller.deliveryTime}}分钟送达
                </div>
                <div class="supports" v-if="seller.supports">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span>{{seller.supports[0].description}}</span>
                </div>
                <div class="num-wrapper" v-if="seller.supports" @click="handleShowDetail">
                    <span class="number">{{seller.supports.length}}个</span>
                    <span class="icon-keyboard_arrow_right"></span>
                </div>
            </div>
        </div>
        <div class="buttetin-wrapper" @click="handleShowDetail">
            <span class="butterin-icon"></span>
            <span class="butterin">{{seller.bulletin}}</span>
             <span class="icon-keyboard_arrow_right more"></span>
        </div>
        <div class="bg">
            <img :src="seller.avatar" alt="">
        </div>
        <div class="detail" v-show="showDetail">
            <div class="detail-wrapper clearfix">
                <div class="detail-main">
                    <h1 class="name">{{seller.name}}</h1>
                    <star :size="48" :score="4"></star>
                </div>
            </div>
            <div class="detail-close" @click="handleHideDetail" >
                <span class="icon-close"></span>
            </div>
        </div>
    </div>
</template>
<script>
import star from './star'
export default {
    props:{
        seller:Object,
    },
    components:{
        star
    },
    data() {
        return {
            showDetail:false
        }
    },
    created(){
        this.classMap = ['decrease','discount','special','invoice','guarantee']
        console.log(this.seller.name)
    },
    methods: {
        handleShowDetail() {
            this.showDetail = true;
        },
        handleHideDetail() {
            this.showDetail = false;
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../static/style.css';
.header{
    position: relative;
    overflow: hidden;
    .header-wrapper{
        position:relative;
        padding: 24px 24px 18px;
        background: rgba(7,17,27,0.5);
        .avatar{
            float: left;
            .avatar-img{
                border-radius: 2px;
                width: 64px;
                height: 64px;
            }
        }
        .content{
            margin-left: 80px;
            color: #fff;
           
            .title{
                .brand{
                    display: inline-block;
                    width: 30px;
                    height: 18px;
                    background: url('../../src/assets/img/brand@2x.png') no-repeat;
                    background-size: 30px 18px;
                    vertical-align: top;
                }
                .name{
                    font-size: 16px;
                    font-weight: 900;
                }
            }
            .desc{
                margin:8px 0 10px 0;
                font-size: 12px;
            }
            .supports{
                font-size: 12px;
                span{
                    display: inline-block;
                }
                .icon{
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
            }
            .num-wrapper{
                color: #fff;
                position: absolute;
                right: 12px;
                bottom: 12px;
                padding:7px 8px;
                background-color:rgba(0,0,0,0.2);
                border-radius: 12px;
                font-size: 12px;
                
            }
        }
    }
    .buttetin-wrapper{
        position: relative;
        height: 28px;
        background-color: rgba(7,17,27,0.2);
        padding:0 12px;
        line-height: 28px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 10px;
        color: #fff;
        .butterin-icon{
            display: inline-block;
            vertical-align:middle;
            width: 22px;
            height: 12px;
            background: url('../assets/img/bulletin@2x.png');
            background-size: 22px 12px;
            margin-right: 4px;
        }
        .butterin{
            vertical-align: middle;
        }
        .more{
            position: absolute;
            right: 8px;
            top:10px ;
            font-size: 12px;
        }
      
    }
    .bg{
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        filter:blur(10px);
        img{
            background-size: cover;
            width: 100%;
        }
    }
    .detail{
        position: fixed;
        overflow: auto;
        background: rgba(7,17,27,0.8);
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        .detail-wrapper{
            width: 100%;
            min-height: 100%;//如果内容不够长时，也保证内容有全屏长度
            .detail-main{
                margin-top: 64px;
                padding-bottom: 64px;
                color: #fff;
                .name{
                    font-size: 16px;
                    font-weight: 700;
                    text-align: center;
                }
            }
        }
        .detail-close{
            width: 32px;
            height: 32px;
            position: relative;
            margin:-64px auto 0;
            .icon-close{
                font-size: 32px;
                color: #fff;
            }
        }
    }
}
</style>

