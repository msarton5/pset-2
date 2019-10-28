const readlineSync = require("readline-sync");
const Length = 48
const Width = 24
const Diameter = 6
let Hole = ((0.25*3.14159265359)*6*6)
let Surface_Area = (Length*Width - Hole)
Surface_Area = Surface_Area.toLocaleString("en" , { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\nThe surface area of a standard Cornhole board is " + Surface_Area + " square inch(es)." );
