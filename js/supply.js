
//setup();//分类筛选

// initYear();

function initYear(){
    for(var i=2015;i>=2006;i--){
        $("#select_year").append('<option value="'+i+'">'+i+'年</option>');
    }
}

// $("#selectUp").click(function(){

// });

//所供商品毛利率占比统计
libpies("e1", " ", " ", " ", [0, '30%'], function(option) {
    option.series[0] = {
        name: '毛利率占比',
        type: 'pie',
        selectedMode: 'single',
        selectedOffset: 30,
        clockwise: true,
        label: {
            normal: {
                textStyle: {
                    fontSize: 12
                }
            }
        },
        data:[
            {value:335, name:'浙江晨光'},
            {value:310, name:'遂昌张记'},
            {value:234, name:'缙云县夏氏'},
            {value:135, name:'龙泉绿瓯'},
			{value:140, name:'景宁英川'},
			{value:97, name:'深田家私'}
        ],
        itemStyle: {
            normal: {
                opacity: 0.7,
                borderWidth: 3,
                borderColor: '#fff'
            }
        }
    }
});

//周转率 交叉比率
var tag = ["庆元百兴", "景宁英川", "龙泉绿瓯", "聚珍坊"];
var data61 = [21, 12, 7, 13],
    data62 = [24, 43, 24, 23];
    data63 = [34, 53, 24, 33];
