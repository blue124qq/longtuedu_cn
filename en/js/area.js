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

dsy.add("0", ["Beijing", "Shanghai", "Guangdong", "Hunan", "Guizhou", "Hubei", "Jiangsu", "Anhui", "Gansu", "Hebei", "Shandong", "Hainan"]);
dsy.add("0_0", ["Beijing"]);
dsy.add("0_1", ["Shanghai"]);
dsy.add("0_2", ["Guangzhou", "Shenzhen", "Foshan", "Dongguan", "Huizhou", "Maoming", "Jiangmen", "Qingyuan", "Shaoguan"]);
dsy.add("0_3", ["Changsha"]);
dsy.add("0_4", ["Guiyang"]);
dsy.add("0_5", ["Wuhan"]);
dsy.add("0_6", ["Huaian","Zhenjiang"]);
dsy.add("0_7", ["Chuzhou"]);
dsy.add("0_8", ["Lanzhou"]);
dsy.add("0_9", ["Baoding"]);
dsy.add("0_10", ["Haiyang"]);
dsy.add("0_11", ["Haikou"]);
dsy.add("0", ["Beijing", "Shanghai", "Guangdong", "Hunan", "Guizhou", "Hubei", "Jiangsu", "Anhui", "Gansu", "Hebei", "Shandong", "Hainan"]);

var s=["s_province","s_city","s_county"];//三个select的name
var opt0 = ["Province", "City", "Area"]; //初始值
function _init_area(){  //初始化函数
	for(i=0;i<s.length-1;i++){
	  document.getElementById(s[i]).onchange=new Function("change("+(i+1)+")");
	}
	change(0);
}
/* 代码整理：懒人之家 www.lanrenzhijia.com */

