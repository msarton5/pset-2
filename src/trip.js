const readlineSync = require("readline-sync");
const Students = readlineSync.question("\nStudents: ");
const Teachers = readlineSync.question("Teachers: ")
const Bus_Capacity = readlineSync.question("Bus capacity: ")
const Total_Passengers = parseInt(Students) + parseInt(Teachers)
let Bus_Number = (Total_Passengers) / (Bus_Capacity)
let Passengers_LastBus = Math.ceil(Bus_Number)
var Remainder = (Total_Passengers) % Bus_Capacity;
console.log(Passengers_LastBus + " bus(es) is (are) needed, with " + Remainder + " passenger(s) on the last bus.");
