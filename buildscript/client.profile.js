var profile = (function(){
    return {
        basePath: "../src",
        releaseDir: "../release",
        //releaseName: "client",
        action: "release",
        layerOptimize: "closure",
        optimize: "closure",
        cssOptimize: "comments",
        stripConsole: "warn",
        locale: 'en-us',
        
        packages:[{
            name: "dojo",
            location: "dojo"
        },{
            name: "dijit",
            location: "dijit" 
        },{
            name: "dojox",
            location: "dojox" 
        },{
            name: "app",
            location: "app"
        },{
            name: "sol",
            location: "sol"
        },{
          name: "codemirror4",
          location: "codemirror4"
        }, {
          name: "style"
        , location: "style"
        }, {
          name: "image"
        , location: "image"
        }, {
          name: "promiseland"
        , location: "promiseland"
        }, {
          name: "vast-shadow"
        , location: "vast-shadow"
        }],
      
      //plugins: {
      //  "main/serverOnly": "build/plugins/serverOnly"
      //  , "main/clientOnly": "build/plugins/clientOnly"
        //, "xstyle/css": "xstyle/build/amd-css"
      //},
      
        staticHasFeatures: {
          "dom": 1
          , "host-browser": 1
          , "dojo-firebug": 0
        },
        defaultConfig: {
          hasCache:{
            "dom": 1
            , "host-browser": 1
            , "dojo-firebug": 0
          },
          async: 1,
          deps: [ "app/app" ],
          locale: 'en-us'
        },
        layers: {
            "dojo/dojo": {
              include: [ 
                  "app/app"
                //, "app/mouseTrack"
                , "dojo/selector/lite"
                , "promiseland/main"
                , "promiseland/promiseland"
                //, "promiseland/parser"
                //, "promiseland/_parser" // causes weird error
                , "promiseland/md5"
                , "promiseland/main"
                
                , "dijit/_WidgetBase"
                , "dojo/query"
                , "codemirror4/lib/codemirror"
                , "codemirror4/mode/promiseland/promiseland"
                , "app/wgt/ReadMore"
                
                , "dojo/_base/declare"
                , "dojo/dom-class"
                , "dojo/dom-construct"
                , "dijit/form/Button"
                
                // ?????
                , "dojo/io-query"
                , "dojo/json"
                , "dojo/selector/acme"
                , "dojo/request/xhr"
              ]
              , boot: true
              , customBase: true
            }
        }
    };
})();
