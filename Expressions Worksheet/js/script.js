//Andrew Shaffstall Expressions Worksheet

//Problem #1

var humanAge = 5; //How old sparky is in human years
var dogYears = 7; //This is how many dog years per 1 human year
var sparkyAge = humanAge * dogYears; //this calculates how old sparky is in dog years
console.log("Sparky is " + humanAge + " human years old which is " + sparkyAge + " in dog years."); //this displays sparkys age to the user

//Problem #2
var slices = 8; //number of slices per pizza
var people = 30; //number of people at the party
var pizzas = 10; //number of pizzas ordered

var slicesPerPerson = pizzas * slices / people; //this calculates how many slices of pizza each person at the party got

console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party"); //This displays how many slices each person at the party got

//Problem #3

var remainder = pizzas * slices % people; //this calculates the remainder if each person got a whole slice of pizza
console.log("Sparky got " + remainder + " slices of pizza"); //this displays how many slices of pizza sparky will get after the party

//Problem 4

var grocery = [45, 76, 90, 103, 68]; //this is the array showing the amounts spend each week on groceries

var total = grocery[0] + grocery[1] + grocery[2] + grocery[3] + grocery[4]; //this calculates the total spent on groceries over 5 weeks
var average = total/5; //this calculates the weekly average spent on groceries over the past 5 weeks

console.log("You have spend a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average + " per week"); //this displays the total and average to the user