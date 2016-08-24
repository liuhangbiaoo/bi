/**
	客户年纪分析
**/
var c_age_tag = ["12~18", "18~28","28~40","40以上","未知"];

var c_age_data = [
	{ name: "12~18", value: 1323 }, 
	{ name: "18~28", value: 7243 },
	{ name: "28~40", value: 24556 },
	{ name: "40以上", value: 14556 },
	{ name: "未知", value: 556 },
];
libpies("c_age", "客户年纪分析", c_age_tag, c_age_data, ['50%', '70%']);


/**
	客户性别分布
**/
var c_sex_tag = ["男", "女","未知"];

var c_sex_data = [
	{ name: "男", value: 5323 }, 
	{ name: "女", value: 24556 },
	{ name: "未知", value: 243 },
];
libpies("c_sex", "客户性别分布", c_sex_tag, c_sex_data, '65%');



libpies("c_member", "顾客会员等级分析", " ", " ", ['20%', '70%'], function(option) {
    option.series[0] = {
        name:'顾客会员等级分析',
        type:'pie',
        center: ['50%', '50%'],
        radius : [35, 110],
        roseType : 'radius',
        label: {
        normal: {
            show: true
            },
            emphasis: {
            show: true
            }
        },
        lableLine: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        data:[
           	{ name: "钻石会员", value: 2323 }, 
			{ name: "白金会员", value: 7243 },
			{ name: "金卡会员", value: 4556 },
			{ name: "非会员", value: 2154 },
        ]
    }
});


// // 顾客会员等级分析
// libpies("c_member", "顾客会员等级分析", " ", " ", [0, '30%'], function(option) {
//      option.backgroundColor='#2c343c';
//     option.series[0] = {
//         // name:'访问来源',
//             type:'pie',
//             radius : '55%',
//             center: ['50%', '50%'],
//             data:[
//                	{ name: "钻石会员", value: 2323 }, 
// 				{ name: "白金会员", value: 7243 },
// 				{ name: "金卡会员", value: 4556 },
// 				{ name: "非会员", value: 2154 },
//             ].sort(function (a, b) { return a.value - b.value}),
//             roseType: 'angle',
//             label: {
               
//             },
//              lableLine: {
// 	            normal: {
// 	                show: true
// 	            },
// 	            emphasis: {
// 	                show: true
// 	            }
//             },
//             itemStyle: {
//                 normal: {
//                     // color: '#c23531',
//                     shadowBlur: 200,
//                     shadowColor: 'rgba(0, 0, 0, 0.5)'
//                 }
//             }
//     }
// });



//客户收入
var c_economy_income_tag = ["2000以下", "2000-4000","4000-6000","6000以上"];
var c_economy_income_data = [
	{ name: "2000以下", value: 2434 }, 
	{ name: "2000-4000", value: 463 },
	{ name: "4000-6000", value: 7643 },
	{ name: "6000以上", value: 1232 },
];
libpies("c_economy_income", "顾客收入分析", c_economy_income_tag, c_economy_income_data, '65%');


//客户区域分布
var c_area_tag = ["1km以内", "1-2km","2-3km","3km以外"];
var c_area_data = [
	{ name: "1km以内", value: 19209 }, 
	{ name: "1-2km", value: 10372 },
	{ name: "2-3km", value: 7643 },
	{ name: "3km以外", value: 1232 },
];
libpies("c_area", "客户区域分布", c_area_tag, c_area_data,['30%', '70%']);



function countSaleTotal(cgy,qunian,jinnian,year1,year2,color,title){
    var option = {
        color:color,
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {y: 30, y2:30, x2:10,x:30},
        legend: {
            data:[year2, year1]
        },
        title:{
            show:true,
            text:title,
            bottom:0,
            textStyle:{
                color:"#f00",
                fontSize:14,
                fontWeight:200
            },
            padding: [10, 35]
        },
        grid:{
            bottom:60
        },
        yAxis : [
            {
                type : 'value',
                name:''
            }
        ],
        xAxis : [
            {
                type : 'category',
                axisTick : {show: false},
                data : cgy,
                //设置字体倾斜
                axisLabel:{
                    interval:0,
                    rotate:20//倾斜度 -90 至 90 默认为0
                }
            }
        ],
        series : [
            {
                name:year2,
                type:'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                data:qunian,
                barWidth:"40"
            },
            {
                name:year1,
                type:'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                data:jinnian,
                barWidth:"40"
            }
        ]
    };
    return option;
}
//
var caigy=['2014年','2015年'];
var qunian=[24202, 20342];
var jinnian=[13230, 13876];
var year1="男性客户";
var year2="女性客户";
var color = ["#7897d3","#f78db3"];
var title1="提示:经分析2015年女性客户流动减少,男性客户增加";
libchart('c_out_on_year',countSaleTotal(caigy,qunian,jinnian,year1,year2,color,title1));



//
var caigy=['2016-4','2016-5',"2016-6",'2016-7'];
var qunian=[923,982,909,908];
var jinnian=[591,561,421,651];
var year1="男性客户";
var year2="女性客户";
var title2="提示:经分析当前前4个月男女流动基本处于稳定状态";
libchart('c_out_on_ring',countSaleTotal(caigy,qunian,jinnian,year1,year2,color,title2));


