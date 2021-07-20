<template>
	<div class="mainViewBig ">
		<nx-full-screen class="allfull screenfull" style="position: absolute;z-index: 111;right: 0;"></nx-full-screen>
		<!--左 侧 列-->
		<div class="content-item1">
			<!--模块一  温度湿度-->
			<div class="item1-module1">
				<div class="module-top">
					<img class="left" src="@/assets/img/iconfont.png" />
					<h2 class="module-title">温度湿度</h2>
                    <div class="right-icon"></div>
                    <img class="img_bottom" src="@/assets/img/ksh33.png" alt="">
				</div>
				<div class="module-body">
                    <div class="border left-top"></div>
                    <div class="border left-bottom"></div>
                    <div class="border right-top"></div>
                    <div class="border right-bottom"></div>
					<div class="item_part">
                        <div class="part-list">
                            <div class="echart_temperature" ref="echartT"></div>
                            <div class="value">
                                <p>平均值：<span class="num">20.3</span></p>
                                <p>最大值：<span class="num">24.7</span></p>
                                <p>最小值：<span class="num">18.6</span></p>
                            </div>
                        </div>
                        <div class="part-list">
                            <div class="echart_humidity" ref="echartH"></div>
                            <div class="value">
                                <p>平均值：<span class="num h">46.5</span></p>
                                <p>最大值：<span class="num h">56.9</span></p>
                                <p>最小值：<span class="num h">32.4</span></p>
                            </div>
                        </div>
                    </div>
					<div class="echart_bar" ref="echartBar"></div>
				</div>
			</div>
			<!--模块二  烟感可燃气监控-->
			<div class="item1-module2">
				<div class="module-top">
					<img class="left" src="@/assets/img/iconfont.png" />
					<h2 class="module-title">烟感可燃气监控</h2>
                    <div class="right-icon"></div>
                    <img class="img_bottom" src="@/assets/img/ksh33.png" alt="">
				</div>
				<div class="module-body">
                    <div class="border left-top"></div>
                    <div class="border left-bottom"></div>
                    <div class="border right-top"></div>
                    <div class="border right-bottom"></div>
					<!--柱状图-->
					<div class="item_part">
                        <div class="echart_list" ref="echartYan"></div>
                        <div class="echart_list" ref="echartRan"></div>
                    </div>
				</div>
			</div>
			<!--模块三  排风系统-->
			<div class="item1-module3">
				<div class="module-top">
					<img class="left" src="@/assets/img/iconfont.png" />
					<h2 class="module-title">排风系统</h2>
                    <div class="right-icon"></div>
                    <img class="img_bottom" src="@/assets/img/ksh33.png" alt="">
				</div>
				<div class="module-body">
                    <div class="border left-top"></div>
                    <div class="border left-bottom"></div>
                    <div class="border right-top"></div>
                    <div class="border right-bottom"></div>
					<div class="item_part">
                        <div class="table_list">
                            <h2>开启风机<span>5个</span></h2>
                            <vue-seamless-scroll :data="openFj" class="seamless-warp" :class-option="classOption">
                                <ul class="table_list-item">
                                    <li v-for="(item,index) in openFj" :key="index">
                                        <p class="nav">风机编号：{{item.name}}</p>
                                        <div class="nav2">
                                            <p>风机状态：<span>开启</span></p>
                                            <p>风机风压：<span>{{item.fy}}</span></p>
                                        </div>
                                    </li>
                                </ul>
                            </vue-seamless-scroll>
                        </div>
                        <div class="table_list">
                            <h2>关闭风机<span>25个</span></h2>
                            <vue-seamless-scroll :data="openGb" class="seamless-warp" :class-option="classOption">
                                <ul class="table_list-item">
                                    <li v-for="(item,index) in openGb" :key="index">
                                        <p class="nav">风机编号：{{item.name}}</p>
                                        <div class="nav2">
                                            <p>风机状态：<span>关闭</span></p>
                                            <p>风机风压：<span>{{item.fy}}</span></p>
                                        </div>
                                    </li>
                                </ul>
                            </vue-seamless-scroll>
                        </div>
                    </div>
				</div>
			</div>

		</div>

		<!--中间列-->
		<div class="content-item2">
			<!--头部-->
			<div class="header">
				<h1 class="header-title">威尔药业智慧实验室</h1>
			</div>
			<div class="middle">
				<!-- 时间日期-->
				<div class="middleLeft">
                    <div class="middleLeft_top"> 
                        <div class="TimeForm">
                            <p class="time">{{nowTime}}</p>
                            <p class="date">{{nowDate}} {{nowWeek}}</p>
                        </div>
                        <div class="DateForm">
                            <p>
                                <img src="@/assets/img/tianqi.png" />稳定运行
                            </p>
                            <p><span>13</span> 天</p>
                        </div>
                    </div>
                    <div class="echart_scatter" ref="echartScatter"></div>
				</div>
				<div class="middleRight">
                    <div class="echart_map" ref="echartMap"></div>
				</div>
			</div>
			<!--中间表格 实时送样信息-->
			<div class="bottom">
				<div class="module-top" style="width: 305px">
					<img class="left" src="@/assets/img/iconfont.png" />
					<h2 class="module-title">巡检日志</h2>
                    <div class="right-icon"></div>
                    <img class="img_bottom" src="@/assets/img/ksh33.png" alt="">
				</div>
				<div class="module-table">
					<table>
						<tr>
                            <th width="40%">巡检时间</th>
                            <th width="60%">巡检信息</th>
						</tr>
						<tr v-for="(item,index) in sampleTable" :key="index">
							<td width="40%"><p class="listTime">{{item.time}}</p></td>
							<td width="60%"><p class="listName">{{item.txt}}</p></td>
						</tr>
					</table>
				</div>
			</div>
		</div>

		<!--右侧列-->
		<div class="content-item3">
			<!--模块一 视频监控-->
			<div class="item3-module1">
				<div class="module-top">
					<img class="left" src="@/assets/img/iconfont.png" />
					<h2 class="module-title">视频监控·摄像头06：515实验室</h2>
                    <div class="right-icon"></div>
                    <img class="img_bottom" src="@/assets/img/ksh33.png" alt="">
				</div>
				<div class="item3-moduleImg">
					<img class="lunboImg" src="@/assets/img/testimg.jpg">
				</div>
			</div>
			<!--模块二 研发信息-->
			<div class="item3-module2">
				<div class="module-top">
					<img class="left" src="@/assets/img/iconfont.png" />
					<h2 class="module-title">研发信息</h2>
                    <div class="right-icon"></div>
                    <img class="img_bottom" src="@/assets/img/ksh33.png" alt="">
				</div>
				<div class="module2-body">
                    <div class="border left-top"></div>
                    <div class="border left-bottom"></div>
                    <div class="border right-top"></div>
                    <div class="border right-bottom"></div>
					<div class="item_part">
                        <li class="nav">
                            <span class="left">研发人员</span>
                            <span class="right">109人</span>
                        </li>
                        <li class="nav nav2">
                            <span class="left">年度在研项目</span>
                            <span class="right">32项</span>
                        </li>
                        <li class="nav">
                            <span class="left">年度结题项目</span>
                            <span class="right">3项</span>
                        </li>
                        <li class="nav nav2">
                            <span class="left">年度上市新品</span>
                            <span class="right">6个</span>
                        </li>
                        <li class="nav">
                            <span class="left">年度申请专利</span>
                            <span class="right">8个</span>
                        </li>
                    </div>
				</div>
			</div>
			<!--模块三 公告-->
			<div class="item3-module3">
				<div class="module-top">
					<img class="left" src="@/assets/img/iconfont.png" />
					<h2 class="module-title">公告</h2>
                    <div class="right-icon"></div>
                    <img class="img_bottom" src="@/assets/img/ksh33.png" alt="">
				</div>
				<div class="module2-body">
                    <div class="border left-top"></div>
                    <div class="border left-bottom"></div>
                    <div class="border right-top"></div>
                    <div class="border right-bottom"></div>
					<div class="item_part">
                        <h2>公告标题</h2>
                        <div class="txt">
                            <p>加油加油加加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油油</p>
                        </div>
                        <div class="time">2021年4月21日</div>
                    </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import nxFullScreen from '@/components/nx-full-screen/index'
    import vueSeamlessScroll from 'vue-seamless-scroll'
    import echartsLiquidfill from 'echarts-liquidfill'//在这里引入
	import echartOption1 from './echart1'
	import echartOption2 from './echart2'
	import echartOption3 from './echart3'
	import echartOption4 from './echart4'
	import echartOption5 from './echart5'
	import echartOption6 from './echart6'

	export default {
		name: 'bigScreen',
		components: {
            nxFullScreen, vueSeamlessScroll
		},
		data() {
			return {
                openFj: [{
                    name: '7号风机',
                    fy: '100'
                }, {
                    name: '8号风机',
                    fy: '100'
                }, {
                    name: '9号风机',
                    fy: '100'
                }, {
                    name: '1号风机',
                    fy: '100'
                }, {
                    name: '11号风机',
                    fy: '100'
                }],
                openGb: [{
                    name: '15号风机',
                    fy: '100'
                }, {
                    name: '2号风机',
                    fy: '100'
                }, {
                    name: '6号风机',
                    fy: '100'
                }, {
                    name: '4号风机',
                    fy: '100'
                }, {
                    name: '3号风机',
                    fy: '100'
                }
                ],
                sampleTable:[{
                    time: '04-20 07:36',
                    txt: '404天平室烟感正常'
                }, {
                    time: '04-20 07:36',
                    txt: '402红外室烟感正常'
                }, {
                    time: '04-20 07:36',
                    txt: '407仪器室烟感正常'
                }, {
                    time: '04-20 07:36',
                    txt: '514实验室烟感正常'
                }, {
                    time: '04-20 07:36',
                    txt: '414实验室烟感正常'
                }],
				nowTime: '',
                nowDate: '',
                nowWeek: '',
			}
		},
		methods: {
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
			getEchartData1() { 
                //echart1 温度
				let echart1 = this.$echarts.init(this.$refs.echartT);
				echart1.setOption(echartOption1.optionTemperature)
                
                //echart2 湿度
				let echart2 = this.$echarts.init(this.$refs.echartH);
				echart2.setOption(echartOption2.optionHumidity)

                //echart3 温度湿度柱状图
				let echart3 = this.$echarts.init(this.$refs.echartBar);
				echart3.setOption(echartOption3.optionBar)

                //echart4 烟感扇形图
				let echart4 = this.$echarts.init(this.$refs.echartYan);
				echart4.setOption(echartOption4.optionYan)

                //echart5 可燃气扇形图
				let echart5 = this.$echarts.init(this.$refs.echartRan);
				echart5.setOption(echartOption5.optionRan)

                //echart6 中间
				let echart6 = this.$echarts.init(this.$refs.echartScatter);
				echart6.setOption(echartOption6.optionScatter)

                //echart7 中间
			},
		},
		mounted() {
            setInterval(() => {
                this.getdateFormat()
            }, 1000);
            this.getEchartData1()
		},
        computed: {
            classOption () {
                return {
                    step: 0.15, // 数值越大速度滚动越快
                    limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
                    hoverStop: true, // 是否开启鼠标悬停stop
                    direction: 1, // 0向下 1向上 2向左 3向右
                    openWatch: true, // 开启数据实时监控刷新dom
                    singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
                    singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
                    waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
                }
            }
        }
	}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
