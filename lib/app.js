require("restartable")(function(parRestartableObj){
  var express = require("express");
  var http = require("http");
  var fs = require("fs");

  var app = express();

  var server = http.createServer(app);

  server.listen(8080);

  var nodeMirror = require("node-mirror");
  
  nodeMirror.startServer({
    dir: process.cwd()
    , app: app
    , server: server
    , webpath: "_admin"
    , restartableObj: parRestartableObj
  }, function(){
    app.get("/", function(req, res){
      res.setHeader('Content-Type', "text/html");
      
      fs.readFile(__dirname + "/../src/index.html", function(err, data){
        if (err){
          console.log("error reading index");
          console.log("err");
          res.end(err);
          return;
        };
        var s = data.toString();
        //s = s.replace(/{{{relativeStr}}}/g, relativeStr);
        res.end(s);
      });
      
    });
    app.use("/", express["static"](__dirname + "/../src/"));
  });
  
  
}, function(parRestartableObj){

});

