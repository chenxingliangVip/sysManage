<template>
    <div class="QcMenu" >
        <div @click="getshow(1)" :class="{active:shows == 1}" class="MenuList left">我的任务</div>
        <div @click="getshow(2)" :class="{active:shows == 2}" class="MenuList middle">待领任务</div>
        <div class="clearBoth"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                shows: 1
            }
        },
        methods:{
            getshow(val) {
                this.shows = val
                this.$emit('showFun',this.shows)
            },
        },
    }
</script>

<style lang="scss" scoped>
    .QcMenu {
        width: 100%;margin-bottom: 15px;
        position: relative;
        &::before {
            content: ' ';
            width: 15px;
            height: 1px;
            background: #284358;
            position: absolute;
            left: -15px;
            bottom: 0;
        }
        &::after {
            content: ' ';
            width: calc(100% - 400px);
            height: 1px;
            background: #284358;
            position: absolute;
            right: 0px;
            bottom: 0;
        }
        .MenuList {
            height: 35px;
            line-height: 33px;
            width: 200px;
            float: left;
            text-align: center;
            background: #f7f7f7;
            color: #333;
            font-size: 12px;
            cursor: pointer;
            border-bottom: 1px solid #284358;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            &:hover {
                transition: all .3s;
                background: #fff;
            }
            &.active {
                font-size: 14px;
                transition: all .3s;
                background: #fff;
                border: 1px solid #284358;
                border-bottom: 1px solid #fff;
                box-shadow: 0px -5px 4px -5px #284358;
            }
        }
    }
</style>