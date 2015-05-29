//Andrew Shaffstall 5-28-15 Functions Assignment

var vertical = verticalPpi(1440, 10); //this shows the vertical length and resolution and includes the arguments

function verticalPpi(heightPixels, heightInches){//this is the start of the function that includes the parameters
    var heightPpi = heightPixels / heightInches;//this is the equation that does the calculating
    console.log("Your vertical ppi is " + heightPpi);//this displays the answer on the console
    return heightPpi; //this spits the answer back outside of the function
}
//this function calculates the vertical ppi of the screen

var horizontal = horizontalPpi(2560, 15);//this shows the horizontal length and resolution and inclused the arguements

function horizontalPpi(widthPixels, widthInches){//this is the start of the function that includes the parameters
    var widthPpi = widthPixels / widthInches;//this is the equation that does the calculating
    console.log("YOur horizontal ppi is " + widthPpi);//this displays the answer on the console
    return widthPpi; //this spits the answer back outside of the function
}

var averagePpi = function(verticalPpi, horizontalPpi){//this is the anonymous function that calculates the average
    var average = (vertical + horizontal)/2; //this is the equation that calculates the average ppi
    return average; //this spits the answer back outside of the function
}

var ppi = averagePpi(vertical, horizontal); //this sets "ppi" as the averagePpi

console.log("the average ppi is " + ppi); //this displays the answer on the console.