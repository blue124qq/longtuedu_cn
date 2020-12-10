/*
*	全国三级城市联动 js版
*/
function Dsy(){
	this.Items = {};
}
Dsy.prototype.add = function(id,iArray){
	this.Items[id] = iArray;
}
Dsy.prototype.Exists = function(id){
	if(typeof(this.Items[id]) == "undefined") return false;
	return true;
}

function change(v){
	var str="0";
	for(i=0;i<v;i++){
		str+=("_"+(document.getElementById(s[i]).selectedIndex-1));
	};
	var ss=document.getElementById(s[v]);
	with(ss){
		length = 0;
		options[0]=new Option(opt0[v],opt0[v]);
		if(v && document.getElementById(s[v-1]).selectedIndex>0 || !v){
			if(dsy.Exists(str)){
				ar = dsy.Items[str];
				for(i=0;i<ar.length;i++){
					options[length]=new Option(ar[i],ar[i]);
				}//end for
				if(v){ options[0].selected = true; }
			}
		}//end if v
		if(++v<s.length){change(v);}
	}//End with
}

var dsy = new Dsy();

dsy.add("0", ["北京市", "上海市", "广东省", "湖南省", "贵州省", "湖北省", "江苏省", "安徽省", "甘肃省", "河北省", "山东省", "海南省","四川省"]);
dsy.add("0_0", ["北京市"]);
dsy.add("0_1", ["上海市"]);
dsy.add("0_2", ["广州市", "深圳市", "佛山市", "东莞市", "惠州市", "茂名市", "江门市", "清远市", "韶关市"]);
dsy.add("0_3", ["长沙市"]);
dsy.add("0_4", ["贵阳市"]);
dsy.add("0_5", ["武汉市", "咸宁市"]);
dsy.add("0_6", ["淮安市", "镇江市"]);
dsy.add("0_7", ["滁州市"]);
dsy.add("0_8", ["兰州市"]);
dsy.add("0_9", ["保定市"]);
dsy.add("0_10", ["海阳市"]);
dsy.add("0_11", ["海口市"]);
dsy.add("0_12", ["成都市"]);
dsy.add("0", ["北京市", "上海市", "广东省", "湖南省", "贵州省", "湖北省", "江苏省", "安徽省", "甘肃省", "河北省", "山东省", "海南省","四川省"]);

var s=["s_province","s_city","s_county"];//三个select的name
var opt0 = ["省份","城市","市、县级市"];//初始值
function _init_area(){  //初始化函数
	for(i=0;i<s.length-1;i++){
	  document.getElementById(s[i]).onchange=new Function("change("+(i+1)+")");
	}
	change(0);
}
