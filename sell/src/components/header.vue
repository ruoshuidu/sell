<template>
    <div class="header">
        <div class="header-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" alt="" class="avatar-img">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand "></span>
                    <span>{{seller.name}}</span>
                </div>
            </div>
        </div>
        <div class="buttetin-wrapper">
            
        </div>
        <div class="bg"></div>
    </div>
</template>
<script>
export default {
    props:{
        seller:Object,
    },
   
    created(){
        console.log(this.seller.name)
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
            font-weight: 900;
            .title{
                .brand{
                    display: inline-block;
                    width: 30px;
                    height: 18px;
                    background: url('../../src/assets/img/brand@2x.png') no-repeat;
                    background-size: 30px 18px;
                    vertical-align: top;
                }
            }
        }
    }
}
</style>

