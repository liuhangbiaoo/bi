function Dsy() {
    this.Items = {};
}
Dsy.prototype.add = function (id, iArray) {
    this.Items[id] = iArray;
}
Dsy.prototype.Exists = function (id) {
    if (typeof(this.Items[id]) == "undefined") return false;
    return true;
}

function change(v) {
    var str = "0";
    for (i = 0; i < v; i++) { str += ("_" + (document.getElementById(s[i]).selectedIndex - 1));}
    ;
    var ss = document.getElementById(s[v]);
    with (ss) {
        length = 0;
        options[0] = new Option(opt0[v], opt0[v]);
        if (v && document.getElementById(s[v - 1]).selectedIndex > 0 || !v) {
            if (dsy.Exists(str)) {
                ar = dsy.Items[str];
                for (i = 0; i < ar.length; i++)options[length] = new Option(ar[i], ar[i]);
                if (v)options[0].selected = true;
            }
        }
        if (++v < s.length) {change(v);}
    }
}
function preselect(p_key) {
    //alert(p_key);
    var index;

    var provinces = new Array("食品饮品", "服装商场");
    var cnt = provinces.length;
    //alert(cnt);
    for (i = 0; i < cnt; i++) {
        if (p_key == provinces[i]) {
            index = i;
            break;
        }
    }
    if (index < provinces.length) {
        document.getElementById(s[0]).selectedIndex = index + 1;
        change(1);
    }
}

var dsy = new Dsy();
dsy.add("0", ["食品饮品", "服装商场"]);
dsy.add("0_0", ["休闲食品","罐装食品"]);
dsy.add("0_1", ["女装","男装"]);
dsy.add("0_0_0", ["豆干类","肉干类"]);
dsy.add("0_0_1", ["肉类罐头","水果罐头"]);
dsy.add("0_1_0", ["裙子","T恤"]);
dsy.add("0_1_1", ["衬衫","T恤"]);


var s = ["s1", "s2", "s3"];
var opt0 = ["--选择一级分类--", "--选择二级分类--", "--选择三级分类--"];
function setup(address) {
    for (i = 0; i < s.length - 1; i++)
        document.getElementById(s[i]).onchange = new Function("change(" + (i + 1) + ");promptinfo();");
    if(address){
        opt0 = address;
    }else{
        opt0 = ["--选择一级分类--", "--选择二级分类--", "--选择三级分类--"];
    }
    change(0);
}
