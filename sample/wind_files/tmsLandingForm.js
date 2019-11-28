// 实例化
new FixedMenu();
var grades = [{
        value: "小一",
        text: "小学一年级",
        type: 3
    },
    {
        value: "小二",
        text: "小学二年级",
        type: 3
    }, {
        value: "小三",
        text: "小学三年级",
        type: 3
    }, {
        value: "小四",
        text: "小学四年级",
        type: 3
    }, {
        value: "小五",
        text: "小学五年级",
        type: 3
    }, {
        value: "小六",
        text: "小学六年级",
        type: 3
    }, {
        value: "初一",
        text: "初一",
        type: 10
    }, {
        value: "初二",
        text: "初二",
        type: 10
    }, {
        value: "初三",
        text: "初三",
        type: 10
    },
    {
        value: "高一",
        text: "高一",
        type: 9
    },
    {
        value: "高二",
        text: "高二",
        type: 9
    },
    {
        value: "高三",
        text: "高三",
        type: 9
    }
]
// var grades = [{
//     value: "高三",
//     text: "高二升高三",
//     type: 9
// },{
//     value: "高二",
//     text: "高一升高二",
//     type: 9
// },{
//     value: "高一",
//     text: "初三升高一",
//     type: 9
// },{
//     value: "初三",
//     text: "初二升初三",
//     type: 10
// },  {
//     value: "初二",
//     text: "初一升初二",
//     type: 10
// },{
//     value: "初一",
//     text: "小六升初一",
//     type: 10
// },{
//     value: "小六",
//     text: "小五升小六",
//     type: 3
// },{
//     value: "小五",
//     text: "小四升小五",
//     type: 3
// },{
//     value: "小四",
//     text: "小三升小四",
//     type: 3
// },{
//     value: "小三",
//     text: "小二升小三",
//     type: 3
// },{
//     value: "小二",
//     text: "小一升小二",
//     type: 3
// }, {
//     value: "小一",
//     text: "幼儿园升小一",
//     type: 3
// },
// ];
var years = [{
        value: "数学",
        text: "数学"
    },
    {
        value: "英语",
        text: "英语"
    },
    {
        value: "语文",
        text: "语文/作文"
    },
    {
        value: "物理",
        text: "物理"
    },
    {
        value: "化学",
        text: "化学"
    },
    {
        value: "生物",
        text: "生物"
    },
    {
        value: "政治",
        text: "政治"
    },
    {
        value: "历史",
        text: "历史"
    },
    {
        value: "地理",
        text: "地理"
    },
    {
        value: "科学",
        text: "科学"
    }
];
var grade = $(".tmsLandingForm .grade");
var year = $(".tmsLandingForm .year");
var formId = $(".formId").val();

var strhost = location.href;
var gradeser = [];
var gradeuser = location.href.match(/gradeuser=([a-zA-Z0-9]+)/);
if (gradeuser) {
    var gradeNo = "";
    if (gradeuser && gradeuser[1]) {
        gradeNo = gradeuser[1];
    }
    if (1 < gradeNo && gradeNo < 13) {
        gradeser = grades.slice(gradeNo - 1);
        grades = gradeser;
    }
}


//获得1级菜单select  
function creategrade() {
    //为1级菜单select添加option  
    // for (var i in grades) {
    for (var i=0;i<grades.length;i++){
        grade.append("<option value='" + grades[i].value + "'>" + grades[i].text + "</option>")
    }
}
//获得2级菜单select 
function createYears(indexNUM) {
    //获取当前选中的一级菜单的选项的下标
    // console.log(grade.index())
    var gradeIndex = grade[indexNUM].selectedIndex;
    var _grade_index = grades[gradeIndex - 1]['type']
    //清空二级菜单选项  
    for (var i = 0; i < _grade_index; i++) {
        year.eq(indexNUM).append("<option value='" + years[i].value + "'>" + years[i].text + "</option>")
    }
}
creategrade();
// 跳过年级判定


// 错误提示 
function showErrorMsg(msg) {
    // $(".pop-error").removeClass("popovered").find(".Pop").text(msg);
    // setTimeout(function () {
    //     $(".pop-error").addClass("popovered");
    // }, 2000);
    // return false;
    // alert(isWhichBtn)
    var form = $('.tmsLandingForm').eq(isWhichBtn).parent()
    var isFixedForm = form.parent().hasClass('form-listen-content')
    var isBannerForm = form.hasClass('hf-form-content')
    // banner的样式
    if (isBannerForm || isFixedForm) {
        form.toast({
            position: 'absolute',
            content: msg,
            top: '50%'
        })
        return
    }

    $('body').toast({
        position: 'fixed',
        content: msg,
        top: '80%',
    })
}
var indexNUM, yearNUM;
grade.change(function () {
    indexNUM = grade.index(this);
    year.eq(indexNUM).empty();
    createYears(indexNUM);
});
year.click(function () {
    yearNUM = year.index(this);
    isWhichBtn = yearNUM
    if (grade.get(yearNUM).value == "") {
        showErrorMsg("请先选择年级")
    }
});

