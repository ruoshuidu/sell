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
            size:Number,
            score:Number
        }
    },
    computed:{
        starType() {
            return 'star-' + this.score
        },
        itemClasses(){
            let result = [];
            let score = Math.floor(this.score * 2) / 2
            let hasDecinal = score % 1 !== 0
            let integer = Math.floor(score)
            for(let i = 0; i < integer; i ++){
                result.push(CLS_ON)
                console.log(result)
            }
            if(hasDecinal){
                result.push(CLS_HALF)
            }
            while(result.length <= LENGTH){
                result.push(CLS_off)
                 
            }
            return result
                  
        }
    }
}
</script>
<style lang="less" scoped>
    // .star{
    //     font-size: 0;
    //     .star-item{
    //         display: inline-block;
    //         background-repeat: no-repeat;
    //     }
    //     &.star-48{
    //         .star-item{
    //             width: 20px;
    //             height: 20px;
    //             margin-right: 22px;
    //             &:last-child{
    //                 margin-right: 0;
    //             }
    //             &.on{
    //                 background: url('../assets/img/star48_on@2x.png')
    //             }
    //             &.half{
    //                  background: url('../assets/img/star48_half@2x.png')
    //             }
    //             &.off{
    //                  background: url('../assets/img/star48_off@2x.png')
    //             }
    //         }
    //     }
      

    // }
    .star{
        font-size: 0;
    }
    &.star-48{
        .star-item{
            display: inline-block;
            background-repeat: no-repeat;
            width: 20px;
            height: 20px;
            margin-right: 22px;
           
            &.on{
                background: url('../assets/img/star48_on@2x.png')
            }
            &.half{
                    background: url('../assets/img/star48_half@2x.png')
            }
            &.off{
                    background: url('../assets/img/star48_off@2x.png')
            }
        }
    }
</style>
