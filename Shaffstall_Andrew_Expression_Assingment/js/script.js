//Andrew Shaffstall 5/11/15 Expression Assingment


var accPrice = [25, 35, 50, 100, 150]; //these are the cost of each accessory

var total = accPrice[0] + accPrice[1] + accPrice[2] + accPrice[3] + accPrice[4]; //this is the total of all the accessories

//console.log(total); //this was a test to see if the link will work with the program

var phonePrice  =  649.99; //this is the full price of the phone

var equipmentInstallment = (total + phonePrice)/24; //this is the total of the equipment installment plan divided up over 24 months

//console.log(equipmentInstallment); //This will test and make sure that the program works

var monthly = 50; //this is the base monthly cost for cell service

var data = [0, 10, 20, 30]; //these are the data options

monthly += (data[1] + equipmentInstallment); //this adds the base monthly cost, the chosen data cost, and the EIP

console.log(monthly); //this shows the above equation in the console

alert("Your total monthly cost with us will be $" + monthly); //this will tell the user their monthly total






