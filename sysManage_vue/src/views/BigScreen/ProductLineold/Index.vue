<template>
    <div class="ProductLine" v-bind:style="style">
		<nx-full-screen class="allfull screenfull" style="float: right; position: relative;    z-index: 111;"></nx-full-screen>
        <div class="header">
            <p>威尔药业 · 产线实时看板</p>
            <div class="TimeForm">
                <p class="time">{{nowDate}} {{nowWeek}} {{nowTime}} </p>
            </div>
        </div>
        <div class="main_contain">
            <div class="el">
                <div class="col_list">
                    <p class="tab_name">
                        <span class="name name1">名称：</span>
                        <span class="value">聚山梨酯20</span>
                    </p>
                    <p class="tab_name">
                        <span class="name name1">规格：</span>
                        <span class="value">药用级</span>
                    </p>
                    <p class="tab_name">
                        <span class="name name1">编码：</span>
                        <span class="value">E010232</span>
                    </p>
                </div>
                <div class="col_list">
                    <p class="tab_name">
                        <span class="name name2">计划开始：</span>
                        <span class="value">2020-05-01</span>
                    </p>
                    <p class="tab_name">
                        <span class="name name2">实际开始：</span>
                        <span class="value">2020-05-01</span>
                    </p>
                </div>
                <div class="col_list">
                    <p class="tab_name">
                        <span class="name name3">计划结束：</span>
                        <span class="value">2020-05-20</span>
                    </p>
                    <p class="tab_name">
                        <span class="name name3">实际结束：</span>
                        <span class="value">2020-05-20</span>
                    </p>
                </div>
                <div style="clear: both"></div>
            </div>
            <div class="progress">
                <div class="border left-top"></div>
                <div class="border left-bottom"></div>
                <div class="border right-top"></div>
                <div class="border right-bottom"></div>
                <h1>P191212028   <span>/</span>    聚合生产线 · JD01</h1>
                <div class="echart" ref="echart"></div>
            </div>
            <div>
                <div class="col_list2">
                    <p class="tab_name">
                        <span class="name name4">生产部门：</span>
                        <span class="value">2部</span>
                    </p>
                    <p class="tab_name">
                        <span class="name name4">当前班组：</span>
                        <span class="value">2组</span>
                    </p>
                </div>
                <div class="col_list2">
                    <p class="tab_name">
                        <span class="name name5">班次：</span>
                        <span class="value">白班 08:00 – 16:00</span>
                    </p>
                    <p class="tab_name">
                        <span class="name name5">负责人：</span>
                        <span class="value">徐小伟</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import resize from '@/assets/js/resize'
import echartOption from './echart'
import nxFullScreen from '@/components/nx-full-screen/index'
export default {
    data() {
        return {
            style: {}, //缩放样式
            nowTime: '',
            nowDate: '',
            nowWeek: '',
        }
    },
    methods: {
        pageShow() { 
            this.style = resize.setScale();
            window.onresize = () => {
                this.style = resize.setScale();
            }
        },
        getEchartData() {  //进度条
            let echart = this.$echarts.init(this.$refs.echart);
            echart.setOption(echartOption.option)
        },
        getdateFormat() { //显示时间
            var _this = this;
            let wk = new Date().getDay()
            let yy = String(new Date().getFullYear())
            let mm = new Date().getMonth() + 1
            let dd = String(new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate())
            let hou = String(new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours())
            let min = String(new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes())
            let sec = String(new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds())
            let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            let week = weeks[wk]

            _this.nowTime = hou + ':' + min + ':' + sec;
            _this.nowDate = yy + '/' + mm + '/' + dd
            _this.nowWeek = week
        },
    },
    mounted() {
        // this.pageShow()
        this.getEchartData()
		setInterval(() => {
            this.getdateFormat()
        }, 1000);
    },
    components: {
        nxFullScreen
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/bigScreen.scss'
</style>