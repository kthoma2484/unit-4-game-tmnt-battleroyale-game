$(document).ready(function() {

    let numWins = 0;
    let numLosses = 0;
    let character = {
            1: {name: "Ralph", healthPt: "200", attackPt: "15", ctrAttPt: "30", virtue: "good"
            },
            2: {name: "Leo", healthPt: "190", attackPt: "13", ctrAttPt: "27", virtue: "good"
            },
            3: {name: "Mikey", healthPt: "180", attackPt: "11", ctrAttPt: "24", virtue: "good"
            },
            4: {name: "Don", healthPt: "170", attackPt: "9", ctrAttPt: "21", virtue: "good"
            },
            5: {name: "Splinter", healthPt: "160", attackPt: "7", ctrAttPt: "18", virtue: "good"
            },
            6: {name: "Casey", healthPt: "150", attackPt: "5", ctrAttPt: "15", virtue: "good"
            },
            7: {name: "Shredder", healthPt: "210", attackPt: "14", ctrAttPt: "35", virtue: "bad"
            },
            8: {name: "Krang", healthPt: "195", attackPt: "10", ctrAttPt: "32", virtue: "bad"
            },
            9: {name: "Bebop", healthPt: "185", attackPt: "8", ctrAttPt: "29", virtue: "bad"
            },
            10: {name: "Rocksteady", healthPt: "175", attackPt: "6", ctrAttPt: "26", virtue: "bad"
            },
            11: {name: "Slash", healthPt: "165", attackPt: "4", ctrAttPt: "23", virtue: "bad"
            },
            12: {name: "Baxtor Fly", healthPt: "155", attackPt: "3", ctrAttPt: "21", virtue: "bad"
            }  
    }
    let playerSelection = {};
    let attackerArray = [];

    // start new game
    let newGame = function() {   
        // reset characters health and attack to 150
        character.name.healthPt = "";
        character.name.attackPt = "";
        
        // return charactors to their team positions


        // reset characters attack to starting attack
        
    }

    // game win function if random fighters HP at 0 or less
    let gameTally = function()  {
        if (ranfighter1 <= 0 && ranfighter2 <= 0) {
            numWins++;
            console.log('you win');
            $('#numWins').html(numWins);
            $('#game-end').html('You Win!');
            newGame();
        } else if (playerPick <= 0) {
            numLosses++;
            console.log('you loss');
            $('#numLosses').html(numLosses);
            $('#game-end').html('You Loss!');
            newGame();
        }
    } 

    // playerPick hidden from current section
    let playerPick = function (target) {
        // player pick relocated from original location to battlefield
        $(target).remove();  
        $(target).appendTo(".player-battle");
        playerSelection = character[$(target).attr("data-character")];
        console.log(playerSelection);
        $(".p-stats").html('HP = ' + playerSelection.healthPt + ' / ' + 'Attack Pts = ' + playerSelection.attackPt);
        // computer picks 2 random attackers
        if (playerSelection.virtue === "good") {
            ranAttacker1 = Math.floor((Math.random() *(12 - 7) + 7));
            attSelection1 = character[ranAttacker1];
            $("[data-character='" + ranAttacker1 +"']").appendTo(".computer-battle");
            $(".c1-stats").html(attSelection1.name + ' / HP = ' + attSelection1.healthPt + ' / Attack Pts = ' + attSelection1.attackPt);
            attackerArray.push(ranAttacker1);
            while (ranAttacker2 = Math.floor((Math.random() *(12 - 7) + 7))) {
                if (!attackerArray.indexOf(ranAttacker2)) {
                    return;
                } else {
                    attSelection2 = character[ranAttacker2];
                    $("[data-character='" + ranAttacker2 +"']").appendTo(".computer-battle");
                    $(".c2-stats").html(attSelection2.name + ' / HP = ' + attSelection2.healthPt + ' / Attack Pts = ' + attSelection2.attackPt);
                    if (attackerArray.indexOf(ranAttacker1) == -1 && attackerArray.indexOf(ranAttacker2) == -1);
                    return;
                }
            }
            
        } else if (playerSelection.virtue === "bad") {
            ranAttacker1 = Math.floor((Math.random() *(6 - 1) + 1));
            attSelection1 = character[ranAttacker1];
            $("[data-character='" + ranAttacker1 +"']").appendTo(".computer-battle");
            $(".c1-stats").html(attSelection1.name + ' / HP = ' + attSelection1.healthPt + ' / Attack Pts = ' + attSelection1.attackPt);
            } while (ranAttacker2 = Math.floor((Math.random() *(6 - 1) + 1))) {
                if (!attackerArray.indexOf(ranAttacker2)) {
                    return;
                } else {
                    attSelection2 = character[ranAttacker2];
                    $("[data-character='" + ranAttacker2 +"']").appendTo(".computer-battle");
                    $(".c2-stats").html(attSelection2.name + ' / HP = ' + attSelection2.healthPt + ' / Attack Pts = ' + attSelection2.attackPt);
                    if (attackerArray.indexOf(ranAttacker1) == -1 && attackerArray.indexOf(ranAttacker2) == -1);
                    return;
                }
        }
        
    }
    
    // button click will start game
    $('#newgame').click(newGame);

    // player selects character as playerPick
    $('.fighter-pic').click(function() {
        playerPick(this);
        computerPick();
    });   


    
        // playerPick visible in battle section

        // playerPick stats appear below character

        // computer generates to random opposing characters

        // when player presses attack button

            // for each playerPick attack... 
            
            // loop attack on random fighter

            // random figther 1 counter attack decreases playerPick HP

            // add playerPick base attack to the attack value

                // if random fighter 1 PH <= 0, then loop attack on random fighter 2

                    // random fighter 1 counter attack set to 0

                    // random fighter 2 counter attack decreases playerPick HP

                    // add playerPick base attack to the attack value

        // call 'gameTally' function
                    
    
  

});