// 验证
function validation(isWhichBtn) {
    var gradeValue = grade.get(isWhichBtn) && grade.get(isWhichBtn).value
    var yearValue = year.get(isWhichBtn) && year.get(isWhichBtn).value
    var reg_phone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    var reg_name = /^[\u4E00-\u9FA5\uf900-\ufa2d·sa-zA-Z]*$/; //姓名验证
    var reg_number = /^([0-9a-zA-Z]){5,15}$/;
    var NameValue = $(".name").get(isWhichBtn).value
    var phoneValue = $(".phone").get(isWhichBtn).value
    var agreeInfo = $('.agree-info').find('input[type="checkbox"]').eq(isWhichBtn).prop('checked')
    var strhost = location.href;
    if (NameValue == "") {
        showErrorMsg("请输入姓名")
        return false;
    } else if (!reg_name.test(NameValue)) {
        showErrorMsg("请输入正确的姓名")
        return false;
    }
    if (phoneValue == "") {
        showErrorMsg("请输入手机号")
        return false;
    } else if (!reg_phone.test(phoneValue)) {
        showErrorMsg("请输入正确的手机号")
        return false;
    }
    if (year.get(isWhichBtn) && yearValue == null) {
        showErrorMsg("请重新选择年级")
        return false;
    } else if (gradeValue == "" && $(".name").eq(isWhichBtn).siblings('.grade').length) {
        showErrorMsg("请选择年级")
        return false;
    }
    if (yearValue == "" && $(".name").eq(isWhichBtn).siblings('.year').length) {
        showErrorMsg("请选择学科")
        return false;
    }

    if ($('.agree-info').find('input[type="checkbox"]').get(isWhichBtn) && !agreeInfo) {
        showErrorMsg("请勾选用户注册协议和隐私政策完成预约")
        return false;
    }
    if (strhost.match('zhuanzhu-mC')) { //bd-m
        var kahaoValue = $(".kahao").get(isWhichBtn).value
        if (kahaoValue == "") {
            showErrorMsg("请输入卡号")
            return false;
        } else if (!reg_number.test(kahaoValue)) {
            showErrorMsg("请输入正确卡号")
            return false;
        }
    }
    formId = "79"
    $(".formId").val(formId);
    return true;
}

var requestUrl = location.href;
var timestamp = parseInt((new Date().getTime()) / 1000);


var hostn;
var host = window.location.host;
var currentHost = location.hostname;

if (currentHost === 'vip.hfjy.la' || currentHost === 'localhost' || currentHost === '127.0.0.1'|| currentHost === 'd-www.hfjy.com'|| currentHost === 'www.newwebsite.com'|| currentHost === 'n-www.hfjy.com' || currentHost === 't-www.hfjy.com') {
    hostn = "//test-ycl.hfjy.com/crm-form-data/commonFormWithVerify"
} else if (currentHost.indexOf("d-www") >= 0 || currentHost.indexOf("test-") >= 0 || currentHost.indexOf("t-") >= 0) {
    hostn = "//test-ycl.hfjy.com/crm-form-data/commonFormWithVerify"
} else {
    hostn = "//ycl.hfjy.com/crm-form-data/commonFormWithVerify"
}

var ded1 = $('.ded1').val(),
    ded2 = $('.ded2').val(),
    ded3 = $('.ded3').val()
var tmsLandingFormUrl = hostn + '?adidNo=' + adidNo;
var isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
var isWhichBtn, isWhichBtnId;
$('.tmsLandingForm .tmsLandingFormBtn').click(function () {
    isWhichBtn = $('.tmsLandingForm .tmsLandingFormBtn').index(this)
    isWhichBtnId = "tmsLandingFormId" + isWhichBtn;

    $(this).parent().addClass(isWhichBtnId);
    if (validation(isWhichBtn)) {
        $('.tmsLandingForm .tmsLandingFormBtn').prop('disabled', true);
        ajaxFrom()
    }
    return false
    function ajaxFrom () {
        $.ajax({
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded',
            data: $('.' + isWhichBtnId).serialize() + "&" + $.param({
                requestUrl: requestUrl,
                clickTime: timestamp,
                uid: args.uid,
                timesmap: ded1,
                pagecode: ded2,
                signs: ded3
            }),
            url: tmsLandingFormUrl,
            success: function (json) {
                $('.tmsLandingForm .tmsLandingFormBtn').prop('disabled', false);
                if (json.error == 0) {
                    // showErrorMsg(json.message)
                    $(".content-dialog").addClass("popovered");
                    digClose();
                    thankM()
                } else if(json.error == 1 ){
                    showErrorMsg(json.message)
                } else {
                    // showErrorMsg(json.message)
                    localStorage.setItem("content", json.content)
                    version()  
                }
            },
            error: function () {
                $('.tmsLandingForm .tmsLandingFormBtn').prop('disabled', false);
            }
        });
    }
    
});


var strhost = location.href;
if (strhost.match("m.hfjy.com") || strhost.match("hfjy.la") || strhost.match("n-www.hfjy.com") || strhost.match("hfjy.com")) {
    ABproject = "register";
}
function thankM() {
    if(ABproject){
        adhoc('track', ABproject, 1, function () { 
             window.location.href = 'https://vip.hfjy.com/NewesThanks'
        })
    } else {
         window.location.href = 'https://vip.hfjy.com/NewesThanks'
    }
    return false;
}

function thank53() {
 
    jumpUrl("//vip.hfjy.com/53talk")
    return false;

}

function version() {
    jumpUrl("https://vip.hfjy.com/verificationCodeForm")
    return false;
}


//弹窗关闭
$(".tmsLandingForm-close").click(function () {
    digClose();
})

function digClose(){
    $(".content-dialog").addClass("popovered");
}

