//窗口变化刷新页面
resrwind();

function resrwind() {
    $(window).resize(function() {
        window.location.href = window.location.href;
    })
}

// 左侧默认高度
winh($(".bi-menu"))

function winh(e) {
    e.height($(window).height() - 64)
}
//菜单与主体高度一致
eqh($(".bi-menu"), $(".bi-main"));

function eqh(a, b) {
    var ah = a.height();
    var bh = b.height();
    if (ah >= bh) {
        b.height(ah);
    } else {
        a.height(bh);
    }
}


/**
 * [biTable 自动生成表格]
 * @param  {[type]} id [id]
 * @param  {[type]} hd [thead]
 * @param  {[type]} bd [tbody]
 * @return {[type]}    [description]
 */
function biTable(id,hd,bd){
  var tags="",tda="",trj="";
    $.each(hd,function(i,e){
        tags+='<th>'+hd[i]+'</th>';
    })
   var tbody=$(id).find('table').html("<thead><tr>"+tags+"</tr></thead><tbody></tbody>");
    $.each(bd,function(j,e){
        tbody.find('tbody').append('<tr>'+bd[j]+'</tr>');
        tbody.find("tbody tr:odd").addClass("odd");
        tbody.find("tbody tr:even").addClass("even");
        $.each(bd[j],function(k){
             tbody.find('tbody tr:eq('+j+')').append('<td>'+bd[j][k]+'</td>');
        })
    })
}


/**
 * [libchart echart公共方法]
 * @param  {[type]} id     [description]
 * @param  {[type]} option [description]
 * @return {[type]}        [description]
 */
function libchart(id, option) {
    if (document.getElementById(id)) {
        var myChart = echarts.init(document.getElementById(id));
        myChart.setOption(option);
    }
}

// var color = ['#7996d2', '#f8e594', '#f78db3', '#a498b9', '#ffabac', '#a0dca0', '#90d4e7', '#87b1e6', '#6fcdb2', '#e5b4b2'];
var color=['#7897d3','#f9e595','#f78db3','#a1dda1','#a599b9','#ffabad','#91d5e7','#6ecdb3','#e5b5b3'];
/* 饼图公共方法 */
function libpies(id, title, tag, data, radius, fn) {
    if (document.getElementById(id)) {
        var myChart = echarts.init(document.getElementById(id));
        var option = {
            //color: ['#ff6c22', '#ffbb2a', '#4ccb80', '#36d7d1', '#d8da18', '#00afe9', '#846abb', '#eb6e92', '#ce3554', '#de66bb'],
            color: color,
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'right',
                data: tag
            },
            series: [{
                name: title,
                type: 'pie',
                radius: radius,
                center: ['35%', '55%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    }
                },
                itemStyle: {
                    emphasis: {
                        borderWidth: '3px'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: data,
                itemStyle: {
                    normal: {
                        borderWidth: 2,
                        borderColor: '#fff'
                    }
                }
            }]
        };

        if (fn) {
            fn(option)
        }
        myChart.setOption(option);
    }

};
//柱状图公共方法
//    柱状图公共
//    xybar("netbar","活动网站分布",cat,datass,"y",function(option){
//        var tagss={};
//        tagss.data=['网站','博客'];
//        option.legend=tagss;
//        option.series=[{name: "网站",type: 'bar',data: datass},{name: "博客",type: 'bar',data: datass}]
//    });
function xybar(id, title, category, data, xy, fn) {
    if (document.getElementById(id)) {
        var myChart = echarts.init(document.getElementById(id));
        var xAxis = [],
            yAxis = [],
            series = [];
        if (xy) {
            if (xy == "x") {
                xAxis.push({ type: 'category', data: category });
                yAxis.push({ type: 'value' });
            }
            if (xy == "y") { //横向
                xAxis.push({ type: 'value' });
                yAxis.push({ type: 'category', data: category });
            }
        } else {
            xAxis.push({ type: 'category', data: category });
            yAxis.push({ type: 'value' });
        }
        if (data) {
            series.push({ name: title, type: 'bar', data: data })
        }
        option = {
            color: color,
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: xAxis,
            yAxis: yAxis,
            series: series,
        }
        if (fn) {
            fn(option)
        }
        myChart.setOption(option);
    }
}


//折线图公共方法
function libline(id, title, tag, cat, data, fn) {
    if (document.getElementById(id)) {
        var myChart = echarts.init(document.getElementById(id));
        option = {
            color: color,
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: tag
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: cat
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name: title,
                type: 'line',
                stack: '总量',
                data: data
            }]
        };
        if (fn) {
            fn(option)
        }
        myChart.setOption(option);
    }
}
