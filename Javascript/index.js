$(".site-category-list>li").mouseover(function() {
	$(this).css("background-color", "#ff6700");
	$(this).children("div").css("display", "block"); /*显示第几个内容*/
});
$(".site-category-list>li").mouseout(function() {
	$(this).css("background-color", "");
	$(this).children("div").css("display", "none"); /*隐藏第几个内容*/
});

var name = localStorage.loginName;
if (name == "undefined") {
	$("#js-add-li").append('<li><a href="account.html">登录</a></li><li><a href="">注册</a></li><li><a href="">消息通知</a></li>');
} else {
	$("#js-add-li").append('<li><a href="">' + name + '</a></li>');
}

// var errinfo = localStorage.errinfo;
// if (errinfo=="james") {
// 	$("#err_tip").append('<span>用户名或密码不正确</span>');
// }
