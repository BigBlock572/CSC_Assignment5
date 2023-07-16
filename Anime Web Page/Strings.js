prompt("                            ****Classified-Verifcation-Needed****"); //Prompt for the user making this feel more classified 
function check()
{
    var suspectnumber = document.getElementById("number").value;
    var suspectname = document.getElementById("name").value;

    if (suspectname > 0 && suspectname <=20)
    {
        alert ("Try Again");
    }
    else
    {
        alert ("Proceed with cation");
    }
    if (suspectname == "Flavio Contreras" || suspectname == "John Whick" || suspectname == "Tony Stark") //checking if the initial conditions are met
    if (suspectnumber == "60652" || suspectnumber == "60608" || suspectnumber == "60143") // checking additional conditions
    {
        alert ("Suspect Located"); // a message that is diplayed to the user
        alert ("Target Approved");
        alert ("Target Eliminated");
        // side note this is scary when using my own name
    }
    else if (suspectnumber == "60191")
    {
        alert ("Target Denied");
        location.replace("https://readmangabat.com/read-go384707"); // Link will take the user to the website displeyed;
    }
    else
    {
        alert ("Suspect Identified");
        alert ("Target Captured");
        //location.replace("");
    }
}