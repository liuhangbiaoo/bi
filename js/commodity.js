libpies("merchandiseInventory", "商品库存", " ", " ", ['20%', '70%'], function(option) {
    option.series[0] = {
        name:'商品库存',
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
            {value:500, name:'服饰类'},
            {value:400, name:'水果类'},
            {value:300, name:'奶制品'},
            {value:200, name:'家电电器'},
            {value:300, name:'婴儿用品'},
            {value:400, name:'皮具箱包'},
            {value:400, name:'纺织品'},
            {value:200, name:'家私'}
        ]
    }
});

libpies("sales", "商品销量", " ", " ", [0, '30%'], function(option) {
    option.series[0] = {
        name:'商品销量',
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
            {value:235, name:'服饰类'},
            {value:264, name:'水果类'},
            {value:206, name:'奶制品'},
            {value:150, name:'家电电器'},
            {value:132, name:'婴儿用品'},
            {value:186, name:'皮具箱包'},
            {value:168, name:'纺织品'},
            {value:53, name:'家私'}
        ]
    }
});

var tag13=['淘汰率','引进率','置换率'];
var cat13=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
libline("c3","商品淘汰率/引进率/置换率",tag13,cat13,"",function(option){
    option.yAxis=[
        {
            type: 'value',
            name: '百分比 (%)',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
                formatter: '{value} '
            }
        }
    ]
    option.series=[
        {
            name:'淘汰率',
            type:'line',
            itemStyle: {normal: {
                label : {show:false,position:'top',formatter:'{c} %'},
                lineStyle:{color:"#D1BA74"}
            }},
            data:[30, 32, 15, 8, 13, 23, 15,18,8,9,16,23],
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
            name:'引进率',
            type:'line',
            itemStyle: {normal: {
                label : {show:true,position:'top',formatter:'{c} %'},
                lineStyle:{color:"#F4606C"}
            }},
            data:[12, 8, 34, 60, 22, 12, 32,58,34,6,12,16],
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
            name:'置换率',
            type:'line',
//            stack: '总量',
            itemStyle: {normal: {
                label : {show:false,position:'top',formatter:'{c} %'},
                lineStyle:{color:"#19CAAD"}
            }} ,
            data:[25, 19, 16, 30, 12, 16, 25,26,14,32,29,24],
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
});

//库存/销量/销售额
$("#goodsSal").on("change",function(){
    var fenlei = $("#goodsSal").val();
    if(fenlei=="空调"){
        var cat20= ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
        xybar("allgoods", "库存/销量/销售额", cat20, " ", "x", function(option) {
            option.legend={
                data:['库存','销量','销售额'],
                right:'15px'
            }
            option.series = [
                {
                    name:'库存',
                    type:'bar',
                    data:[250, 230, 200, 160, 150,130, 60, 280, 120, 200, 110, 60]
                },
                {
                    name:'销量',
                    type:'bar',
                    data:[30, 20, 30, 40, 10, 20, 70, 120, 160, 150, 90, 50]
                },
                {
                    name:'销售额',
                    type:'line',
                    yAxisIndex: 1,
                    data:[9, 6.5, 9.5,12.6, 3.2, 6.3,21.6, 29.2, 54.3, 45.6, 27.1, 15.9],
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
            option.xAxis=[
                {
                    type: 'category',
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
                option.yAxis=[
                    {
                        type: 'value',
                        name: '数量',
                        min: 0,
                        max: 300,
                        interval: 50,
                        axisLabel: {
                            formatter: '{value} '
                        }
                    },
                    {
                        type: 'value',
                        name: '金额 /万元',
                        min: 0,
                        max: 60,
                        interval:10,
                        axisLabel: {
                            formatter: '{value} '
                        }
                    }
                ]
        });
    }else if(fenlei=="冰箱"){
        var cat20= ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
        xybar("allgoods", "库存/销量/销售额", cat20, " ", "x", function(option) {
            option.legend={
                data:['库存','销量','销售额'],
                right:'15px'
            }
            option.series = [
                {
                    name:'库存',
                    type:'bar',
                    data:[250, 230, 200, 160, 150,130, 60, 280, 120, 200, 110, 60]
                },
                {
                    name:'销量',
                    type:'bar',
                    data:[30, 20, 30, 40, 10, 20, 70, 120, 160, 150, 90, 50]
                },
                {
                    name:'销售额',
                    type:'line',
                    yAxisIndex: 1,
                    data:[9, 6.5, 9.5,12.6, 3.2, 6.3,21.6, 29.2, 54.3, 45.6, 27.1, 15.9],
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
            option.xAxis=[
                {
                    type: 'category',
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
                option.yAxis=[
                    {
                        type: 'value',
                        name: '数量',
                        min: 0,
                        max: 300,
                        interval: 50,
                        axisLabel: {
                            formatter: '{value} '
                        }
                    },
                    {
                        type: 'value',
                        name: '金额 /万元',
                        min: 0,
                        max: 60,
                        interval:10,
                        axisLabel: {
                            formatter: '{value} '
                        }
                    }
                ]
        });
    } else if(fenlei=="电视"){
        var cat20= ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
        xybar("allgoods", "库存/销量/销售额", cat20, " ", "x", function(option) {
            option.legend={
                data:['库存','销量','销售额'],
                right:'15px'
            }
            option.series = [
                {
                    name:'库存',
                    type:'bar',
                    data:[100, 40, 150, 64, 150,84, 180, 96, 200, 80, 120, 60]
                },
                {
                    name:'销量',
                    type:'bar',
                    data:[60, 70, 86, 68, 66, 86, 90, 120, 145, 105, 68, 35]
                },
                {
                    name:'销售额',
                    type:'line',
                    yAxisIndex: 1,
                    data:[18, 21, 23.5,20.5, 25.3, 27.2,36.5, 42.5, 30.5, 45.6, 23.5, 9.6],
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
            option.xAxis=[
                {
                    type: 'category',
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
                option.yAxis=[
                    {
                        type: 'value',
                        name: '数量',
                        min: 0,
                        max: 300,
                        interval: 50,
                        axisLabel: {
                            formatter: '{value} '
                        }
                    },
                    {
                        type: 'value',
                        name: '金额 /万元',
                        min: 0,
                        max: 60,
                        interval:10,
                        axisLabel: {
                            formatter: '{value} '
                        }
                    }
                ]

//    option.toolbox={
//         feature: {
//             dataView: {show: true, readOnly: false},
//             magicType: {show: true, type: ['line', 'bar']},
//             restore: {show: true},
//             saveAsImage: {show: true}
//         }
//    }

        });
    }
});
//库存/销量/销售额
var cat20= ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
xybar("allgoods", "库存/销量/销售额", cat20, " ", "x", function(option) {
    option.legend={
        data:['库存','销量','销售额'],
        right:'15px'
    }
    option.series = [
        {
            name:'库存',
            type:'bar',
            data:[250, 230, 200, 160, 150,130, 60, 280, 120, 200, 110, 60]
        },
        {
            name:'销量',
            type:'bar',
            data:[30, 20, 30, 40, 10, 20, 70, 120, 160, 150, 90, 50]
        },
        {
            name:'销售额',
            type:'line',
            yAxisIndex: 1,
            data:[9, 6.5, 9.5,12.6, 3.2, 6.3,21.6, 29.2, 54.3, 45.6, 27.1, 15.9],
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
    option.xAxis=[
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    option.yAxis=[
        {
            type: 'value',
            name: '数量',
            min: 0,
            max: 300,
            interval: 50,
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '金额 /万元',
            min: 0,
            max: 60,
            interval:10,
            axisLabel: {
                formatter: '{value} '
            }
        }
    ]

//    option.toolbox={
//         feature: {
//             dataView: {show: true, readOnly: false},
//             magicType: {show: true, type: ['line', 'bar']},
//             restore: {show: true},
//             saveAsImage: {show: true}
//         }
//    }

});

//品牌数/品项数/动销数/适销数
$("#goodsP").on("change",function(){
    var fenlei = $("#goodsP").val();
    if(fenlei=="空调"){
        var cat21= ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
        xybar("goods_attribute", "品牌数/品项数/动销数/适销数", cat21, " ", "x", function(option) {
            option.legend={
                data:['品牌数','品项数','动销率','适销率']
            }
            option.series = [
                {
                    name:'品牌数',
                    type:'bar',
                    data:[6, 6, 6, 6, 7, 8, 8, 8,8, 8, 6, 6],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'品项数',
                    type:'bar',
                    data:[36, 39, 40, 42, 42, 45, 45,45,44,43, 40,35],
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
                    name:'动销率',
                    type:'line',
                    yAxisIndex: 1,
                    data:[12, 15, 13, 15.8, 16.4, 20.6, 25.6, 15, 21, 19, 12, 14],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'适销率',
                    type:'line',
                    yAxisIndex: 1,
                    data:[8.1, 8.9, 10.4, 11.5, 28.3, 35.6, 60.5, 50.4, 31.2, 15.6, 12, 7],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                }
            ]
            option.yAxis=[
                {
                    type: 'value',
                    name: '数量',
                    min: 0,
                    max: 100,
                    interval: 20,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                {
                    type: 'value',
                    name: '百分比(%)',
                    min: 0,
                    max: '100',
                    interval:20,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ]
        });
    }else if(fenlei=="冰箱"){
        var cat21= ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
        xybar("goods_attribute", "品牌数/品项数/动销数/适销数", cat21, " ", "x", function(option) {
            option.legend={
                data:['品牌数','品项数','动销率','适销率']
            }
            option.series = [
                {
                    name:'品牌数',
                    type:'bar',
                    data:[6, 6, 6, 6, 7, 8, 8, 8,8, 8, 6, 6],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'品项数',
                    type:'bar',
                    data:[36, 39, 40, 42, 42, 45, 45,45,44,43, 40,35],
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
                    name:'动销率',
                    type:'line',
                    yAxisIndex: 1,
                    data:[12, 15, 13, 15.8, 16.4, 20.6, 25.6, 15, 21, 19, 12, 14],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'适销率',
                    type:'line',
                    yAxisIndex: 1,
                    data:[8.1, 8.9, 10.4, 11.5, 28.3, 35.6, 60.5, 50.4, 31.2, 15.6, 12, 7],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                }
            ]
            option.yAxis=[
                {
                    type: 'value',
                    name: '数量',
                    min: 0,
                    max: 100,
                    interval: 20,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                {
                    type: 'value',
                    name: '百分比(%)',
                    min: 0,
                    max: '100',
                    interval:20,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ]
        });

    }else{
        var cat21= ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
        xybar("goods_attribute", "品牌数/品项数/动销数/适销数", cat21, " ", "x", function(option) {
            option.legend={
                data:['品牌数','品项数','动销率','适销率']
            }
            option.series = [
                {
                    name:'品牌数',
                    type:'bar',
                    data:[6, 6, 6, 6, 7, 8, 8, 8,8, 8, 6, 6],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'品项数',
                    type:'bar',
                    data:[36, 39, 40, 42, 42, 45, 45,45,44,43, 40,35],
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
                    name:'动销率',
                    type:'line',
                    yAxisIndex: 1,
                    data:[12, 15, 13, 15.8, 16.4, 20.6, 25.6, 15, 21, 19, 12, 14],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name:'适销率',
                    type:'line',
                    yAxisIndex: 1,
                    data:[8.1, 8.9, 10.4, 11.5, 28.3, 35.6, 60.5, 50.4, 31.2, 15.6, 12, 7],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    },
                    markLine : {
                        data : [
                            {type : 'average', name: '平均值'}
                        ]
                    }
                }
            ]
            option.yAxis=[
                {
                    type: 'value',
                    name: '数量',
                    min: 0,
                    max: 100,
                    interval: 20,
                    axisLabel: {
                        formatter: '{value} '
                    }
                },
                {
                    type: 'value',
                    name: '百分比(%)',
                    min: 0,
                    max: '100',
                    interval:20,
                    axisLabel: {
                        formatter: '{value} '
                    }
                }
            ]
        });

    }
});
var cat21= ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
xybar("goods_attribute", "品牌数/品项数/动销数/适销数", cat21, " ", "x", function(option) {
    option.legend={
        data:['品牌数','品项数','动销率','适销率']
    }
    option.series = [
        {
            name:'品牌数',
            type:'bar',
            data:[6, 6, 6, 6, 7, 8, 8, 8,8, 8, 6, 6],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'品项数',
            type:'bar',
            data:[36, 39, 40, 42, 42, 45, 45,45,44,43, 40,35],
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
            name:'动销率',
            type:'line',
            yAxisIndex: 1,
            data:[12, 15, 13, 15.8, 16.4, 20.6, 25.6, 15, 21, 19, 12, 14],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'适销率',
            type:'line',
            yAxisIndex: 1,
            data:[8.1, 8.9, 10.4, 11.5, 28.3, 35.6, 60.5, 50.4, 31.2, 15.6, 12, 7],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ]
    option.yAxis=[
        {
            type: 'value',
            name: '数量',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '百分比(%)',
            min: 0,
            max: '100',
            interval:20,
            axisLabel: {
                formatter: '{value} '
            }
        }
    ]
});

//促销活动商品列表
var tharr=["商品名称","类别","销量","促销额","销售额","促销额占比"];
var trarr=[["格力空调","家电","1071","1065929","3480750","56.7%"],["美的空调","家电","952","1913978","3094000","61.8%"],["海尔空调","家电","908","1337142","2951000","45.6%"],["TCL空调","家电","648","1161937","2106000","55.17%"],["奥克斯空调","家电","453","846538","1472250","57.49%"],["格兰仕空调","家电","379","846763","1231750","68.8%"],["TCL电视","家电","819","970936","2113020","45.9%"],["美的冰箱","家电","635","650145","1047750","62.05%"],["长虹电视","家电","1028","1579155","2652240","59.54%"]];
biTable("#c5",tharr,trarr);

//促销商品销量走势
var cat19= ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
xybar("c6", "促销商品销量柱状图", cat19, " ", "x", function(option) {
    option.legend={
        data:['格力空调','美的空调','海尔空调','TCL空调','奥克斯空调','格兰仕空调','TCL电视','美的冰箱','长虹电视'],
        top:"10px"
    };
    option.series = [
        {
            name:'格力空调',
            type:'bar',
            stack: '空调',
            data:[68, 72, 56, 42, 59, 120, 146,175,173,67,51,42],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            }
        },
        {
            name:'美的空调',
            type:'bar',
            stack: '空调',
            data:[53, 66, 45, 46, 38, 106, 126,186,149,53,49,35]
        },
        {
            name:'海尔空调',
            type:'bar',
            stack: '空调',
            data:[46, 61, 46, 55, 23, 123, 156,108,168,35,45,42]
        },
        {
            name:'TCL空调',
            type:'bar',
            stack: '空调',
            data:[23, 35, 22, 36, 34, 88, 106,135,106,23,24,16]
        },
        {
            name:'奥克斯空调',
            type:'bar',
            stack: '空调',
            data:[15, 13, 26, 32, 24, 55, 68,78,81,32,14,15]
        },
        {
            name:'格兰仕空调',
            type:'bar',
            barWidth : 5,
            stack: '空调',
            data:[12, 16, 16, 18, 20, 56, 57,60,68,32,15,9]
        },
        {
            name:'TCL电视',
            type:'bar',
            stack: '电视',
            data:[63, 45, 68, 86, 68, 23, 68,73,98,145,36,46]
        },
        {
            name:'美的冰箱',
            type:'bar',
            stack: '冰箱',
            data:[24, 68, 75, 45, 23, 30, 62,36,66,125,36,45]
        },
        {
            name:'长虹电视',
            type:'bar',
            stack: '电视',
            data:[86, 68, 75, 99, 56, 82, 61,73,106,186,64,72]
        }
    ]
});
//畅销商品列表
var tharr=["商品名称","类别","销量","销售额","周转次数","周转天数"];
var trarr=[["格力空调","家电","1071","3480750","15","24"],["美的空调","家电","952","3094000","10.27","35"],["海尔空调","家电","908","2951000","17.48","20.6"],["TCL空调","家电","648","2106000","19.65","18.31"],["奥克斯空调","家电","453","1472250","15.02","23.67"],["格兰仕空调","家电","379","1231750","15.42","23.28"],["TCL电视","家电","819","2113020","19.27","18.67"],["美的冰箱","家电","635","1047750","15.52","23.18"],["长虹电视","家电","1028","2652240","10.57","34.04"]];
biTable("#c7",tharr,trarr);

//滞销商品列表
var tharr=["商品名称","类别","销量","周转天数","周转次数","销售额"];
var trarr=[["锤子手机","手机","124","322276","4.6","78.01"],["口罩","日常用品","1240","6200","1.5","240"],["跑步机","运动器械","23","35450","2.9","124"],["按摩椅","家用电器","123","123640","3.7","97.3"],["永久27速山地自行车","山地车","56","58206","3.9","89.6"],["凤凰地自行车","山地车","38","19250","3.1","116.12"],["洛克菲勒自行车","山地车","39","27960","2.7","144"],["T7公路车自行车","山地车","64","68450","4.5","80"],["VIRES破风公路自行车","山地车","58","34800","4.8","75"]];
biTable("#c8",tharr,trarr);

