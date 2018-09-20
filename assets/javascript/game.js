$(document).ready(function () {    

    var playerScore;
    var computerTarget;
    var wins = 0;
    var losses = 0;

    function computerSetup () {

        // debugger;
        playerScore = 0;
        $("#playerScore").text(0)
       

        computerTarget = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
            $("#numberTarget").text(computerTarget);


        for (let i = 1; i < 6; i++) {
            var crystalSelection = Math.floor(Math.random() * (12) + 1);
            crystal = $("#crystal-" + i);
            crystal.addClass("crystals");
            crystal.attr("data-value",crystalSelection);
            $("#crystal-" + i).append(crystal)
        }

    }

    computerSetup ();

    $(".crystals").on("click", function () {
        var crystalValue = ($(this).attr("data-value"));
        crystalValue = parseInt(crystalValue);

        playerScore += crystalValue

        $("#playerScore").text(playerScore)
   

    // debugger;
        if (playerScore === computerTarget) {
            debugger;
            wins++;
            $("#wins").html("Wins: " + wins);
            
            $("#resultMessage").html("You won!!!");

            computerSetup ();
            

        }
        else if (playerScore > computerTarget) {
            debugger;
            losses++;
            console.log(losses);
            $("#losses").html("Losses: " + losses);
            $("#resultMessage").html("You lost!!!");

            computerSetup ();

            
        }
        else {
            return;
        }
        
    })


    
    
    
    

    

})