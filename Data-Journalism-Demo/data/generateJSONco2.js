const fs = require("fs");

let nations = {};

let nations_csv = fs.readFileSync("fossil-fuel-co2-emissions-by-nation.csv", "utf8");

let eachNation = nations_csv.split("\n");
let topTen = ["0,0,0" , "0,0,0" , "0,0,0" , "0,0,0" , "0,0,0" , "0,0,0" , "0,0,0" , "0,0,0" , "0,0,0" , "0,0,0"];
eachNation.forEach(function(nat) {
  let natArr0 = topTen[0].split(",");
  let smallest = natArr0[2];
  let index = 0;
  for (let i = 0; i < topTen.length; i++) {
    let natArray = nat.split(",");
    if(Number(natArray[2])>smallest && index >=0){
      topTen[i] = nat;
      console.log(nat);
    }
    index = 0;
    let natArr = topTen[i].split(",");
    let comparison = Number(natArr[2]);
    if(comparison<smallest){
      smallest = comparison;
      index = i;
      console.log(index);
    }
  }
});
  console.log(topTen);
/*
for(let i = 0; i < topTen.length; i++){
  let natArr = topTen[i].split(",");
  let nationName = natArr[1];
  if (nationName != "Country" && natArr.length == 10) {
    let objectNation = {};
    objectNation["Year"] = natArr[0];
    objectNation["TotalFossilFuelEmission"] = natArr[2];
    objectNation["SolidFuelEmission"] = natArr[3];
    objectNation["LiquidFuelEmission"] = natArr[4];
    objectNation["GasFuelEmission"] = natArr[5];
    nations[nationName] = objectNation;
    console.log(nations[nationName][0]);
  }
}
*/


fs.writeFileSync("FossilFuelData.json", JSON.stringify(nations), "utf8");
