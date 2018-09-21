$(document).ready(function () {    

    var playerScore;
    var computerTarget;
    var wins = 0;
    var losses = 0;

    function computerSetup () {

        // Resets amd displays the player score to 0 
        playerScore = 0;
        $("#playerScore").text(0)
       
        // Generates the random number 19 - 120 player must reach
        computerTarget = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
            $("#numberTarget").text(computerTarget);

        // For loop generates random number 1 - 12 for each image "crystal"
        for (let i = 1; i < 6; i++) {
            var crystalSelection = Math.floor(Math.random() * (12) + 1);
            crystal = $("#crystal-" + i);
            crystal.addClass("crystals");
            crystal.attr("data-value",crystalSelection);
            $("#crystal-" + i).append(crystal)

        }
        // once the for loop is completed the game sequence is called
        gamePlay();
    }

   
    function gamePlay() {

        // On click function grabs the value of the crystal clicked and adds it to the player score
        $(".crystals").on("click", function () {
            
            var crystalValue = ($(this).attr("data-value"));
            crystalValue = parseInt(crystalValue);
            playerScore += crystalValue
            $("#playerScore").text(playerScore)
    
            // if statement is entered reaches the target number, turns off the click on feature adds and displays win tally alongside message
            // There is a delay of 1 second before computerSetup is called to reset the game so player can see the final score reached without adding more points to play score
            if (playerScore === computerTarget) {
                $(".crystals").off("click")
                wins++;
                $("#wins").html("Wins: " + wins);
                $("#resultMessage").html("You won!!!");
                setTimeout(computerSetup, 1000);
                

            }

            // Else if statement is entered when player score is higher than target score
            // Adds 1 to loss variable, displays number and message
            // Similar to above if statement, computerSetup delays the rest of the game so player can see their score
            else if (playerScore > computerTarget) {
                $(".crystals").off("click")
                losses++;
                $("#losses").html("Losses: " + losses);
                $("#resultMessage").html("You lost!!!");
                setTimeout(computerSetup, 1000);
            
            // Else statement allows player to keep selecting crystal to add to player score since prior conditons weren't met
            }
            else {
                return;
            }
            
        }) 
    } 

    computerSetup ();
    

    
    
    
    

    

})