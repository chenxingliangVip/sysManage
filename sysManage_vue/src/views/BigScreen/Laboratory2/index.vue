<template>
    <div class="Laboratory2">
		<nx-full-screen class="allfull screenfull" style="position: absolute;z-index: 111;right: 0;"></nx-full-screen>
        <div class="header_top">
			<div class="header">
				<h1 class="header-title">威尔研究院 · 智慧实验室安全运营平台</h1>
			</div> 
            <div class="header_date">
                <img class="img_safe" src="@/assets/img/safe.png" alt="">
                <div class="safe">
                    <p class="safe_txt">安全运行</p>
                    <p class="safe_txt"><span>150</span> 天</p>
                </div>
                <div class="safe">
                    <p class="safe_date">{{nowDate}} {{nowWeek}}</p>
                    <p class="safe_date">{{nowTime}}</p>
                </div>
            </div>
            <div class="header_weather">
                <img class="weatherImg" :src="weatherImg" alt="">
                <p class="weather">{{weatherType}} {{weather}}</p>
            </div>
        </div>
        <div class="main_body">
            <div class="main_left">
                <div class="box-contain">
                    <div class="title-nav">
                        <img class="imgzu" src="@/assets/img/zu10.png" alt="">
                        <h1>温湿度</h1>
                    </div>
                    <div class="box-body">

                    </div>
                </div>
                <div class="box-contain">
                    <div class="title-nav">
                        <img class="imgzu" src="@/assets/img/zu10.png" alt="">
                        <h1>气体防泄露实时监测</h1>
                    </div>
                    <div class="box-body">

                    </div>
                </div>
            </div>
            <div class="main_middle">

            </div>
            <div class="main_right">
                <div class="box-contain">
                    <div class="title-nav">
                        <img class="imgzu" src="@/assets/img/zu11.png" alt="">
                        <h1>研究院概况</h1>
                    </div>
                    <div class="box-body">
                        <div class="item_part">
                            <li class="nav">
                                <span class="left">研发人员</span>
                                <span class="middle">109</span>
                                <span class="right">人</span>
                            </li>
                            <li class="nav nav2">
                                <span class="left">年度在研项目</span>
                                <span class="middle">32</span>
                                <span class="right">项</span>
                            </li>
                            <li class="nav">
                                <span class="left">年度结题项目</span>
                                <span class="middle">3</span>
                                <span class="right">项</span>
                            </li>
                            <li class="nav nav2">
                                <span class="left">年度上市新品</span>
                                <span class="middle">6</span>
                                <span class="right">个</span>
                            </li>
                            <li class="nav">
                                <span class="left">年度申请专利</span>
                                <span class="middle">8</span>
                                <span class="right">个</span>
                            </li>
                        </div>
                    </div>
                </div>
                <div class="box-contain">
                    <div class="title-nav">
                        <img class="imgzu" src="@/assets/img/zu11.png" alt="">
                        <h1>公告</h1>
                    </div>
                    <div class="box-body">
                        <div class="item_part2">
                            <h2>公告标题</h2>
                            <div class="txt">
                                <p>加油加油加加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油加油油</p>
                            </div>
                            <div class="time">2021年4月21日</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clearBoth"></div>
        </div>
        <div class="last_bottom">
            <div class="box-contain">
                <div class="title-nav">
                    <div class="nav1"></div>
                    <div class="nav2"></div>
                    <div class="nav3"></div>
                </div>
                <div class="box-body">
                    <div class="imgList">
                        <img src="@/assets/img/testimg.jpg" alt="">
                        <p class="txt">903 微生物</p>
                    </div>
                    <div class="imgList">
                        <img src="@/assets/img/testimg.jpg" alt="">
                        <p class="txt">903 微生物</p>
                    </div>
                    <div class="imgList">
                        <img src="@/assets/img/testimg.jpg" alt="">
                        <p class="txt">903 微生物</p>
                    </div>
                    <div class="imgList">
                        <img src="@/assets/img/testimg.jpg" alt="">
                        <p class="txt">903 微生物</p>
                    </div>
                    <div class="imgList">
                        <img src="@/assets/img/testimg.jpg" alt="">
                        <p class="txt">903 微生物</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0"></script>
<script>
import nxFullScreen from '@/components/nx-full-screen/index'
import axios from 'axios'

export default {
    components: {
        nxFullScreen
    },
    data() {
        return {
            nowTime: '',
            nowDate: '',
            nowWeek: '',
            weather: '',
            weatherType: '',
            weatherImg: require("@/assets/img/qing.png")
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
        getWeather() {
            let _this = this
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city=南京').then(function(res){
                let weatherData = res.data.data.forecast[0];
                _this.weather = parseInt(weatherData.low.substring(2)) + '-' + parseInt(weatherData.high.substring(2)) + '°C'
                _this.weatherType = weatherData.type
                
                console.log(res.data.data);
                if(_this.weatherType == '晴') {
                    _this.weatherImg = require("@/assets/img/qing.png")
                }else if(_this.weatherType == '多云') {
                    _this.weatherImg = require("@/assets/img/duoyun.png")
                }else if(_this.weatherType == '阴') {
                    _this.weatherImg = require("@/assets/img/yintian.png")
                }else if(_this.weatherType == '阵雨') {
                    _this.weatherImg = require("@/assets/img/zhenyu.png")
                }else if(_this.weatherType == '雷阵雨') {
                    _this.weatherImg = require("@/assets/img/leizhenyu.png")
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
    },
    mounted() {
        setInterval(() => {
            this.getdateFormat()
        }, 1000);
        this.getWeather()
    }
}
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>