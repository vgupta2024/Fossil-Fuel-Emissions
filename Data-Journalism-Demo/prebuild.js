const fs = require('fs');

var oldPathVarunMicro = 'src/Varun_Design_Micro.jpg';
var newPathVarunMicro = 'public/Varun_Design_Micro.jpg'

if (fs.existsSync(oldPathVarunMicro)) {
  fs.rename(oldPathVarunMicro, newPathVarunMicro, function(err) {
    if (err) throw err
  });
}

var oldPathVarunMacro = 'src/Varun_Design_Macro.jpg';
var newPathVarunMacro = 'public/Varun_Design_Macro.jpg'

if (fs.existsSync(oldPathVarunMacro)) {
  fs.rename(oldPathVarunMacro, newPathVarunMacro, function(err) {
    if (err) throw err
  });
}

var oldPathJames = 'src/James_Design.jpg';
var newPathJames = 'public/James_Design.jpg'

if (fs.existsSync(oldPathJames)) {
  fs.rename(oldPathJames, newPathJames, function(err) {
    if (err) throw err
  });
}

if (fs.existsSync("public/index.html")) {
  fs.unlink("public/index.html", function(err) {
    if (err) throw err
  });
}

if (fs.existsSync("public/about.html")) {
  fs.unlink("public/about.html", function(err) {
    if (err) throw err
  });
}

let country_info = JSON.parse(fs.readFileSync('data/FossilFuelData.json', 'utf8'));
for (country in country_info) {
  if (fs.existsSync("public/" + getBetterFileName(country) + ".html")) {
    fs.unlink("public/" + getBetterFileName(country) + ".html", function(err) {
      if (err) throw err
    });
  }
}

function getBetterFileName(countryName) {
  let betterFileName = countryName.split(" ").join("_");
  betterFileName = betterFileName.split(".").join("");
  betterFileName = betterFileName.split("(").join("");
  betterFileName = betterFileName.split(")").join("");
  return betterFileName;
}
