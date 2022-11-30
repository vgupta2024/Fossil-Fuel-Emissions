const fs = require('fs');

var oldPathVarunMicro = 'src/Varun_Design_Micro.jpg';
var newPathVarunMicro = 'public/Varun_Design_Micro.jpg';

var topLevelPathVMic = '../Varun_Design_Micro.jpg';


if (fs.existsSync(oldPathVarunMicro)) {
fs.copyFile(oldPathVarunMicro, newPathVarunMicro, function (err) {
  if (err) throw err
});
fs.copyFile(oldPathVarunMicro, topLevelPathVMic, function (err) {
  if (err) throw err
});
}



var oldPathVarunMacro = 'src/Varun_Design_Macro.jpg';
var newPathVarunMacro = 'public/Varun_Design_Macro.jpg';

var topLevelPathVMac = '../Varun_Design_Macro.jpg';


if (fs.existsSync(oldPathVarunMacro)) {
fs.copyFile(oldPathVarunMacro, newPathVarunMacro, function (err) {
  if (err) throw err
});
fs.copyFile(oldPathVarunMacro, topLevelPathVMac, function (err) {
  if (err) throw err
});
}

var oldPathJames = 'src/James_Design.jpg';
var newPathJames = 'public/James_Design.jpg';
var topLevelPathJ = '../Varun_Design_Macro.jpg';



@ -31,26 +40,29 @@
fs.copyFile(oldPathJames, newPathJames, function (err) {
  if (err) throw err
});
fs.copyFile(oldPathJames, newPathJames, function (err) {
  if (err) throw err
});
}

if (fs.existsSync("public/index.html")) {
fs.unlink("public/index.html", function (err) {
if (err) throw err
});
}

if (fs.existsSync("public/about.html")) {
fs.unlink("public/about.html", function (err) {
if (err) throw err
});
}

var oldPipeline = 'src/pipeline.jpg';
var newPipeline = 'public/pipeline.jpg';

if (fs.existsSync(oldPipeline)) {
fs.copyFile(oldPipeline, newPipeline, function (err) {
  if (err) throw err
});
}
