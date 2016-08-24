//var color = ['#f8e594','#f78db3','#7996d2', '#a498b9',  '#ffabac',  '#a0dca0', '#90d4e7', '#87b1e6', '#6fcdb2', '#e5b4b2'];

//采购员销售额data
var cgy=['张文雯','张宇','于惠','周通'];
var qunian=[12, 17, 24, 5];
var jinnian=[17, 20, 18, 4];
var qunian1=[4, 5, 8, 2];
var jinnian1=[6, 7, 6, 2];
var year1="2016年";
var year2="2015年";
function countSaleTotal(cgy,qunian,jinnian,year1,year2,titlet){
    var option = {
        color:color,
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {y: 30, y2:30, x2:10,x:30, bottom:60},
        legend: {
            data:[year2, year1]
        },
        title:{
            show:true,
            text:titlet,
            bottom:0,
            textStyle:{
                color:"#f00",
                fontSize:14,
                fontWeight:200
            },
            padding: [10, 35]
        },
        yAxis : [
            {
                type : 'value',
                name:'（w）'
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
                data:qunian
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
                data:jinnian
            }
        ]
    };
    return option;
}

function countMonthSaleTotal(data){
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
            data:data.caigouyuan
        },
        yAxis : [
            {
                type : 'value',
                name:'（w）'
            }
        ],
        xAxis : [
            {
                type : 'category',
                axisTick : {show: false},
                data : data.time,
                //设置字体倾斜
                axisLabel:{
                    interval:0,
                    rotate:20//倾斜度 -90 至 90 默认为0
                }
            }
        ]

    };
    var series = [];
    for(var i=0;i<data.caigouyuan.length;i++){
        series.push({
            name:data.caigouyuan[i],
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:data.num[i]
        });
    }
    option.series = series;
    return option;
}
$("#yearOption").on("change",function(){
    showCount();
});
$("input[name=type]").on("click",function(){
    showCount();
});
function showCount(){
    var caigouyuan = $("#yearOption").val();
    var type = $("input[name=type]:checked").val();
    if(caigouyuan=="2015" && type == "year"){
        var caigy=['张丽','刘本','张博延','杨圣'];
        var jinnian=[12, 17, 24, 5];
        var qunian=[11, 14, 16, 13];
        var jinnian1=[4, 5, 8, 2];
        var qunian1=[4, 4, 5, 5];
        year1 = "2015";
        year2 = "2014";
        libchart('c1',countSaleTotal(caigy,qunian1,jinnian1,year1,year2,""));
        libchart('c2',countSaleTotal(caigy,qunian,jinnian,year1,year2,""));
    }else if(caigouyuan=="2015" && type == "month"){
        var data ={};
        data.time=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
        data.caigouyuan = ['张丽','刘本','张博延','杨圣'];
        data.num=[[3, 4, 0, 0],[0, 0, 4, 1],[0, 0, 2, 0],[2, 4, 0, 1],[0, 0, 5, 0],[0, 1, 0, 1],
            [4, 5, 0, 0],[0, 0, 1, 0],[0, 1, 2, 1],[2, 0, 0, 0],[0, 2, 1, 1],[1, 0, 2, 0]];
        var data1 ={};
        data1.time=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
        data1.caigouyuan = ['张丽','刘本','张博延','杨圣'];
        data1.num=[[6, 9, 1, 1],[1, 1, 9, 3],[1, 1, 5, 1],[5, 9, 1, 3],[1, 0, 12, 2],[1, 3, 1, 3],
            [9, 11, 1, 2],[1, 2, 4, 1],[2, 3, 5, 3],[5, 1, 1, 1],[2, 5, 2, 3],[3, 1, 5, 1]];
        libchart('c1',countMonthSaleTotal(data));
        libchart('c2',countMonthSaleTotal(data1));
    }else if(caigouyuan=="2015" && type == "season"){
        var data ={};
        data.time=['一季度','二季度','三季度','四季度'];
        data.caigouyuan = ['张丽','刘本','张博延','杨圣'];
        data.num=[[2, 4, 6, 1], [2, 4, 5, 1], [4, 7, 9, 1], [4, 13, 3, 2]];
        var data1 ={};
        data1.time=['一季度','二季度','三季度','四季度'];
        data1.caigouyuan = ['张丽','刘本','张博延','杨圣'];
        data1.num=[[5,10, 14, 3], [5, 9, 11, 3], [9, 15, 19, 4], [9, 22, 7, 5]];
        libchart('c1',countMonthSaleTotal(data));
        libchart('c2',countMonthSaleTotal(data1));
    }else if(caigouyuan=="2016" && type == "year"){
        var caigy=['张丽','刘本','张博延','杨圣'];
        qunian=[12, 17, 24, 5];
        jinnian=[17, 20, 18, 4];
        qunian1=[4, 5, 8, 2];
        jinnian1=[6, 7, 6, 2];
        year1 = "2016";
        year2 = "2015";
        libchart('c1',countSaleTotal(caigy,qunian1,jinnian1,year1,year2,"提示:经分析采购员周通的毛利对比其它采购员过低"));
        libchart('c2',countSaleTotal(caigy,qunian,jinnian,year1,year2,"提示:经分析采购员周通的销售额过低"));
    }else if(caigouyuan=="2016" && type == "month"){
        var data ={};
        data.time=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
        data.caigouyuan = ['张丽','刘本','张博延','杨圣'];
        data.num=[[2, 4, 0, 0],[0, 0, 4, 1],[0, 0, 2, 0],[2, 4, 0, 1],[0, 0, 5, 0],[0, 0, 0, 1],
            [4, 6, 0, 0],[0, 0, 1, 0],[0, 1, 2, 1],[4, 3, 0, 0],[0, 2, 1, 1],[0, 8, 2, 0]];
        var data1 ={};
        data1.time=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
        data1.caigouyuan = ['张丽','刘本','张博延','杨圣'];
        data1.num=[[5, 10, 2, 1],[1, 2, 10, 2],[1, 1,5, 1],[5, 9, 1, 3],[1, 2, 12, 1],[2, 1, 1, 3],
            [11, 13, 1, 1],[1, 2, 3, 1],[1, 2, 5, 2],[10, 6, 1, 1],[2, 5, 2, 2],[1, 13, 3, 1]];
        libchart('c1',countMonthSaleTotal(data));
        libchart('c2',countMonthSaleTotal(data1));
    }else if(caigouyuan=="2016" && type == "season"){
        var data ={};
        data.time=['一季度','二季度','三季度','四季度'];
        data.caigouyuan = ['张丽','刘本','张博延','杨圣'];
        data.num=[[2, 4, 6, 1], [2, 4, 5, 1], [4, 7, 9, 1], [4, 13, 3, 2]];
        var data1 ={};
        data1.time=['一季度','二季度','三季度','四季度'];
        data1.caigouyuan = ['张丽','刘本','张博延','杨圣'];
        data1.num=[[5, 10, 13, 3], [5, 9, 11, 2], [9, 15, 18, 2], [9, 22, 7, 5]];
        libchart('c1',countMonthSaleTotal(data));
        libchart('c2',countMonthSaleTotal(data1));
    }
}
//购销、代销商品数data
var dxs=679;
var gxs=1548;
var zhonglei=[
    {value:310, name:'日用品'},
    {value:234, name:'食品饮品'},
    {value:135, name:'珠宝'},
    {value:1048, name:'电器'}
];
function option3(dxs,gxs,zhonglei){
    var option = {
        color:color,
        tooltip: {
            trigger: 'item',
            formatter: "{b}: {c}万 ({d}%)"
        },
        series: [
            {
                type:'pie',
                selectedMode: 'single',
                radius: [0, '55%'],

                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:dxs, name:'代销数'},
                    {value:gxs, name:'购销数'}
                ]
            },
            {
                type:'pie',
                radius: ['85%', '70%'],

                data:zhonglei
            }
        ]
    };
    return option;
}

