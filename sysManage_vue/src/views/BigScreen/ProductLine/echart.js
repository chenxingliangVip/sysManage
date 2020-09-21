var formatter = 'M2聚合 ·  延时2h'
var data1 = [200];//左侧柱状图data
var data2 = [300];//右侧柱状图data

export default {
    option: {
        xAxis: {
            show: false
        },
        yAxis: [{
            show: true,
            data: [''],
            inverse: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
        }],
        series: [
            {//最左侧的圆片
                name: "",
                type: "pictorialBar",
                symbolSize: [40, 80],
                symbolOffset: [-20, 0],
                z: 12,
                itemStyle: {
                    opacity: 1,
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: 'rgba(16, 137, 231, 1)' },
                            { offset: 1, color: 'rgba(16, 137, 231, 1)' }
                        ]
                    },
                },
                data: [1]
            },
            //中间柱状图
            {
                name: '',
                type: 'bar',
                barWidth: 80,
                barGap: '-100%',
                itemStyle: {//lenged文本
                    opacity: 1,
                    color: {
                        x: 1,
                        y: 0,
                        x2: 0,
                        y2: 0,
                        colorStops: [
                            { offset: 0, color: 'rgba(16, 137, 231, .5)' },
                            { offset: 1, color: 'rgba(16, 137, 231, .5)' }
                        ]
                    },
                },
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: formatter,
                        fontSize: 22,
                        color: '#eeeeee'
                    }
                },
                data: data1
            }, {
                name: "", //最左侧图片
                type: "pictorialBar",
                symbolSize: [40, 80],
                symbolOffset: [20, 0],
                z: 12,
                symbolPosition: "end",
                itemStyle: {
                    color: '#dddddd',
                    opacity: 1,
                },
                data: data2
            }, {
                name: "",
                type: "pictorialBar",
                symbolSize: [40, 80],
                symbolOffset: [20, 0],
                z: 12,
                itemStyle: {
                    opacity: 1,
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            { offset: 0, color: 'rgba(16, 137, 231, 1)' },
                            { offset: 1, color: 'rgba(16, 137, 231, 1)' }
                        ]
                    },
                },
                symbolPosition: "end",
                data: data1
            }, {
                name: '',
                type: 'bar',
                barWidth: 80,
                barGap: '-100%',
                z: 0,
                itemStyle: {
                    color: '#dddddd',
                    opacity: .6,
                    borderWidth: 5,
                    borderColor: 'rgba(221, 221, 221, .5)',
                },
                data: data2
            }
        ]
    }
}