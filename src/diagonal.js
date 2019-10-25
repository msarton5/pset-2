const readlineSync = require("readline-sync");
let Width = readlineSync.question("Width: ");
let Length = readlineSync.question("Length: ");
let Diagon_ish = (Width*Width) + (Length*Length)
let Diagonal = Math.sqrt(Diagon_ish)
Diagonal = Diagonal.toLocaleString("en" , { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("A(n) " + Width + " by " + Length + " inch sheet of paper has a diagonal of " + Diagonal + " square inch(es).");
