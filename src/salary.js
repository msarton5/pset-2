const readlineSync = require("readline-sync");
let Salary = readlineSync.question("\nAnnual salary: ");
const BiMonthly_Salary = (Salary/24)
const Pre_Tax = (BiMonthly_Salary*0.93)
const Tax = (Pre_Tax*0.2782)
let Take_Home = (Pre_Tax - Tax)
Take_Home = Take_Home.toLocaleString("en" , { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\nYour take-home pay each check will be $" + Take_Home + " ." );
