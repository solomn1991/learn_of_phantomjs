var url = "http://www.lagou.com/zhaopin/Python/?labelWords=label";
/*var page = require("webpage").create();
page.onResorceRequested = function(request){
	console.log("Request " + JSON.stringify(request,undefined,4));
};
page.onResourcReceived = function(response){
	console.log("Receive " + JSON.stringify(response),undefined,4);
};

page.open(url)*/

var page = require('webpage').create();
page.onResourceRequested = function(request) {
  console.log('Request ' + JSON.stringify(request, undefined, 4));
};
page.onResourceReceived = function(response) {
  console.log('Receive ' + JSON.stringify(response, undefined, 4));
};
page.open(url,function(status){
	phantom.exit();
})
