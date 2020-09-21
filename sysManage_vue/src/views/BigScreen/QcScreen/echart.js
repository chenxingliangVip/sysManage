var formatter = 'M2聚合 ·  延时2h'
var data1 = [200];//左侧柱状图data
var data2 = [300];//右侧柱状图data

export default {
    option: {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
			orient: 'vertical',
			right: '10',
			top: '40%',
			icon: 'square',
			data: ['已检样品', '未检样品', '送检样品'],
			textStyle: { //图例的公共文本样式
				color: 'white',
				fontSize: 14
			},
		},
		grid: {
			left: '3%',
			right: '20%',
			bottom: '2%',
			top: '8%',
			containLabel: true
		},
		xAxis: {
			type: 'value',
			show: false
		},
		yAxis: {
			type: 'category',  //坐标轴类型。
			data: ['2019-10', '2019-11', '2019-12', '2020-2', '2020-2', '2020-3'],
			axisLine: {  //坐标轴轴线相关设置
				lineStyle: {
					color: '#64a7e0',
					opacity: 0
				}
			},
			axisTick: {  //坐标轴刻度相关设置
				lineStyle: {
					color: '#64a7e0',
					opacity: 0
				}
			},
			axisLabel: {  //坐标轴刻度标签的相关设置
				fontSize: 14,
				fontWeight: 600
			}
		},
		series: [{
				name: '已检样品',
				type: 'bar',
				stack: '样品',  //stack 数据堆叠，同个类目轴上系列配置相同的stack值可以堆叠放置
				itemStyle: {
					normal: {
						color: '#64a7e0',
						shadowBlur: 10,
						shadowColor: '#2d82ca',
					}
				},
				data: [18, 23, 29, 100, 18, 33]
			},
			{
				name: '未检样品',
				type: 'bar',
				stack: '样品',
				itemStyle: {
					normal: {
						color: '#f56c6c',
						shadowBlur: 20,
						shadowColor: '#2d82ca',
					}
				},
				data: [19, 23, 31, 12, 130, 51]
			},
			{
				name: '送检样品',
				type: 'bar',
				itemStyle: {
					normal: {
						color: 'rgba(152, 251, 152, 0.77)',
						shadowBlur: 10,
						shadowColor: '#2d82ca',
					}
				},
				data: [19, 28, 31, 12, 11, 67]
			}
		]
	},
}