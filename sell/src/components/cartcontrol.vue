<template>
    <div id="cartcontrol">
        <span class="decrease icon-remove_circle_outline" v-show="food.count > 0" @click="remove">
        </span>
        <span class="count"  v-show="food.count > 0">{{food.count}}</span>
        <span class="increase icon-add_circle" @click="add"></span>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    props:{
        food:{
            type:Object
        }
    },
    data() {
        return {

        }
    },
    created(){
       
    },
    methods: {
        remove(event) {
            if(!event._constructed){
                return
            }
            if(this.food.count !== 0){
                this.food.count --
            }
        },
        add(event) {
            if(!event._constructed){
               return
            }
            if(!this.food.count){
                Vue.set(this.food,'count',1)
            }else{
                this.food.count ++
            }
        }
    }
}
</script>
<style lang="less" scoped>
@import '../../static/style.css';
#cartcontrol{
    .decrease, .increase{
        display: inline-block;
        color:rgb(0,160,240);
        line-height: 24px;
        padding: 6px;
    }
    .icon-remove_circle_outline,.icon-add_circle{
        font-size: 24px;
        color:rgb(0,160,240);
    }
    .count{
        width: 12px;
        display: inline-block;
        font-size: 16px;
        vertical-align:top;
        line-height: 36px;
    }
}
</style>
