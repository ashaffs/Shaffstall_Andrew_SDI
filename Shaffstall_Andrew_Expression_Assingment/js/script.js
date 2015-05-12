//Andrew Shaffstall 5/11/15 Expression Assingment


var accPrice = [25, 35, 50, 100, 150]; //these are the cost of each accessory

var total = accPrice[0] + accPrice[1] + accPrice[2] + accPrice[3] + accPrice[4]; //this is the total of all the accessories

//console.log(total); //this was a test to see if the link will work with the program

var phonePrice  =  Number(prompt("Please enter the cost of the phone that you chose")); //this is the full price of the phone

var eip = (total + phonePrice)/24; //this is the total of the equipment installment plan divided up over 24 months

//console.log(eip);

var monthly = Number(prompt("Please enter the chosen monthly service cost:")); //this is the base monthly cost for cell service

var data = Number(prompt("Please enter the chosen monthly data cost:")); //these are the data options

monthly += (data + eip); //this adds the base monthly cost, the chosen data cost, and the EIP

//console.log(monthly); //this shows the above equation in the console

alert("Your total monthly cost with us will be $" + monthly); //this will tell the user their monthly total



//i switched what numbers were in place as well as what spot in the arrays i used to make sure that the code actually worked with changes made.