$("#caigou").on("change",function(){
    var caigouyuan = $(this).val();
    if(caigouyuan=="1"){
        var dxs=5;
        var gxs=27;
        var zhonglei=[
            {value:5, name:'日用品'},
            {value:4, name:'食品饮品'},
            {value:13, name:'珠宝'},
            {value:10, name:'电器'}
        ];
        libchart('c3',option3(dxs,gxs,zhonglei));
    }else if(caigouyuan=="2"){
        var dxs=3;
        var gxs=23;
        var zhonglei=[
            {value:7, name:'服装类'},
            {value:5, name:'日用品'},
            {value:8, name:'电器'},
            {value:6, name:'水果'}
        ];
        libchart('c3',option3(dxs,gxs,zhonglei));
    }else if(caigouyuan=="3"){
        var dxs=6;
        var gxs=19;
        var zhonglei=[
            {value:5, name:'进口食品'},
            {value:6, name:'牛奶'},
            {value:8, name:'化妆品'},
            {value:6, name:'水产'}
        ];
        libchart('c3',option3(dxs,gxs,zhonglei));
    }else if(caigouyuan=="4"){
        var dxs=6;
        var gxs=15;
        var zhonglei=[
            {value:310, name:'日用品'},
            {value:234, name:'食品饮品'},
            {value:135, name:'珠宝'},
            {value:1048, name:'电器'}
        ];
        libchart('c3',option3(dxs,gxs,zhonglei));
    }
});

