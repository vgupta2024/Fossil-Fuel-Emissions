const fs = require('fs');
const ejs = require('ejs');
const plotly = require('plotly');

let country_info = JSON.parse(fs.readFileSync('../data/FossilFuelData.json', 'utf8'));
let index_template = fs.readFileSync('views/index.ejs', 'utf8');
let country_template = fs.readFileSync('views/country.ejs', 'utf8');
let about_template = fs.readFileSync('views/about.ejs', 'utf8');

/*
  1) Generate a web page for each character
  2) Keep track of the link for index.html
*/
let lnk = [0,0,0,0,0,0,0,0,0,0];
let runThru = 0;
let cntry = country_info;
for (country in country_info){
  country_info[country].link = getBetterFileName(country);
   lnk[runThru] = country_info[country].link;
  runThru += 1;
}
let cntries = 0;
for (country in country_info){
 country_html = ejs.render(country_template, {
  filename: __dirname + '/views/country.ejs',
    stats: country_info[country],
    name: country,
    data: cntry
  });

fs.writeFileSync('../public/'+lnk[cntries]+'.html', country_html, 'utf8');
cntries +=1;
}

/*
  1) Generate an index page of all characters
*/
let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs',
  data: country_info
});


fs.writeFileSync('../public/index.html', index_html, 'utf8');

let about_html = ejs.render(about_template, {
  filename: __dirname + '/views/about.ejs',
  data: country_info
});

fs.writeFileSync('../public/about.html', about_html, 'utf8');

function getBetterFileName(countryName){
  let betterFileName = countryName.split(" ").join("_");
  betterFileName = betterFileName.split(".").join("");
  betterFileName = betterFileName.split("(").join("");
  betterFileName = betterFileName.split(")").join("");
  return betterFileName;
}
