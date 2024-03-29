var TP_value = 30;

//温度图
var kd = [];
var showValue = '';
var boxPosition = [65, 0];
// 刻度使用柱状图模拟，短设置1，长的设置3；构造一个数据
for (var i = 0, len = 135; i <= len; i++) {
    if (i < 10 || i > 130) {
        kd.push('')
    } else {
        if ((i - 10) % 20 === 0) {
            kd.push('-3');
        } else if ((i - 10) % 4 === 0) {
            kd.push('-1');
        } else {
            kd.push('');
        }
    }

}
if (TP_value > 62) {
    showValue = 62
} else {
    if (TP_value < -60) {
        showValue = -60
    } else {
        showValue = TP_value
    }
}
if (TP_value < -10) {
    boxPosition = [65, -120];
}

export default {
    //温度
    optionTemperature: { // 因为柱状初始化为0，温度存在负值，所以加上负值60和空出距离10
        grid: {
            top: 20,
            left: 40,
            bottom: 20,
        },
        yAxis: [{
            show: false,
            data: [],
            min: 0,
            max: 135,
            axisLine: {
                show: false
            }
        }, {
            show: false,
            min: 0,
            max: 50,
        }, {
            type: 'category',
            data: ['', '', '', '', '', '', '', '', '', '', ''],
            position: 'left',
            offset: -80,
            axisLabel: {
                fontSize: 10,
                color: 'white'
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
        }],
        xAxis: [{
            show: false,
            min: -100,
            max: 80,
            data: []
        }, {
            show: false,
            min: -100,
            max: 80,
            data: []
        }, {
            show: false,
            min: -100,
            max: 80,
            data: []
        }, {
            show: false,
            min: -5,
            max: 80,

        }],
        series: [{
            name: '条',
            type: 'bar',
            // 对应上面XAxis的第一个对)象配置
            xAxisIndex: 0,
            data: [{
                value: (showValue + 70),
            }],
            barWidth: 6,
            itemStyle: {
                normal: {
                    color: "#e2476e"
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            xAxisIndex: 1,
            barGap: '-100%',
            data: [134],
            barWidth: 9,
            itemStyle: {
                normal: {
                    color: '#0C2E6D',
                    barBorderRadius: 50,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            xAxisIndex: 2,
            barGap: '-100%',
            data: [135],
            barWidth: 14,
            itemStyle: {
                normal: {
                    color: '#4577BA',
                    barBorderRadius: 50,
                }
            },
            z: 0
        }, {
            name: '圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 0,
            symbolSize: 18,
            itemStyle: {
                normal: {
                    color: '#e2476e',
                    opacity: 1,
                }
            },
            z: 2
        }, {
            name: '白圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 1,
            symbolSize: 22,
            itemStyle: {
                normal: {
                    color: '#0C2E6D',
                    opacity: 1,
                }
            },
            z: 1
        }, {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0],
            xAxisIndex: 2,
            symbolSize: 26,
            itemStyle: {
                normal: {
                    color: '#4577BA',
                    opacity: 1,
                }
            },
            z: 0
        }, {
            name: '刻度',
            type: 'bar',
            yAxisIndex: 0,
            xAxisIndex: 3,
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    distance: 10,
                    color: 'white',
                    fontSize: 12,
                    formatter: function (params) {
                        if (params.dataIndex > 130 || params.dataIndex < 10) {
                            return '';
                        } else {
                            if ((params.dataIndex - 10) % 20 === 0) {
                                return params.dataIndex - 70;
                            } else {
                                return '';
                            }
                        }
                    }
                }
            },
            barGap: '-100%',
            data: kd,
            barWidth: 1,
            itemStyle: {
                normal: {
                    color: 'white',
                    barBorderRadius: 120,
                }
            },
            z: 0
        }]
    },
}