//采购资金占用比data
var cgy_data=[
    {value:32, name:'张丽'},
    {value:26, name:'刘本'},
    {value:25, name:'张博延'},
    {value:21, name:'杨圣'},
];
var option4 = {
    color:color,
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}万 ({d}%)"
    },
    legend: {
        data: cgy
    },
    series : [
        {
            name: '采购资金比例',
            type: 'pie',
            radius : '65%',
            center: ['50%', '50%'],
            data:cgy_data,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};


//个人销售业绩情况data
var xsyq=['刘书彤','刘涛','胡忠良','廖紫荆','张珊瑚','徐守芬','律红旗','杜月柔','刘国华','杜小东'];
var xsyh=['伍玉馨','张晓菁','李仁杰','张莉','卢雪清','钟小琴','马丽娟','程馨','李志芹','冯雨茜'];
var xsqdata=[16,10,10,10,7,7,7,6,6,5];
var xshdata=[0.2,1,1,1,1,2,3,3,3,4];
var option6 = {
    color:color,
    tooltip: {
        trigger: 'axis',
        formatter: "{a} <br/>{b} : {c}万"
    },
    legend: {
        data:['销售前十位','销售后十位'],
        x: 'center'
    },
    grid: [{
        left: 50,
        right: 35,
        top: '10%',
        height: '35%'
    }, {
        left: 50,
        right: 35,
        top: '63%',
        height: '35%'
    }],
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: xsyq
        },
        {
            gridIndex: 1,
            type : 'category',
            boundaryGap : false,
            axisLine: {onZero: true},
            data: xsyh,
            position: 'top'
        }
    ],
    yAxis : [
        {
            type : 'value'
        },
        {
            gridIndex: 1,
            type : 'value',
            inverse: true
        }
    ],
    series : [
        {
            name:'销售前十位',
            type:'line',
            symbolSize: 8,
            hoverAnimation: false,
            data:xsqdata,
              markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
        },
        {
            name:'销售后十位',
            type:'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            symbolSize: 8,
            hoverAnimation: false,
            data:xshdata,
              markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name : '平均值'}
                        ]
                    }
        }
    ]
};

//采购员销售额data
var xsdata = {};
var xsnian=['2016年','2015年'];
var time=['2016年'];
var xsdata=[[550,505],[320,320]];
xsdata.time = time;
xsdata.caigouyuan = xsnian;
xsdata.num = xsdata;
$("#xsYearOption").on("change",function(){
    showXsCount();
});
$("input[name=xstype]").on("click",function(){
    showXsCount();
});
function showXsCount(){
    var caigouyuan = $("#xsYearOption").val();
    var type = $("input[name=xstype]:checked").val();
    if(caigouyuan=="2015" && type == "year"){
        // var data = {};
        // var caigy=['2015年','2014年'];
        // xsdata=[[505,486],[320,320]];

        var tag3 = ['2015年','2014年'];
        var data3 = [505,320];
        xybar("c5", "按年统计销售人员人均销售情况", tag3, data3,'',function(option){
            option.series[0].barWidth='30'
        })

        // data.time = ["2015年"];
        // data.caigouyuan = caigy;
        // data.num = xsdata;
        // libchart('c5',countXsSaleAverage(data));
        //
    }else if(caigouyuan=="2015" && type == "month"){
        // var data ={};
        // data.time=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
        // data.caigouyuan = ['2015年','2014年'];
        // data.num=[[60, 55], [70, 64], [35, 32], [38, 35]
        //     , [40, 37], [45, 43], [35,32], [45,41], [23,21], [47,43], [36,32], [38,34]];
        // libchart('c5',countXsSaleAverage(data));

         var tag3 = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
        var data3 = [60,70,35,38,40,45,35,45,23,47,36,38];

        xybar("c5", "按月统计销售人员人均销售情况", tag3, data3,'',function(option){
            option.series[0].barWidth='30'
        })


    }else if(caigouyuan=="2015" && type == "season"){
         var tag3 = ['一季度','二季度','三季度','四季度'];
        var data3 = [165,123,103,122];

        xybar("c5", "按季度统计销售人员人均销售情况", tag3, data3,'',function(option){
            option.series[0].barWidth='30'
        })
        // var data ={};
        // data.time=['一季度','二季度','三季度','四季度'];
        // data.caigouyuan = ['2015年','2014年'];
        // data.num=[[165, 155], [123, 107], [103, 94], [122, 130]];
        // libchart('c5',countXsSaleAverage(data));
    }else if(caigouyuan=="2016" && type == "year"){
        var tag3 = ['2016年','2015年'];
        var data3 = [486,320];
        xybar("c5", "按年统计销售人员人均销售情况", tag3, data3,'',function(option){
            option.series[0].barWidth='30'
        })
        // var data = {};
        // var caigy=['2016年','2015年'];
        // xsdata=[[550,505],[320,320]];
        // data.time = ["2015年"];
        // data.caigouyuan = caigy;
        // data.num = xsdata;
        // libchart('c5',countXsSaleAverage(data));
    }else if(caigouyuan=="2016" && type == "month"){
        // var data ={};
        // data.time=['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
        // data.caigouyuan = ['2016年','2015年'];
        // data.num=[[65, 58], [75, 67], [43, 34], [40, 37]
        //     , [45, 35], [46, 45], [37,30], [47,40], [23,24], [50,45], [39,30], [42,34]];
        //     58,67,34,37,35,45,30,40,24,45,30,24
        // libchart('c5',countXsSaleAverage(data));
         var tag3 = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
        var data3 = [58,67,34,37,35,45,30,40,24,45,30,24];

        xybar("c5", "按月统计销售人员人均销售情况", tag3, data3,'',function(option){
            option.series[0].barWidth='30'
        })

    }else if(caigouyuan=="2016" && type == "season"){
        // var data ={};
        // data.time=['一季度','二季度','三季度','四季度'];
        // data.caigouyuan = ['2016年','2015年'];
        // data.num=[[183, 159], [131, 106], [107, 94], [141, 109]];
        // libchart('c5',countXsSaleAverage(data));
         var tag3 = ['一季度','二季度','三季度','四季度'];
        var data3 = [159,106,94,109];

        xybar("c5", "按季度统计销售人员人均销售情况", tag3, data3,'',function(option){
            option.series[0].barWidth='30'
        })
    }
}

