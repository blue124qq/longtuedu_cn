var geoCoordMap = {
	"广东省": [113.5, 23.5],
	"湖南省": [111.6, 28.1],
	"贵州省": [106.6, 26.5],
	"湖北省": [112.6, 31],
	"甘肃省": [104.6, 35],
	"安徽省": [117.3, 32],
	"上海市": [121.5, 31],
	"江苏省": [119.9, 33],
	"山东省": [118, 36],
	"河北省": [115.5, 38.5],
	"北京市": [116.4, 40.2],

};

var chart = echarts.init(document.getElementById('china_map'));
var convertData = function(data) {
	var res = [];
	for(var i = 0; i < data.length; i++) {
		var geoCoord = geoCoordMap[data[i].name];
		if(geoCoord) {
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
        subtext: '提示：点击地图圆点查看对应地区学校',
        x:'center',
        textStyle: {
            color: '#fff'
        }
	},
	tooltip: {
		trigger: 'item',
		formatter: function(params) {
			return params.name + '' + params.value[2];
		}
	},
	geo: {
		map: 'china',
		label: {
			emphasis: {
				show: false
			}
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
		},
        {
			name: '湖南',
			itemStyle: {
				normal: {
					areaColor: '#c31e22',
					color: '#c31e22'
				}
			}
        },
        {
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
		},
        {
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
	//value: "39所</br>伊莱英语：39所",
	series: [{
			name: '中国',
			type: 'scatter',
			coordinateSystem: 'geo',
			data: convertData([{
			    name: "广东省",
			    value: "：44所</br>伊莱英语：5所",
				},
			
				{
					name: "贵州省",
					value: "：2所",
				},
				{
					name: "湖南省",
					value: "：5所",
				},
				{
					name: "甘肃省",
					value: "：2所",
				},
				{
					name: "湖北省",
					value: "：8所",
				},
				{
					name: "安徽省",
					value: "：4所",
				},
				{
					name: "上海市",
					value: "</br>伊莱英语：9所",
				},
				{
					name: "江苏省",
					value: "：5所",
				},
				{
					name: "山东省",
					value: "：9所",
				},				
				{
					name: "北京市",
					value: "</br>伊莱英语：5所",
				},
                {
                    name: "河北省",
                    value: "：2所",
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