const readlineSync = require("readline-sync");
let Homework_1 = readlineSync.question("\nEnter three homework grades:\n");
const H_1_Weight = Homework_1*0.15
let Homework_2 = readlineSync.question("");
const H_2_Weight = Homework_2*0.15
let Homework_3 = readlineSync.question("");
const H_3_Weight = Homework_3*0.15
let Quiz_1 = readlineSync.question("\nEnter three quiz grades:\n");
const Q_1_Weight = Quiz_1*0.35
let Quiz_2 = readlineSync.question("");
const Q_2_Weight = Quiz_2*0.35
let Quiz_3 = readlineSync.question("");
const Q_3_Weight = Quiz_3*0.35
let Test_1 = readlineSync.question("\nEnter three test grades:\n");
const T_1_Weight = Test_1*0.50
let Test_2 = readlineSync.question("");
const T_2_Weight = Test_2*0.50
let Test_3 = readlineSync.question("");
const T_3_Weight = Test_3*0.50
const HomeworkAVG = (H_1_Weight + H_2_Weight + H_3_Weight)/3
const QuizAVG = (Q_1_Weight + Q_2_Weight + Q_3_Weight)/3
const TestAVG = (T_1_Weight + T_2_Weight + T_3_Weight)/3
let MP_Grade = (HomeworkAVG + QuizAVG + TestAVG)
MP_Grade = MP_Grade.toLocaleString("en" , { minimumFractionDigits: 2, maximumFractionDigits: 2 });
console.log("\nYour marking period grade is " + MP_Grade + "%" );
