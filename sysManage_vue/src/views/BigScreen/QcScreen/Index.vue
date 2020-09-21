<template>
    <div class="QcScreen" v-bind:style="style">
		<nx-full-screen class="allfull screenfull" style="float: right; position: relative;    z-index: 111;"></nx-full-screen>
        <div class="header">
            <p>在产阶段QC检验可视化看板</p>
        </div>
        <div class="head-msg">
            <div class="left_part">
                <div class="icon">
                    <img src="@/assets/img/sunshine.png">
                </div>
                <div class="txt">
                    <p class="date">253 天</p>
                    <p class="state">稳定运行</p>
                </div>
            </div>
            <div class="middle_part">
                <div class="col">
                    <span>收载样品数：</span>
                    <span>1550个</span>
                </div>
                <div class="col">
                    <span>分析方法：</span>
                    <span>336种</span>
                </div>
                <div class="col">
                    <span>分析人员：</span>
                    <span>8名</span>
                </div>
                <div style="clear: both"></div>
            </div>
            <div class="right_part">
                <p class="time">{{nowTime}}</p>
                <p class="date">{{nowDate}} {{nowWeek}}</p>
            </div>
        </div>
        <div class="main_contain">
            <div class="main_list">
                <div class="title">实时QC送检检验信息</div>
                <table>
                    <tr>
                        <th width="10%">批次号</th>
                        <th width="20%">样品名称</th>
                        <th width="8%">规格</th>
                        <th width="8%">阶段</th>
                        <th width="11%">送检日期</th>
                        <th width="8%">送样状态</th>
                        <th width="8%">检验状态</th>
                        <th width="8%">检验人</th>
                        <th width="8%">检验结果</th>
                        <th width="11%">日期</th>
                    </tr>
                    <tr v-for="(item,index) in sampleTable" :key="index">
                        <td width="10%">{{ item.tabledata1 }}</td>
                        <td width="20%">{{ item.tabledata2 }}</td>
                        <td width="8%">{{ item.tabledata3 }}</td>
                        <td width="8%">{{ item.tabledata4 }}</td>
                        <td width="11%">{{ item.tabledata5 }}</td>
                        <td width="8%" v-if="item.tabledata6 == '未送样'" style="color: #F56C6C">{{ item.tabledata6 }}</td>
                        <td width="8%" v-else>{{ item.tabledata6 }}</td>
                        <td width="8%">{{ item.tabledata7 }}</td>
                        <td width="8%">{{ item.tabledata8 }}</td>
                        <td width="8%">{{ item.tabledata9 }}</td>
                        <td width="11%">{{ item.tabledata10 }}</td>
                    </tr>
                </table>
            </div>
            <div class="main_bottom">
                <el-row>
                    <el-col :span="7">
                        <div class="main_list">
                            <div class="title">月检测统计</div>
                            <div class="echart1" ref="echart1"></div>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div class="main_list">
                            <div class="txt_nav">
                                <h2>
                                    <span>公平公正</span>
                                    <span class="line">|</span>
                                    <span>及时准确</span>
                                    <span class="line">|</span>
                                    <span>持续优化</span>
                                </h2>
                                <h3>
                                    <span class="float">质量标准：</span>
                                    <p>
                                        <span>及时率 >85%</span>
                                        <span>差错率 <0.5%</span>
                                    </p>
                                    <p>
                                        <span>持证上岗率 100%</span>
                                        <span>满意度 >95分</span>
                                    </p>
                                </h3>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="7">
                        <div class="main_list">
                            <div class="last">月度检测排名</div>
                            <div class="echart1 echart">
                                <div class="body-left">
                                    <div class="icons">
                                        <img src="@/assets/img/paihang.png" />
                                        <p class="txt">工作量</p>
                                    </div>
                                    <ul class="workTable">
                                        <li  v-for="(item,index) in workTime" :key="index">
                                            <p class="workPart1"> {{ index + 1 }}</p>
                                            <p class="workPart2">
                                                <span class="workMame">{{ item.name }}</span> （
                                                <span class="workTime">{{ item.time }}</span>小时 ）
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <!--及时率排行-->
                                <div class="body-right">
                                    <div class="icons">
                                        <img src="@/assets/img/paihang.png" />
                                        <p class="txt">及时率</p>
                                    </div>
                                    <ul class="workTable">
                                        <li v-for="(item,index) in workRate" :key="index">
                                            <p class="workPart1"> {{ index + 1 }}</p>
                                            <p class="workPart2">
                                                <span class="workMame">{{ item.name }}</span> （
                                                <span class="workTime">{{ item.value }}</span>% ）
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
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
            sampleTable: [
                {
                    tabledata1: 'P1912045',
                    tabledata2: '磷酸二钠钠',
                    tabledata3: '药用级',
                    tabledata4: 'M2聚合',
                    tabledata5: '2020-07-12 16:30',
                    tabledata6: '未送样',
                    tabledata7: '代领检',
                    tabledata8: '',
                    tabledata9: '',
                    tabledata10: '',
                }, {
                    tabledata1: 'P1912045',
                    tabledata2: '磷酸二钠',
                    tabledata3: '药用级',
                    tabledata4: 'M2聚合',
                    tabledata5: '2020-07-12 16:30',
                    tabledata6: '已送样',
                    tabledata7: '检验中',
                    tabledata8: '李伟',
                    tabledata9: '',
                    tabledata10: '',
                }, {
                    tabledata1: 'P1912045',
                    tabledata2: '磷酸二钠',
                    tabledata3: '药用级',
                    tabledata4: 'M2聚合',
                    tabledata5: '2020-07-12 16:30',
                    tabledata6: '已送样',
                    tabledata7: '已完成',
                    tabledata8: '李四',
                    tabledata9: '合格',
                    tabledata10: '2020-07-12 16:30',
                }, {
                    tabledata1: 'P1912045',
                    tabledata2: '磷酸二钠',
                    tabledata3: '药用级',
                    tabledata4: 'M2聚合',
                    tabledata5: '2020-07-12 16:30',
                    tabledata6: '已送样',
                    tabledata7: '已完成',
                    tabledata8: '张三',
                    tabledata9: '不合格',
                    tabledata10: '2020-07-12 16:30',
                }, {
                    tabledata1: 'P1912045',
                    tabledata2: '磷酸二钠',
                    tabledata3: '药用级',
                    tabledata4: 'M2聚合',
                    tabledata5: '2020-07-12 16:30',
                    tabledata6: '未送样',
                    tabledata7: '已完成',
                    tabledata8: '张三',
                    tabledata9: '合格',
                    tabledata10: '2020-07-12 16:30',
                }, {
                    tabledata1: 'P1912045',
                    tabledata2: '磷酸二钠',
                    tabledata3: '药用级',
                    tabledata4: 'M2聚合',
                    tabledata5: '2020-07-12 16:30',
                    tabledata6: '未送样',
                    tabledata7: '已完成',
                    tabledata8: '张三',
                    tabledata9: '合格',
                    tabledata10: '2020-07-12 16:30',
                }, 
            ],
            workTime: [
                {
                    name: '张三',
                    time: '100',
                }, {
                    name: '张三',
                    time: '100',
                }, {
                    name: '张三',
                    time: '100',
                }, {
                    name: '张三',
                    time: '100',
                }, {
                    name: '张三',
                    time: '100',
                }, {
                    name: '张三',
                    time: '100',
                },
            ],
            workRate: [
                {
                    name: '张三',
                    value: '99',
                }, {
                    name: '张三',
                    value: '99',
                }, {
                    name: '张三',
                    value: '99',
                }, {
                    name: '张三',
                    value: '99',
                }, {
                    name: '张三',
                    value: '99',
                }, {
                    name: '张三',
                    value: '99',
                }
            ]
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
            let echart = this.$echarts.init(this.$refs.echart1);
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
        barActive() {//自动高亮
            let echart = this.$echarts.init(this.$refs.echart1);
            let index = -1 //高亮所在下标
            let dataLength = echartOption.option.series[0].data.length
            setInterval(()=>{ // 清除之前的高亮
                echart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: index
                })
                index = (index + 1) % dataLength // 当前下标高亮
                echart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: index
                })
				echart.dispatchAction({
					type: 'showTip',
					seriesIndex: 0,
					dataIndex: index
				});
                if (index > dataLength) {
                    index = 0
                }
            }, 2000)
        }
    },
    mounted() {
        // this.pageShow()
        this.getEchartData()
        this.barActive()
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