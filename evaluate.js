var url = "http://www.google.com";
var page = require("webpage").create();
page.open(url,function(status) {
	var title = page.evaluate(function(){
	return document.title;
	});

	console.log("Page title is " + title);
	phantom.exit();
});


