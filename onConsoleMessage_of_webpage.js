var url = "http://www.google.com";
var page = require("webpage").create();
page.onConsoleMessage = function(msg){
	console.log(msg);
};

page.open(url,function(status) {
	page.evaluate(function(){
		console.log(document.title);
	});
	phantom.exit();
});

