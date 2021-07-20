// 小气泡

import echarts from 'echarts'

//字符串截取
var wordLength = (value) => {
    var ret = ""; //拼接加\n返回的类目项
    var maxLength = 4; //每项显示文字个数
    var valLength = value.length; //X轴类目项的文字个数
    var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
    if (rowN > 1) //如果类目项的文字大于3,
    {
        for (var i = 0; i < rowN; i++) {
            var temp = ""; //每次截取的字符串
            var start = i * maxLength; //开始截取的位置
            var end = start + maxLength; //结束截取的位置
            //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
            temp = value.substring(start, end) + "\n";
            ret += temp; //凭借最终的字符串
        }
        return ret;
    } else {
        return value;
    }
}
//
var data = [{
        name: "温湿度",
        value: "20"
    },
    {
        name: "可燃气",
        value: "2"
    },
    {
        name: "烟感",
        value: "20"
    },
    {
        name: "摄像头",
        value: "21"
    },
    {
        name: "排风",
        value: "30"
    },

];
//偏移量
var offsetData = [
    [20, 83],
    [75, 78],
    [20, 48],
    [60, 50],
    [40, 26]
];
//symbolSize 散点气泡大小
var symbolSizeData = [110, 100, 75, 85, 70];
//
//循环定义series的data值
var datas = [];
for (var i = 0; i < data.length; i++) {
    var item = data[i];
    datas.push({
        name: wordLength(item.name) + "\n" + "\n" + item.value + "个",
        value: offsetData[i],
        symbolSize: symbolSizeData[i],
        label: {
            normal: {
                textStyle: {
                    fontSize: 16
                }
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.RadialGradient(0.3, 0.5, 0.7, [{
                        offset: 0,
                        color: "rgba(58,103,158,0)"
                    },
                    {
                        offset: 1,
                        color: "rgba(31,102,192,0.4)"
                    }
                ]),
                opacity: 0.8,
                shadowColor: '#3a679e47',
                shadowBlur: 10,
                shadowOffsetX: 1,
                shadowOffsetY: 1,
            },
        }
    });
}

export default {
    optionScatter: {
        grid: {
            show: false,
            top: 0,
            bottom: 0
        },
        xAxis: [{
            gridIndex: 0,
            type: "value",
            show: false,
            min: 0,
            max: 100,
            nameLocation: "middle",
            nameGap: 5
        }],
        yAxis: [{
            gridIndex: 0,
            min: 0,
            show: false,
            max: 100,
            nameLocation: "middle",
            nameGap: 30
        }],
       
        series: [{
            type: "scatter",
            symbol: "circle",
            symbolSize: 120,
            label: {
                normal: {
                    show: true,
                    formatter: "{b}",
                    color: "#fff",
                    textStyle: {
                        fontSize: "20"
                    }
                }
            },
            animationDurationUpdate: 1000,
            animationEasingUpdate: 1000,
            animationDelay: function(idx) {
                // 越往后的数据延迟越大
                return idx * 100;
            },
            itemStyle: {
                normal: {
                    color: "#00acea"
                }
            },
            data: datas
        }],
    }
}


