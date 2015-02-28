({
    baseUrl: ".",
    paths: {
      "promiseland": "../node_modules/promiseland/promiseland",
      "file1": "../someother/file1",
      "mod1": "../someother/mod1/mod1"
    },
    "packages": [{
      "name":"promiseland",
      "main":"promiseland",
      "location": "../node_modules/promiseland"
    }, {
      "name":"mod1",
      "main":"mod1",
      "location": "../someother/mod1"
    }],
    name: "app/wrapper",
    include: [
      //"dojo/dom-construct",
      "app/backgroundText",
      "app/callbackHellText",
      "app/promiseLandText",
      "app/index",
      "sol/wgt/CodeMirrorSimple",
      "codemirror4/mode/javascript/javascript",
      "codemirror4/mode/promiseland/promiseland",
      "dijit/MenuBar",
      "dijit/MenuBarItem"
    ],
    optimizeAllPluginResources: false,
    exclude: [
      "dojo/selector/_loader", 
      "dojo/query"
    ],
    insertRequire: ["app/wrapper"],
    out: "app/wrapper-built.js",
    optimize: "none"
})