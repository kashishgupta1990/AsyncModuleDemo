var async = require('async');

function fun1(callback){
    var data = "--i am fun1--";
    callback(null,data);
}
function fun2(args1,callback){
    var data1 = "--i am fun2(1)--";
    var data2 = "--i am fun2(2)--";
    var data3 = "--i am fun2(3)--";

    console.log(args1);
    //console.log(data1);
    //console.log(data2);
    //console.log(data3);
    callback(null,data1,data2,data3);
}
function fun3(args1,args2,args3,callback){
    var data = "--i am fun3--";

    console.log(args1);
    console.log(args2);
    console.log(args3);

    //console.log(data);
    callback(null,data);
}

async.waterfall([fun1,fun2,fun3], function (err,finalresult) {
    console.log(finalresult);
});