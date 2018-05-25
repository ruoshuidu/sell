<template>
    <div class="star" :class="starType">
        <span class="star-item" :class="itemClass" v-for="itemClass in itemClasses"></span>
    </div>
</template>
<script>
const LENGTH = 5;
const CLS_ON = 'on'
const CLS_off = 'off'
const CLS_HALF = 'half'
export default {
    data() {
        return {
            size: { 
                type: Number
            },
            score:{
                type:Number
            }
        }
    },
    computed:{
        starType(){ //通过计算属性,返回组装过的类型,用来对应class类型
            return 'star-48'
        },
        itemClasses(){
            let result = [];
            let score = Math.floor(this.score * 2) / 2
            let hasDecinal = score % 1 !== 0
            let integer = Math.floor(score)
            for(let i = 0; i < integer; i ++){
                result.push(CLS_ON)
            }
            if(hasDecinal){
                result.push(CLS_HALF)
            }
            while(result.length < LENGTH){
                result.push(CLS_off)
                 
            }
            return result
                  
        }
    }
}
</script>
<style lang="less" scoped>
    .star{
        font-size: 0;
        text-align: center;
        margin:20px auto 30px;
        .star-item{
            display: inline-block;
            background-repeat: no-repeat !important;
        }
        &.star-48{
            .star-item{
                width: 20px;
                height: 20px;
                margin-right: 22px;
                &:last-child{
                    margin-right: 0;
                }
                &.on{
                    background: url('../assets/img/star48_on@2x.png');
                    background-size: 20px 20px;
                }
                &.half{
                    background: url('../assets/img/star48_half@2x.png');
                    background-size: 20px 20px;
                }
                &.off{
                    background: url('../assets/img/star48_off@2x.png');
                    background-size: 20px 20px;
                }
            }
        }
        &.star-36{
            .star-item{
                width: 15px;
                height: 15px;
                margin-right: 6px;
                &:last-child{
                    margin-right: 0;
                }
                &.on{
                    background: url('../assets/img/star36_on@2x.png');
                    background-size: 15px 15px;
                }
                &.half{
                    background: url('../assets/img/star36_half@2x.png');
                    background-size: 15px 15px;
                }
                &.off{
                    background: url('../assets/img/star36_off@2x.png');
                    background-size: 15px 15px;
                }
            }
        }
        &.star-24{
            .star-item{
                width: 10px;
                height: 10px;
                margin-right: 3px;
                &:last-child{
                    margin-right: 0;
                }
                &.on{
                    background: url('../assets/img/star24_on@2x.png');
                    background-size: 10px 10px;
                }
                &.half{
                    background: url('../assets/img/star24_half@2x.png');
                    background-size: 10px 10px;
                }
                &.off{
                    background: url('../assets/img/star24_off@2x.png');
                    background-size: 10px 10px;
                }
            }
        }

    }

</style>
