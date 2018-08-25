module.exports = function () {
  return {
    "files": [
      "style/calculator.css",
      {"pattern": "lib/jquery.js", "instrument": false},
      "src/*.js",
      "test/helper/template.js"
    ],
    "tests": [
      "test/*QUnitSpec.js"
    ],
    "testFramework": "qunit",
    "env": {
      "kind": "chrome"
    }
  };
};