function countXsSaleAverage(data){
    var option = {
        color:color,
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {y: 30, y2:30, x2:10,x:30,bottom:60},
        title:{
            show:true,
            text:"",
            bottom:0,
            textStyle:{
                color:"#f00",
                fontSize:14,
                fontWeight:200
            },
            padding: [10, 35]
        },
        legend: {
            data:data.caigouyuan
        },
        yAxis : [
            {
                type : 'value',
                name:'（w）'
            }
        ],
        xAxis : [
            {
                type : 'category',
                axisTick : {show: false},
                data : data.time,
                //设置字体倾斜
                axisLabel:{
                    interval:0,
                    rotate:20//倾斜度 -90 至 90 默认为0
                }
            }
        ]

    };
    var series = [];
    for(var i=0;i<data.caigouyuan.length;i++){
        series.push({
            name:data.caigouyuan[i],
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:data.num[i],
            barWidth:'30'
        });
    }
    console.log(series)
    option.series = series;
    return option;
}

var area=['10万以上','8-10万','6-8万','4-6万','2-4万','1-2万','1万以下'];
var area_data=[
    {value:1, name:'10万以上'},
    {value:3, name:'8-10万'},
    {value:5, name:'6-8万'},
    {value:15, name:'4-6万'},
    {value:18, name:'2-4万'},
    {value:4, name:'1-2万'},
    {value:1, name:'1万以下'}
];
var option7 = {
    color:color,
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}个 ({d}%)"
    },
    legend: {
        data: area
    },
    series : [
        {
            name: '采购资金比例',
            type: 'pie',
            radius : '65%',
            center: ['50%', '50%'],
            data:area_data,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

libchart('c1',countSaleTotal(cgy,qunian1,jinnian1,year1,year2,"提示:经分析采购员周通的毛利对比其它采购员过低"));
libchart('c2',countSaleTotal(cgy,qunian,jinnian,year1,year2,"提示:经分析采购员周通的销售额过低"));
libchart('c3',option3(dxs,gxs,zhonglei));
libchart('c4',option4);
// libchart('c5',countXsSaleAverage(xsdata));
 var tag3 = ['2015年','2014年'];
        var data3 = [505,320];
        xybar("c5", "按年统计销售人员人均销售情况", tag3, data3,'',function(option){
            option.series[0].barWidth='30'
        })

        
libchart('c6',option6);
libchart('c7',option7);

$('.active').click(function(){
    $(this).addClass('bg_active').parents().siblings().find('p').removeClass('bg_active');
});