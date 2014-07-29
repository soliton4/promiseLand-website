require("restartable")(function(parRestartableObj){
  var express = require("express");
  var http = require("http");
  var fs = require("fs");
  
  var socketIo = require("socket.io");
  var promiseland = require("promiseland");
  
  var argv = require("optimist").argv;

  var app = express();

  var server = http.createServer(app);

  server.listen(8080);

  /*var nodeMirror = require("node-mirror");
  
  nodeMirror.startServer({
    dir: process.cwd()
    , app: app
    , server: server
    , webpath: "_admin"
    , restartableObj: parRestartableObj
  }, function(){*/
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
    if (argv.sourceversion){
      console.log("running source version");
      app.use("/", express["static"](__dirname + "/../src/"));
    }else{
      app.use("/", express["static"](__dirname + "/../release/"));
    };
  //});
  
  
  promiseland.set("profile", "server");


  var ClientProfile = function() {
    this.name = function(){
      return "client";
    };
    this.connections = {};
    this.find = function(parId){
      return this.connections[parId];
    };
    var nextid = 1;
    this.addConnection = function(connection){
      var id = nextid;
      nextid++;
      this.connections[id] = connection;
      this.emit("connection", connection);
    };
  };
  ClientProfile.prototype = new promiseland.ProfileBaseClass();


  var clientProfile = new ClientProfile();
  promiseland.addProfile(clientProfile);


  var mainio = socketIo.listen(server);
  mainio.on('connection', function (socket) {
    /*if (err){
    console.log("-------------------------------------------------- connection error");
    console.log(err);
    console.log("-------------------------------------------------- connection error");
    return;
  };*/
    console.log("got connected");

    var connection = new promiseland.ConnectionBaseClass();
    connection.socket = socket;
    socket.on("pl", function(data){
      connection.emit("data", data);
    });
    connection.send = function(data){
      socket.emit("pl", data);
    };

    clientProfile.addConnection(connection);
    socket.on("disconnect", function(){
      connection.emit("disconnect");
    });
    return;

  });
  console.log("--------------------------------------");
  require("../src/app/mouseTrack");
  console.log("done");
  
  
}, function(parRestartableObj){

});


