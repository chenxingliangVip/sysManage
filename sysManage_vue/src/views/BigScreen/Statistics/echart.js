var data1 = [87.5, 95.9, 79, 60]; //echart1 产品状态数据
var data2 = [40, 90, 10, 20];//echart2 各生产部准点率
var data3 = [//echart3 各生产部准点率 酯化部
    { "value": 3 },  
    { "value": 6 },
    { "value": 6 }
];
var data4 = [//聚合部
    { "value": 5 },  
    { "value": 4 },
    { "value": 2 }
];
var data5 = [//封端部
    { "value": 10 },  
    { "value": 5 },
    { "value": 7 }
];
var data6 = [//药铺部
    { "value": 4 },  
    { "value": 4 },
    { "value": 8 }
];

export default {
    option1: {
        tooltip: {
            trigger: 'axis',
            padding: [10, 10],
            axisPointer: {
                type: 'shadow'
            },
            formatter: function (param) {
                return param[0].name + "：" + param[0].value
            }
        },
        grid: {
            left: 100,
            right: 48,
            top: 0,
            bottom: 0
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        yAxis: [{
            type: 'category',
            data: ['PEG400\n（20200101）', 'PEG400\n（20200103）', '聚山梨酯20\n（20200105）', '聚山梨酯20\n（20200106）',],
            axisLabel: {
                color: "#eeeeee",
                fontSize: 12,
                lineHeight: 18,
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        }, {
            type: 'category',
            axisTick: 'none',
            axisLine: 'none',
            show: false,
        }],
        series: [{
            name: '',
            type: 'bar',
            data: data1,
            barWidth: 20,
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: {
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [
                            { offset: 0, color: 'rgba(135,183, 232, 1)' },
                            { offset: 1, color: 'rgba(135, 183, 232, 0)' }
                        ]
                    },
                    borderColor: {
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [
                            { offset: 0, color: 'rgba(180,240,255,1)' },
                            { offset: 1, color: 'rgba(15,197,243,1)' }
                        ]
                    },
                    borderWidth: 1
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}'
                }
            },
        },
        {
            name: '',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: [100, 100, 100, 100],
            itemStyle: {
                normal: {
                    color: '#1c2156'
                }
            }
        }
        ]
    },

    option2: {
        tooltip: {
            formatter: '{b}：\n{c}%'
        },
        grid: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 30
        },
        xAxis: [{
            type: 'category',
            data: ['酯化部', '聚合部', '封端部', '药铺部'],
            axisLabel: {
                color: '#eeeeee',
                textStyle: {
                    fontSize: 12
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#d2d2d2',
                }
            },
            axisTick: {
                show: false
            },
        }],
        yAxis: [{
            min: 0,
            max: 100,
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        }],
        series: [{
            type: 'bar',
            data: data2,
            barWidth: '30px',
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 1,
                        x2: 0,
                        y2: 0,
                        colorStops: [
                            { offset: 0, color: 'rgba(0, 79, 197, 1)' },
                            { offset: 1, color: 'rgba(0, 79, 197, 0)' }
                        ]
                    },
                    barBorderRadius: [30, 30, 0, 0],
                }
            },
            label: {
                show: true,
                fontSize: 12,
                position: 'top',
                color: '#eeeeee',
                formatter: '{c}%'
            }
        }]
    },
    option3: {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        color: ['#338cf9', '#96edc1', '#ea6b7c', '#fcb75b'],
        grid: {
            top: "30",
            left: "10",
            bottom: "30",
            right: "10",
        },
        legend: {
            show: true,
            top: 0,
            right: 26,
            data: ['酯化部', '聚合部', '封端部', '药铺部'],
            textStyle: {
                color: "RGB(193,223,255)"
            }
        },
        xAxis: [{
            type: "category",
            data: ["2020-01", "2020-02", "2020-03"],
            axisTick: {
                alignWithLabel: true
            },
            nameTextStyle: {
                color: "#fff"
            },
            axisLine: {
                lineStyle: {
                    color: "RGB(47,68,114)"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "white"
                },
            }
        }],
        yAxis: [{
            type: "value",
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            }
        }],
        series: [{
            name: '酯化部',
            type: 'bar',
            barWidth: "25",
            data: data3
        },
        {
            name: '聚合部',
            type: 'bar',
            barWidth: "25",
            data: data4
        },
        {
            name: '封端部',
            type: 'bar',
            barWidth: "25",
            data: data5
        },
        {
            name: '药铺部',
            type: 'bar',
            barWidth: "25",
            data: data6
        }
        ]
    },
    option4: {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        color: ['rgba(51, 140, 249, .7)', 'rgba(150, 237, 193,.7)', 'rgba(234, 107, 124, .7)', 'rgba(252, 183, 91,.7)'],
        grid: {
            top: "30",
            left: "10",
            bottom: "30",
            right: "10",
        },
        legend: {
            show: true,
            top: 0,
            right: 26,
            data: ['酯化部', '聚合部', '封端部', '药铺部'],
            textStyle: {
                color: "RGB(193,223,255)"
            }
        },
        xAxis: [{
            type: "category",
            data: ["2020-01", "2020-02", "2020-03"],
            axisTick: {
                alignWithLabel: true
            },
            nameTextStyle: {
                color: "#fff"
            },
            axisLine: {
                lineStyle: {
                    color: "RGB(47,68,114)"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "white"
                },
            }
        }],
        yAxis: [{
            type: "value",
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false,
            }
        }],
        series: [{
            name: '酯化部',
            type: 'bar',
            barWidth: "25",
            data: data3,
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 1,
                        x2: 0,
                        y2: 0,
                        colorStops: [
                            { offset: 0, color: 'rgba(51, 140, 249, .2)' },
                            { offset: 1, color: 'rgba(51, 140, 249, .9)' }
                        ]
                    },
                }
            },
        },
        {
            name: '聚合部',
            type: 'bar',
            barWidth: "25",
            data: data4,
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 1,
                        x2: 0,
                        y2: 0,
                        colorStops: [
                            { offset: 0, color: 'rgba(150, 237, 193, .2)' },
                            { offset: 1, color: 'rgba(150, 237, 193, .9)' }
                        ]
                    },
                }
            },
        },
        {
            name: '封端部',
            type: 'bar',
            barWidth: "25",
            data: data5,
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 1,
                        x2: 0,
                        y2: 0,
                        colorStops: [
                            { offset: 0, color: 'rgba(234, 107, 124, .2)' },
                            { offset: 1, color: 'rgba(234, 107, 124, .9)' }
                        ]
                    },
                }
            },
        },
        {
            name: '药铺部',
            type: 'bar',
            barWidth: "25",
            data: data6,
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 1,
                        x2: 0,
                        y2: 0,
                        colorStops: [
                            { offset: 0, color: 'rgba(252, 183, 91, .2)' },
                            { offset: 1, color: 'rgba(252, 183, 91, .9)' }
                        ]
                    },
                }
            },
        }
        ]
    },
}