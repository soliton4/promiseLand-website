var profile = (function(){
    return {
        basePath: "../src",
        releaseDir: "../release",
        releaseName: "client",
        action: "release",
        layerOptimize: false,
        optimize: false,
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
          name: "app"
        , location: "app"
        }, {
          name: "promiseland"
        , location: "../node_modules/promiseland"
        //, location: "promiseland"
        }, {
          name: "frameworkClient"
        , location: "../node_modules/promiseland-webframework/frameworkClient"
        }],
      
        /*staticHasFeatures: {
          "dom": 1
          , "host-browser": 1
          , "dojo-firebug": 0
        },*/
        defaultConfig: {
          /*hasCache:{
            "dom": 1
            , "host-browser": 1
            , "dojo-firebug": 0
            , "dojo-has-api": 0
          },*/
          async: 1,
          deps: [ "frameworkClient/client" ],
          locale: 'en-us'
        },
        layers: {
            "dojo/dojo": {
              include: [ 
                "dojo/dojo",
                "app/wrapper",
                "app/index",
                "app/wrapper",
                "dojo/dom-construct",
                "frameworkClient/client",
                "frameworkClient/Eventemitter",
                "app/backgroundText",
                "app/callbackHellText",
                "app/promiseLandText",
                "app/index",
                "sol/wgt/CodeMirrorSimple",
                "codemirror4/mode/javascript/javascript",
                "codemirror4/mode/promiseland/promiseland",
                "dijit/MenuBar",
                "dijit/MenuBarItem",
                "dojo/json",
                "dojo/io-query",
                "dojo/selector/acme",
                "dojo/request/xhr"
              ]
              , boot: true
              , customBase: true
            }
        }
    };
})();
