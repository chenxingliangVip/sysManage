<template>
    <div class="ProductLine2" v-bind:style="style">
		<nx-full-screen class="allfull screenfull" style="float: right; position: relative;    z-index: 111;"></nx-full-screen>
        <div class="header">
            <p>聚合 · 3号生产线可视化看板</p>
            <div class="TimeForm">
                <p class="time">{{nowDate}} {{nowWeek}} {{nowTime}} </p>
            </div>
        </div>
        <div class="main_contain">
            <div class="progress">
                <div class="echart" ref="echart"></div>
            </div>
            <div class="el">
                <div class="col_list">
                    <div class="border left-top"></div>
                    <div class="border left-bottom"></div>
                    <div class="border right-top"></div>
                    <div class="border right-bottom"></div>
                    <p class="tab_name">
                        <span class="name">批次号：</span>
                        <span class="value">P1912063</span>
                    </p>
                    <p class="tab_name">
                        <span class="name">名称：</span>
                        <span class="value">聚山梨酯20</span>
                    </p>
                    <p class="tab_name">
                        <span class="name">编码：</span>
                        <span class="value">E010232</span>
                    </p>
                    <p class="tab_name">
                        <span class="name">规格：</span>
                        <span class="value">药用级</span>
                    </p>
                </div>
                <div class="col_list">
                    <div class="border left-top"></div>
                    <div class="border left-bottom"></div>
                    <div class="border right-top"></div>
                    <div class="border right-bottom"></div>
                    <p class="tab_name">
                        <span class="name">开机时间：</span>
                        <span class="value">2020-05-01 16:00</span>
                    </p>
                    <p class="tab_name">
                        <span class="name">当前阶段：</span>
                        <span class="value">M2聚合</span>
                    </p>
                    <p class="tab_name">
                        <span class="name">标准工时：</span>
                        <span class="value">8小时</span>
                    </p>
                    <p class="tab_name">
                        <span class="name">已用时：</span>
                        <span class="value">4.3小时</span>
                    </p>
                </div>
                <div style="clear: both"></div>
            </div>
            <div class="el">
                <div class="col_list col_list2">
                    <div class="border left-top"></div>
                    <div class="border left-bottom"></div>
                    <div class="border right-top"></div>
                    <div class="border right-bottom"></div>
                    <p class="tab_name">
                        <span class="name">生产部门：</span>
                        <span class="value">聚合部</span>
                    </p>
                    <p class="tab_name">
                        <span class="name">当前班组：</span>
                        <span class="value">2组</span>
                    </p>
                    <p class="tab_name">
                        <span class="name">班次：</span>
                        <span class="value">白班 08:00 – 16:00</span>
                    </p>
                    <p class="tab_name">
                        <span class="name">负责人：</span>
                        <span class="value">徐小伟</span>
                    </p>
                    <div style="clear: both"></div>
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
@import '@/assets/style/ProductLine.scss'
</style>