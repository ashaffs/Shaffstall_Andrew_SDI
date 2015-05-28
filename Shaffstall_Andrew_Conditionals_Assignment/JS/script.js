/**
 * Created by andrew shaffstall1 on 5/21/15.
 */

//How much will it cost to go to Disneyland

//These are the variables that i am going to use

var disneyTicket = 100;
var californiaAdventure = 100;
var parkHopper = 150;
var hotel = 150;
var food = 75;
var souveniers = 100;

var disneyland = prompt("Are you going to Disneyland, Yes or No?");
var caliAdventure = prompt("Are you going to California Adventure?");

if((disneyland = "Yes") && (caliAdventure = "Yes"));{
    var bothParks = prompt("How many days are you going?");
    disneyTicket = 0;
    californiaAdventure = 0;
}else if((disneyland = "Yes")&& (caliAdventure = "No"));{
    var disney = prompt("How many days are you going?");
    californiaAdventure = 0;
    parkHopper = 0;
}else ((disneyland = "No") && (caliAdventure = "Yes"));{
    var california = prompt("How many days are you going?");
    disneyTicket = 0;
    parkHopper = 0;
}

bothParks += parkHopper;
disneyland += disneyTicket;
california += californiaAdventure;

(bothParks > parkHopper) ? console.log("The park ticket will cost you " + bothParks);
