//相关变量初始化
var webserver = require('webserver');
var server = webserver.create();




//获取直接打开的页面
function get_js_html_content(url){
	var page = require("webpage").create();
	var result;
	page.open(url, function (status) {
		if (status=="success") {
			result = {status: status, html: page.content};
		}else{
			result = {status:status,html:"faild to get the full html page"};
		};
		//console.log(JSON.stringify(result));
	});
	return result;
};


//var url = "http://www.lagou.com/zhaopin/Python/?labelWords=label";
//var r = get_js_html_content(url);
//setTimeout("console.log(r)",30000);




//开始监听
var service = server.listen('127.0.0.1:8080', function(request, response) {
	if (request.method =="POST"){
		var url = JSON.parse(request.post).url;
		console.log(url);

		var page = require("webpage").create();
		page.onLoadFinished = function(){
			response.statusCode = 200;
			response.write(page.content);
			response.close()
		}
		page.open(url);

	} else{
		response.statusCode = 403;
		response.write('<html><body>method not allow</body></html>');
		response.close();
	}
})

console.log("service start working at port 8888....");
