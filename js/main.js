/* ----------------------------------
Template by: 沫雪 for mroe.org
Copy prohibited
本模板模板由沫雪制作
未经许可禁止擅自盗用,修改及仿制
https://www.mroe.org
----------------------------------*/
var api = "https://www.mroe.org/";

$(document).ready(function () {
    $(".loading").hide();
    getAchives();
    getHitokoto();
});

$('.menu a').click(function () {
    target = $(this).attr('goto');
    switchTo(target);
});

function switchTo(target) {
    $('.right section').each(function () {
        $(this).removeClass('active');
    });
    $(target).addClass('active');
}

function getHitokoto() {
    $.ajax({
        url: "https://v1.hitokoto.cn/?c=b",
        dataType: "json",
        success: function (result) {
            write(result.hitokoto + " —— " + result.from);
        },
        error: function () {
            write("Error...");
        }
    });
}

function write(text) {
    if (text.length < 30) {
        $('#hitokoto').html(text);
    } else {
        getHitokoto();
    }
}


Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
