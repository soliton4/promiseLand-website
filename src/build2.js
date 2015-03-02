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
  //name: "app/wrapper",
  /*include: [
      "dojo/dom-construct",
      "app/backgroundText",
      "app/callbackHellText",
      "app/promiseLandText",
      "app/index",
      "sol/wgt/CodeMirrorSimple",
      "codemirror4/mode/javascript/javascript",
      "codemirror4/mode/promiseland/promiseland",
      "dijit/MenuBar",
      "dijit/MenuBarItem"
    ],*/
  modules: [
        //Just specifying a module name means that module will be converted into
        //a built file that contains all of its dependencies. If that module or any
        //of its dependencies includes i18n bundles, they may not be included in the
        //built file unless the locale: section is set above.
    {
      name: "app/wrapper",

      include: [
        "dojo/dom-construct",
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
      excludeShallow: ["dojo/selector/_loader", "dojo/query", "dojo/selector/_loader!default"],
      exclude: ["dojo/selector/_loader", "dojo/query", "dojo/selector/_loader!default"],
      optimizeAllPluginResources: true
    }
  ],
  
  fileExclusionRegExp: /^_loader/,
  
  excludeShallow: ["dojo/selector/_loader", "dojo/query", "dojo/selector/_loader!default"],

  optimizeAllPluginResources: true,
  exclude: [
    "dojo/selector/_loader", 
    "dojo/query"
  ],
  //insertRequire: ["app/wrapper"],
  //out: "app/wrapper-built.js",
  dir: "../release",
  optimize: "none"
})