xybar("e2", "", tag, " ", "y", function(option) {
    var tagss = {};
	option.xAxis= {
        type: 'value',
        axisLabel: {
            formatter: '{value} %'
        }
    };
    option.tooltip.formatter='{b0}: {c0}%'
    tagss.data = ['周转率','交叉比值'];
    option.title={
        show:true,
        text:"龙泉绿瓯作为供货商的周转值/交叉比值比正常值偏低，请谨慎合作",
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
    }
    option.legend = tagss;
    option.series = [
        {
            name: "周转值",
            type: 'bar',
            data: data61 ,
            itemStyle : {
                normal: {
                    label : {
                        show: true,
                        position: 'right'
                    }
                }
            }
        },
      
         {
            name: "交叉比值",
            type: 'line',
            data: data63 ,
            itemStyle : {
                normal: {
                    label : {
                        show: true,
                        position: 'right'
                    }
                }
            },
             markPoint: {
                data: [
                    {type: 'max', name: '最大交叉比值'},
                    {type: 'min', name: '最小交叉比值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        }
    ]
});


//供货量综合统计
var data_j1 = [1000, 2600, 700, 1100];//订货量
var data_j2 = [990, 3000, 700, 1000];//进货量
var data_j3 = [879, 2620, 700, 692];//销售量
var data_j4 = [8, 10, 0, 28];//退换量
var data_j5 = [11, 380, 0, 308];//库存量
var data_j6 = [1200, 2481, 810, 720];//库存量
var supplyList = ["浙江渔夫有限公司", "缙云县夏氏有限公司", "武汉聚珍坊电子商务有限公司", "浙江晨光有限公司"];
xybar("e3", "供货量综合统计",supplyList , '', "x", function(option) {
    // option.color = ["#7996D2", "#F8E594", "#F78DB3"];
    option.yAxis = [{
        name : '件'
    }];
    var tagss = {};
    tagss.data = ['订货量', '进货量','销售量', '退换量','库存量','去年的供货量'];
    option.legend = tagss;

 option.title={
        show:true,
        text:" 缙云县夏氏有限公司提供的商品库存量已过大，对比去年的销售情况，请注意近期不要大量进货",
        bottom:0,
        textStyle:{
            color:"#f00",
            fontSize:14,
            fontWeight:200,
        },
        // textAlign:"left",
        padding: [10, 35]
    };
option.grid={
    bottom:60
};
   
    option.series = [
        {
            name: "订货量",
            type: 'bar',
            data: data_j1 ,
            itemStyle : {
                normal: {
                    label : {
                        show: true,
                        position: 'top'
                    }
                }
            }
        },
        {
            name: "进货量",
            type: 'bar',
            data: data_j2 ,
            itemStyle : {
                normal: {
                    label : {
                        show: true,
                        position: 'top'
                    }
                }
            }
        },
        {
            name: "销售量",
            type: 'bar',
            data: data_j3 ,
            itemStyle : {
                normal: {
                    label : {
                        show: true,
                        position: 'top'
                    }
                }
            }
        },
        {
            name: "退换量",
            type: 'bar',
            data: data_j4 ,
            itemStyle : {
                normal: {
                    label : {
                        show: true,
                        position: 'top'
                    }
                }
            }
        },
        {
            name: "库存量",
            type: 'bar',
            data: data_j5 ,
            itemStyle : {
                normal: {
                    label : {
                        show: true,
                        position: 'top'
                    }
                }
            }
        },
         {
            name: "去年的供货量",
            type: 'line',
            data: data_j6 ,
            itemStyle : {
                normal: {
                    label : {
                        show: true,
                        position: 'top'
                    }
                }
            },
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },

    ];
});

//供货额综合统计
var data_m1 = [5000, 5200, 5600, 1100];//订货额
var data_m2 = [4950, 6000, 5600, 1000];//进货额
var data_m3 = [8790, 18920, 8400, 2600];//销售额
var data_m4 = [80, 143, 0, 772.8];//退换额
var data_m5 = [55, 760, 0, 308,];//库存额
var data_m6 = [2455, 21060, 9760,3708,];//供销额
var supplyList = ["浙江渔夫食品有限公司", "缙云县夏氏有限公司", "武汉聚珍坊电子商务有限公司", "浙江晨光有限公司"];
xybar("e4", "供货额综合统计",supplyList , '', "x", function(option) {
    // option.color = ["#90D4E7", "#E5B4B2", "#A498B9"];
    option.yAxis = [{
        name : '元'
    }];
    var tagss = {};
    tagss.data = ['订货额', '进货额','销售额', '退换额','库存额','去年的供货额'];
    option.legend = tagss;
    option.series = [
        {
            name: "订货额",
            type: 'bar',
            data: data_m1 ,
            itemStyle : {
                normal: {
                    label : {
                        show: true,
                        position: 'top'
                    }
                }
            }
        },
        {
            name: "进货额",
            type: 'bar',
            data: data_m2 ,
            itemStyle : {
                normal: {
                    label : {
                        show: true,
                        position: 'top'
                    }
                }
            }
        },
        {
            name: "销售额",
            type: 'bar',
            data: data_m3 ,
            itemStyle : {
                normal: {
                    label : {
                        show: true,
                        position: 'top'
                    }
                }
            }
        },
        {
            name: "退换额",
            type: 'bar',
            data: data_m4 ,
            itemStyle : {
                normal: {
                    label : {
                        show: true,
                        position: 'top'
                    }
                }
            }
        },
        {
            name: "库存额",
            type: 'bar',
            data: data_m5 ,
            itemStyle : {
                normal: {
                    label : {
                        show: true,
                        position: 'top'
                    }
                }
            }
        },    
         {
            name: "去年的供货额",
            type: 'line',
            data: data_m6 ,
            itemStyle : {
                normal: {
                    label : {
                        show: true,
                        position: 'top'
                    }
                }
            },
             markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
    ];
    option.title={
        show:true,
        text:"浙江晨光有限公司退货额偏高，请相关人员注意！",
        subtext:"浙江渔夫食品有限公司 相对于去年，今年供货额有了大幅的增长，请相关负责人注意！",
        subtextStyle:{
            color:"#f00",
            fontSize:14,
            fontWeight:200
        },
        bottom:0,
        textStyle:{
            color:"#f00",
            fontSize:14,
            fontWeight:200,
        },
        // textAlign:"left",
        padding: [10, 35]
    };
    option.grid={
        bottom:90
    };
});

//进货额/销售额
var data_year = ['2006 ','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016'];
var data_jhe = [4.5,5.3,6.9,6.2,7,7.1,7.2,8,6.8,8];
var data_xse = [9,10.1,16.1,15.2,18.9,20.3,17.8,22.1,26.3,22.8];
libline("e5"," "," ",data_year," ",function(option){
    option.yAxis = [{
        name : '亿元'
    }];
    option.legend={
        data:['进货额','销售额']
    };
    option.series=[
        {
            name:'进货额',
            type:'line',
            stack: '总量',
            //areaStyle: {normal: {}},
            color : ['#FFABAC'],
            data : data_jhe ,
            itemStyle : {
                normal:{
                    lineStyle:{
                        color : '#FFABAC' ,
                        normal: {
                            label : {
                                show: true,
                                position: 'top'
                            }
                        }
                    },
                    label : {show: true}
                }
            },
             markPoint: {
                data: [
                    {type: 'max', name: '最大进货额'},
                    {type: 'min', name: '最小进货额'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }

        },
        {
            name:'销售额',
            type:'line',
            stack: '总量',
            //areaStyle: {normal: {}},
            color : ['#A99EBD'],
            data : data_xse ,
            itemStyle : {
                normal:{
                    lineStyle:{
                        color : '#A99EBD' ,
                        normal: {
                            label : {
                                show: true,
                                position: 'top'
                            }
                        }
                    },
                    label : {show: true}
                }
            },
             markPoint: {
                data: [
                    {type: 'max', name: '最大销售额'},
                    {type: 'min', name: '最小销售额'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }

        }
    ]
});

//到货时间TOP5
var data5_dt = [10, 8, 6, 4];
option_dt = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}天"
    },
    title:{
        show:true,
        text:"去年9月,浙江晨光食品有限公司的到货时间已超过正常周期，请提前安排",
        bottom:0,
        textStyle:{
            color:"#f00",
            fontSize:14,
            fontWeight:200
        },
        padding: [10, 35]
    },
   grid:{
        left:100,
        bottom:60
    },
    color:['#7897d3','#f9e595','#f78db3','#a599b9','#ffabad','#a1dda1','#91d5e7','#6ecdb3','#e5b5b3'],
    series: [
        {
            type: 'funnel',
            sort: 'ascending',
            gap:3,
            //left: '10%',
            label: {
                normal: {
                    show: true,
                    position: 'insideTopLeft'
                }
            },
            data:[
                {value: 13, name:"庆元百兴有限公司"},
                {value: 21, name:"龙泉绿瓯有限公司"},
                {value: 23, name:"景宁英川发展有限公司"},
                {value:27, name:"丽水队长食品有限公司"},
                {value:27, name:"浙江晨光食品有限公司"}
            ]
        }
    ]
};

var myChart6 = echarts.init(document.getElementById('e6'));
myChart6.setOption(option_dt);

// 综合统计指数
var tharr=["公司名称","毛利率","到货时间","周转率","交叉比值","订货量","进货量","销售量","库存量","退换量"];
var trarr=[
["浙江晨光食品有限公司","50%","27","89%","44.5%","5000","4500","4019","896","75"],
["遂昌张记食品有限公司","30%","30","78%","23.4%","3000","3000","2690","769","98"],
["丽水队长食品有限公司","31.1%","27","84%","26.1%","520","500","410","100","26"],
["缙云县夏氏饮料有限公司","23.8%","48","61.9%","14.7%","1000","1000","918","93","31"],
["龙泉绿瓯有限公司","48.3%","21","83.2%","40.18%","2880","3000","2585","175","52"],
["庆元百兴有限公司","19.8%","13","92.6%","18.33%","10000","8000","7520","972","101"],
["景宁英川发展有限公司","42.7%","23","69.9%","29.84%","5000","4300","3789","927","41"],
["龙泉市乔丰米面制品厂","60.7%","15","85.8%","52.1%","3000","3000","2498","621","17"],
["庆元九川竹木制品有限公司","39%","25","89.9%","35.1%","2600","2000","2000","0","29"],
["云裳服饰有限公司","63%",30,"57%","35.91%","2000","2000","1625","375","35"],
];
biTable("#e7",tharr,trarr);
