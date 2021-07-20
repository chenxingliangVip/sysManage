
//温度湿度柱状图颜色
let color = [
    "#e2476e",
    "#33adf5",
];
const hexToRgba = (hex, opacity) => {
    let rgbaColor = "";
    let reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
            "0x" + hex.slice(3, 5)
        )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
    }
    return rgbaColor;
}

export default {
    //温度湿度柱状图
    optionBar: {
        grid: {
            top: 30,
            left: 50,
            bottom: 30,
            right: 40,
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisPointer: {
                    type: 'shadow'
                },
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '温度',
                min: 0,
                max: 60,
                interval: 10,
                axisLabel: {
                    formatter: '{value} °C',
                },
                axisLine: {
                    lineStyle: {
                        color: '#e2476e'
                    }
                },
                splitLine: {
                    // show: false,
                    lineStyle: {
                        type: 'dashed',
                        color: '#a1a1a1'
                    }
                },
            },
            {
                type: 'value',
                name: '湿度',
                min: 0,
                max: 60,
                interval: 10,
                axisLabel: {
                    formatter: '{value} ',
                },
                axisLine: {
                    lineStyle: {
                        color: '#33adf5'
                    }
                },
                splitLine: {
                    // show: false,
                    lineStyle: {
                        type: 'dashed',
                        color: '#a1a1a1'
                    }
                },
            }
        ],
        series: [
            {
                name: '温度',
                type: 'line',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 40.7, 35.6, 22.2, 48.7, 18.8, 6.0, 2.3],
                lineStyle: {
                    normal: {
                        color: color[0],
                        shadowBlur: 3,
                        shadowColor: hexToRgba(color[0], 0.5),
                        shadowOffsetY: 8
                    }
                },
                areaStyle: {
                    normal: {
                        color: {
                            x: 0, y: 0, x2: 0, y2: 1,
                            colorStops: [
                                { offset: 0, color: hexToRgba(color[0], 0.8) },
                                { offset: 1, color: hexToRgba(color[0], 0.4) }
                            ]
                        },
                        shadowColor: hexToRgba(color[0], 0.5),
                        shadowBlur: 10
                    }
                },
            },
            {
                name: '湿度',
                type: 'line',
                yAxisIndex: 1,
                data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
                lineStyle: {
                    normal: {
                        color: color[1],
                        shadowBlur: 3,
                        shadowColor: hexToRgba(color[1], 0.5),
                        shadowOffsetY: 8
                    }
                },
                areaStyle: {
                    normal: {
                        color: {
                            x: 0, y: 0, x2: 0, y2: 1,
                            colorStops: [
                                { offset: 0, color: hexToRgba(color[1], 0.8) },
                                { offset: 1, color: hexToRgba(color[1], 0.4) }
                            ]
                        },
                        shadowColor: hexToRgba(color[1], 0.5),
                        shadowBlur: 10
                    }
                },
            }
        ]
    },
}