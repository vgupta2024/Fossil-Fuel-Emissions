const fs = require('fs');
const ejs = require('ejs');

let country_info = JSON.parse(fs.readFileSync('../data/FossilFuelData.json', 'utf8'));
let index_template = fs.readFileSync('views/index.ejs', 'utf8');
let country_template = fs.readFileSync('views/country.ejs', 'utf8');

/*
  1) Generate a web page for each character
  2) Keep track of the link for index.html
*/
for (country in country_info){
  let country_html = ejs.render(country_template, {
    filename: __dirname + '/views/country.ejs',
    stats: country_info[country],
    name: country
  });
  country_info[country].link = getBetterFileName(country);
  fs.writeFileSync('../public/'+country_info[country].link+'.html', country_html, 'utf8');

}

/*
  1) Generate an index page of all characters
*/
let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs',
  data: country_info
});

fs.writeFileSync('../public/index.html', index_html, 'utf8');

function getBetterFileName(countryName){
  let betterFileName = countryName.split(" ").join("_");
  betterFileName = betterFileName.split(".").join("");
  betterFileName = betterFileName.split("(").join("");
  betterFileName = betterFileName.split(")").join("");
  return betterFileName;
}
