//Andrew Shaffstall 5-28-15 Functions Assignment

var vertilcle = verticalPpi(1440, 10); //this shows the virtical length and resolution and includes the arguments

function verticalPpi(heightPixels, heightInches){//this is the start of the function that includes the parameters
    var heightPpi = heightPixels / heightInches;//this is the equation that does the calculating
    console.log("Your vertical ppi is " + heightPpi);//this displays the answer on the console
    return heightPpi; //this spits the answer back outside of the function
}
//this function calculates the vertical ppi of the screen

