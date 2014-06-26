var async = require('async'),
    fs = require('fs');

function fun1(callback){
    var data = "Start File.";
    console.log(data);
    callback(null,data);
}

function fun2(callback) {
    fs.readFile('/home/intelligrape/WebstormProjects/AsyncDemo/file1.txt', function (err, data) {
        console.log(data.toString());
        callback(err,data);
    });
}

function fun3(callback){
    var data = "End File.";
    console.log(data);
    callback(null,data);
}

async.parallel([fun1,fun2,fun3],function(err,result){
    console.log(result);
});

