var geoCoordMap = {
    "Guangdong": [113.5, 23.5],
    //"Hainan": [109.6, 19.1],
    "Hunan": [111.6, 28.1],
    "Guizhou": [106.6, 26.5],
    "Hubei": [112.6, 31],
    "Gansu": [104.6, 35],
    "Anhui": [117.3, 32],
    "Shanghai": [121.5, 31],
    "Jiangsu": [119.9, 33],
    "Shandong": [118, 36],
    "Hebei": [115.5, 38.5],
    "Beijing": [116.4, 40.2],
};


var chart = echarts.init(document.getElementById('china_map'));
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
chart.setOption({
    title: {
        subtext: 'Tip: click on the map dot to see the local schools',
        x: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name + '' + params.value[2];
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            },
            formatter: function (params) {
                return params.name + ' : ' + params.value[2];
            },
        },
        itemStyle: {
            normal: {
                areaColor: '#f0dbde',
                borderColor: '#fff',
            },
            emphasis: {
                areaColor: false
            }
        },
        regions: [{
            name: '广东',
            itemStyle: {
                normal: {
                    areaColor: '#c31e22',
                    color: '#c31e22'
                }
            }
        }, {
            name: '湖南',
            itemStyle: {
                normal: {
                    areaColor: '#c31e22',
                    color: '#c31e22'
                }
            }
        }, {
            name: '贵州',
            itemStyle: {
                normal: {
                    areaColor: '#c31e22',
                    color: '#c31e22'
                }
            }
        }, {
            name: '湖北',
            itemStyle: {
                normal: {
                    areaColor: '#c31e22',
                    color: '#c31e22'
                }
            }
        }, {
            name: '甘肃',
            itemStyle: {
                normal: {
                    areaColor: '#c31e22',
                    color: '#c31e22'
                }
            }
        }, {
            name: '安徽',
            itemStyle: {
                normal: {
                    areaColor: '#c31e22',
                    color: '#c31e22'
                }
            }
        }, {
            name: '上海',
            itemStyle: {
                normal: {
                    areaColor: '#c31e22',
                    color: '#c31e22'
                }
            }
        }, {
            name: '江苏',
            itemStyle: {
                normal: {
                    areaColor: '#c31e22',
                    color: '#c31e22'
                }
            }
        },
        {
			name: '山东',
			itemStyle: {
				normal: {
					areaColor: '#c31e22',
					color: '#c31e22'
				}
			}
		},{
            name: '北京',
            itemStyle: {
                normal: {
                    areaColor: '#c31e22',
                    color: '#c31e22'
                }
            }
        }, {
            name: '河北',
            itemStyle: {
                normal: {
                    areaColor: '#c31e22',
                    color: '#c31e22'
                }
            }
        }]
    },
    series: [{
        name: '中国',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData([{
            name: "Guangdong",
            value: ": 44 Schools</br>Elan: 5 Schools",
        },

            {
                name: "Guizhou",
                value: ": 2 Schools",
            },
            {
                name: "Hunan",
                value: ": 5 Schools",
            },
            {
                name: "Gansu",
                value: ": 2 Schools",
            },
            {
                name: "Anhui",
                value: ": 4 Schools",
            },
            {
                name: "Shanghai",
                value: "</br>Elan: 9 Schools",
            },
            {
                name: "Jiangsu",
                value: ": 5 Schools",
            },
            {
                name: "Hubei",
                value: ": 8 Schools",
            },
			{
					name: "Shandong",
					value: "：9 Schools",
			},	
            {
                name: "Beijing",
                value: "</br>Elan: 5 Schools",
            },
            {
                name: "Hebei",
                value: ": 2 Schools",
            },
        ]),
        symbolSize: 12,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                borderColor: '#fff',
                borderWidth: 1,
            },
            normal: {
                borderColor: '#fff',
                color: {
                    type: 'radial',
                    colorStops: [{
                        offset: 0.5,
                        color: '#fff' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#c31e22' // 100% 处的颜色
                    }],
                },
                opacity: 1,
            },
        }
    },

    ]
});
window.onresize = chart.resize;
window.onload = chart.resize;