const readlineSync = require("readline-sync");
let Width = readlineSync.question("Width: ");
const Width_mm = Width*2.54
let Length = readlineSync.question("Length: ");
const Length_mm = Length*2.54
let Perimeter = 2*Width_mm + 2*Length_mm
Perimeter = Perimeter.toLocaleString("en" , { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("A(n) " + Width + " by " + Length + " inch sheet of paper has an perimeter of " + Perimeter + " centimeter(s).");
