function callback(condition,timeout,func){
    var start_time = Date.now();
    while (!(Date.now()-start_time>1000*timeout)){
        if (condition)
        {
            var result;
            result  = func();
            return result;
        };
        //java.lang.Thread.sleep(50000);
    }
    return "time out";
}


function testfunc(){
    console.log("doing testfunc");
};



var c = false;
r = setTimeout("c = true",50000);
result = callback(c,15,testfunc);
console.log(result);

