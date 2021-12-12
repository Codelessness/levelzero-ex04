// ex04: do it all together(01-03)
var readlineSync = require('readline-sync');//ex02

var userName = readlineSync.question("what is your name? ");
console.log(userName);// ex01

var welcomeMessage = "Welcome " + userName;//ex03
console.log(welcomeMessage);

//Programming is all about (input >> processing >> output)