module.exports = function () {
  return {
    "files": [
      //"style/calculator.css",
      //{"pattern": "lib/jquery.js", "instrument": false},
      "src/*.js",
      //"test/helper/template.js"
    ],
    "tests": [
      "**/*test.js"
    ],
    "testFramework": "jasmine",
    "env": {
      "kind": "chrome"
    }
  };
};