/**
**
*/
$("#c_buy_year_option").on('click', function(event) {
	if(5 == this.value){
		//客户购买最多商品分类排行
		var c_buy_classify_tag = ["休闲食品", "生鲜类", "日常用品"];
		var c_buy_classify_data = [2132, 1984, 1682];
		xybar("c_buy_classify", "客户购买最多商品分类排行", c_buy_classify_tag, c_buy_classify_data,"",function(option){
                option.series[0].barWidth="40"
            })
		var c_buy_goods_tag = ["肉干", "禽类肉", "牙膏"];
		var c_buy_goods_data = [369, 340, 289];
		xybar("c_buy_goods", "客户购买最多商品宝贝排行", c_buy_goods_tag, c_buy_goods_data,"",function(option){
            option.series[0].barWidth="40"
        })
	}
	if(10 == this.value){
		//客户购买最多商品分类排行
		var c_buy_classify_tag = ["休闲食品", "生鲜类", "日常用品", "护肤品","卫生用品"];
		var c_buy_classify_data = [2132, 1984, 1682, 1612,1429];
		xybar("c_buy_classify", "客户购买最多商品分类排行", c_buy_classify_tag, c_buy_classify_data,"",function(option){
                option.series[0].barWidth="40"
            })
		var c_buy_goods_tag = ["肉干", "禽类肉", "牙膏", "洗发水","卫生纸"];
		var c_buy_goods_data = [369, 340, 289, 212,189];
		xybar("c_buy_goods", "客户购买最多商品宝贝排行", c_buy_goods_tag, c_buy_goods_data,"",function(option){
                option.series[0].barWidth="40"
            })
	}
	if(15 == this.value){
		//客户购买最多商品分类排行
		var c_buy_classify_tag = ["休闲食品", "生鲜类", "日常用品", "护肤品","卫生用品","厨房餐饮","水果类","禽肉类"];
		var c_buy_classify_data = [2132, 1984, 1682, 1612,1429,1232,1220,980];
		xybar("c_buy_classify", "客户购买最多商品分类排行", c_buy_classify_tag, c_buy_classify_data,"",function(option){
                option.series[0].barWidth="40"
            })
		var c_buy_goods_tag = ["肉干", "禽类肉", "牙膏", "洗发水","卫生纸","洗洁精","面包","苹果"];
		var c_buy_goods_data = [369, 340, 289,212,189,162,154,120];
		xybar("c_buy_goods", "客户购买最多商品宝贝排行", c_buy_goods_tag, c_buy_goods_data,"",function(option){
            option.series[0].barWidth="40"
        })
	}
});
//客户购买最多商品分类排行
var c_buy_classify_tag = ["休闲食品", "生鲜类", "日常用品"];
var c_buy_classify_data = [2132, 1984, 1682];
xybar("c_buy_classify", "客户购买最多商品分类排行", c_buy_classify_tag, c_buy_classify_data,"",function(option){
    option.series[0].barWidth="40"
})
var c_buy_goods_tag = ["肉干", "禽类肉", "牙膏"];
var c_buy_goods_data = [369, 340, 289];
xybar("c_buy_goods", "客户购买最多商品宝贝排行", c_buy_goods_tag, c_buy_goods_data,"",function(option){
    option.series[0].barWidth="40"
})




//客户停滞时间分析
// var c_stop_tag = ["邮件营销"];
$("#c_stop_time_option").on('click', function(event) {
	var c_stop_data;
	if(1== this.value){
		 c_stop_data =[245,579,154,206,890,780,328];
	}
	if(2== this.value){
		 c_stop_data =[230,600,120,178,900,767,302];
	}
	c_stop_time(c_stop_data);
});

var c_stop_data =[245,579,154,206,890,780,328];
c_stop_time(c_stop_data);
function c_stop_time(c_stop_data){
	var c_stop_cat = ["8-10点","10-12点","12-14点","14-16点","16-18点","18-20点","20-22点"];
	libline("c_stop_time","客户停滞时间分析","",c_stop_cat,c_stop_data,function(option){
	option.title={
        show:true,
        text:"提示:经分析每天中客户数量较多时间点在16-18点之间",
        bottom:0,
        textStyle:{
            color:"#f00",
            fontSize:14,
            fontWeight:200
        },
        padding: [10, 35]
    };
    option.grid={
        bottom:60
    };
    option.series[0].markPoint ={
        data : [
            {type : 'max', name: '最大值'},
            {type : 'min', name: '最小值'}
        ]
    },
    option.series[0].markLine ={
        data : [
            {type : 'average', name : '平均值'}
        ]
    }
   


})
}


var c_visit_tag = ["1>天","1<2天","2<3天","3<天"];
var c_visit_data =[245,579,154,206];
libline("c_visit","客户访问间隔天数分析","",c_visit_tag,c_visit_data,function(option){
	option.series[0].markPoint ={
        data : [
            {type : 'max', name: '最大值'},
            {type : 'min', name: '最小值'}
        ]
    },
    option.series[0].markLine ={
        data : [
            {type : 'average', name : '平均值'}
        ]
    }
})





var tharr=["时间段","销量第一","销量第二","销量第三"];
var trarr=[
	["8点","酸奶","点心","蔬菜"],
	["9点","美容护肤","厨房餐具","数码"],
	["10点","美容护肤","蔬菜","厨房餐具	"],
	["11点","日常用品","厨房餐具","饮料"],
	["12点","水果","饮料","日常用品"],
	["13点","饮料","日常用品","美容护肤"],
	["14点","日常用品","家具","水果"],
	["15点","饮料","烟酒","家具"],
	["16点","水果","小吃","饮料"],
	["17点","衣服","烟酒","肉类"],
	["18点","肉类","饮料","食物"],
	["19点","啤酒","小吃","床上用品"],
	["20点","床上用品","小吃","日常用品"],
	["21点","水果","日常用品","牛奶"],
	["22点","日常用品","家具","床上用品"],]
biTable("#c_buy_time",tharr,trarr);
eqh($(".bi-menu"), $(".bi-main"));



