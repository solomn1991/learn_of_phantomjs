var page = require("webpage").create();
page.open("http://www.lagou.com/zhaopin/Python/?labelWords=label",
	function(status){
		console.log("Status:" + status);
		if (status === "success"){
			page.render("lagou.png")
		}
		phantom.exit();
	});
