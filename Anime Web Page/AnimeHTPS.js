var party = 5; // a global function that can be used by the entire JavaScript file
var change = 50;
function Anime() // the name of the function 
{
    location.replace("https://gogoanime.vet/"); // the location in which the user will be taken to after the button is clicked on
}
function Manga()
{
    location.replace("https://readmangabat.com/read-go384707");
}
function Euro() 
{
    location.replace("https://www.ecstuning.com/Volkswagen-Golf_VI--2.0T/"); // The website i have used to buy go fast parts for my GTI
}
function sound(src){// add play function
    this.sound = document.createElement("audio") ;//create audio
    this.sound.src = src;//define src
    this.play = function() {//music function
        this.sound.play();//play sound
    }
}
function Start() // Will make the picture start moving 
{
    document.getElementById("Rebirth").disabled = true; // the start button is disabled
    document.getElementById("End").disabled = false; // the end button is enabled and will let the picture stop moving 
    var image = document.getElementById("Hime");

    party = setInterval(function()
    {
        factor = 8; // this determines the speed in which the picture moves
        if(change >1080) 
        {
            factor = -1080
        }
        image.style.left = change + "px";
        change +=factor;
    },50);
}
function Stop() // wil make the picture stop
{
    document.getElementById("End").disabled = true; // the start button is enabled and will let the picture start moving 
    document.getElementById("Rebirth").disabled = false; // the end button is disabled

    clearInterval(party); 
}