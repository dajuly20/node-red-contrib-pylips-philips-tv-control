 const fs = require("fs");
 const path = require("path");

 module.exports = function(RED) {
     const subflowFile = path.join(__dirname,"subflow.json");
     const subflowContents = fs.readFileSync(subflowFile);
     const subflowJSON = JSON.parse(subflowContents);
     const pylipsDir = path.join(__dirname, "pylips", "pylips.py")
     subflowJSON.env.push(    {
        "name": "path",
        "type": "str",
        "value": pylipsDir
    });
     RED.nodes.registerSubflow(subflowJSON);
 }
