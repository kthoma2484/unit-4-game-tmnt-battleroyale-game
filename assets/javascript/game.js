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
            8: {name: "Krang", healthPt: "195", attackPt: "12", ctrAttPt: "32", virtue: "bad"
            },
            9: {name: "Bebop", healthPt: "185", attackPt: "10", ctrAttPt: "29", virtue: "bad"
            },
            10: {name: "Rocksteady", healthPt: "175", attackPt: "8", ctrAttPt: "26", virtue: "bad"
            },
            11: {name: "Slash", healthPt: "165", attackPt: "6", ctrAttPt: "23", virtue: "bad"
            },
            12: {name: "Baxtor Fly", healthPt: "155", attackPt: "4", ctrAttPt: "21", virtue: "bad"
            }  
    }
    let playerSelection = {};
    let attackTurns = 0;
    let playerAttack = 0;
    let attSelection1 = {};
    let attSelection2 = {};
    let attackerArray = [];
    
  
    // player selected and relocated to battlefield & 2 attackers selected and relocated to battlefield
    let playerPick = function (target) {
        // player pick relocated from original location to battlefield
        $(target).remove();  
        $(target).appendTo(".player-battle");
        playerSelection = character[$(target).attr("data-character")];
        console.log(playerSelection);
        $(".p-stats").html('HP = ' + playerSelection.healthPt + ' / ' + 'Attack Pts = ' + playerSelection.attackPt);
        // computer picks 2 random attackers
        // if player selected a good guy then the opposing attackers are from the bad guys team    
        if (playerSelection.virtue === "good") {
            ranAttacker1 = Math.floor((Math.random() *(12 - 7) + 7));
            attSelection1 = character[ranAttacker1];
            console.log(attSelection1)
            $("[data-character='" + ranAttacker1 +"']").appendTo(".computer-battle");
            $(".c1-stats").html(attSelection1.name + ' / HP = ' + attSelection1.healthPt + ' / Counter Attack Pts = ' + attSelection1.ctrAttPt);
            attackerArray.push(ranAttacker1);
            // the second attacker is added only if first attacker not already chosen
            while (ranAttacker2 = Math.floor((Math.random() *(12 - 7) + 7))) {
                if (!attackerArray.indexOf(ranAttacker2)) {
                    console.log('duplicate pick ' + ranAttacker2);
                    if (ranAttacker1 === ranAttacker2) {
                        ranAttacker2 = Math.floor((Math.random() *(12 - 7) + 7));
                        console.log('second random attempt ' + ranAttacker2)
                    }
                }
                else {
                    attSelection2 = character[ranAttacker2];
                    console.log(attSelection2)
                    $("[data-character='" + ranAttacker2 +"']").appendTo(".computer-battle");
                    $(".c2-stats").html(attSelection2.name + ' / HP = ' + attSelection2.healthPt + ' / Counter Attack Pts = ' + attSelection2.ctrAttPt);
                    if (attackerArray.indexOf(ranAttacker1) == -1 && attackerArray.indexOf(ranAttacker2) == -1);
                        return;
                }
            }
        }
        // if player selected a bad guy then the opposing attackers are from the good guys team    
        if (playerSelection.virtue === "bad") {
            ranAttacker1 = Math.floor((Math.random() *(6 - 1) + 1));
            attSelection1 = character[ranAttacker1];
            console.log(attSelection1);
            $("[data-character='" + ranAttacker1 +"']").appendTo(".computer-battle");
            $(".c1-stats").html(attSelection1.name + ' / HP = ' + attSelection1.healthPt + ' / Counter Attack Pts = ' + attSelection1.ctrAttPt);
            attackerArray.push(ranAttacker1);
            while (ranAttacker2 = Math.floor((Math.random() *(6 - 1) + 1))) {
                if (!attackerArray.indexOf(ranAttacker2)) {
                    console.log('duplicate pick ' + ranAttacker2);
                    if (ranAttacker1 === ranAttacker2) {
                        ranAttacker2 = Math.floor((Math.random() *(6 - 1) + 1));
                        console.log('second random attempt ' + ranAttacker2)
                    }
                } 
                else {
                    attSelection2 = character[ranAttacker2];
                    console.log(attSelection2);
                    $("[data-character='" + ranAttacker2 +"']").appendTo(".computer-battle");
                    $(".c2-stats").html(attSelection2.name + ' / HP = ' + attSelection2.healthPt + ' / Counter Attack Pts = ' + attSelection2.ctrAttPt);
                    if (attackerArray.indexOf(ranAttacker1) == -1 && attackerArray.indexOf(ranAttacker2) == -1);
                        return;
                }
            }
        }    
    }
    
    // player selects character as playerPick
    
    let choseFighter = function () {
        $('.fighter-pic').off("click");
        $('.fighter-pic').click(function() {
        playerPick(this);
        // turns click even off to prevent more than one player selection
        $('.fighter-pic').off("click");
        $('.attack').show();
    });   
    }
 
    // for each attack button press...
    $('.attack').click(function() {
        if (attSelection1.healthPt > 0) {
        attackTurns++;
        playerAttack = parseInt(playerSelection.attackPt) * attackTurns;
        playerSelection.healthPt = playerSelection.healthPt - attSelection1.ctrAttPt;
        console.log('player health= ' + playerSelection.healthPt);
        $(".p-stats").html('HP = ' + playerSelection.healthPt + ' / ' + 'Counter Attack Pts = ' + playerSelection.attackPt);
        attSelection1.healthPt = attSelection1.healthPt - playerAttack;
        $(".c1-stats").html(attSelection1.name + ' / HP = ' + attSelection1.healthPt + ' / Counter Attack Pts = ' + attSelection1.ctrAttPt);
        console.log('player attack = ' + playerAttack);
        }
        // when attacker 1 defeated..
        if (attSelection1.healthPt <= 0) {      
            attackTurns++;
            playerAttack = parseInt(playerSelection.attackPt) * attackTurns;
            $(".c1-stats").html(attSelection1.name + ' has been defeated!');
            playerSelection.healthPt = playerSelection.healthPt - attSelection2.ctrAttPt;
            console.log('player health= ' + playerSelection.healthPt);
            $(".p-stats").html('HP = ' + playerSelection.healthPt + ' / ' + 'Counter Attack Pts = ' + playerSelection.attackPt);
            attSelection2.healthPt = attSelection2.healthPt - playerAttack;
            console.log('attacker 2 health = ' + attSelection2.healthPt)
            $(".c2-stats").html(attSelection2.name + ' / HP = ' + attSelection2.healthPt + ' / Counter Attack Pts = ' + attSelection2.ctrAttPt);
            console.log(typeof(playerAttack))
        }
        console.log('player attack is = ' + playerAttack)
        // player game win function if both random attackers HP at 0 or less
        if (attSelection1.healthPt <= 0 && attSelection2.healthPt <= 0) {
            $(".c2-stats").html(attSelection2.name + ' has been defeated!');
            $(".p-stats").html(playerSelection.name + ' is the Winner!');
            numWins++;
            console.log('you win');
            $('#numWins').html(numWins);
            $('#game-end').html('You Win!');
            $('.attack').hide();
        // player game loss function if player HP at 0 or less before both attackers at 0 or less 
        } else if (playerSelection.healthPt <= 0) {
            $(".c2-stats").html('You have been defeated by ' + attSelection2.name);
            $(".p-stats").html(playerSelection.name + ' is the Losser!');
            numLosses++;
            console.log('you loss');
            $('#numLosses').html(numLosses);
            $('#game-end').html('You Loss!');
            $('.attack').hide();
        }
    });
    // start new game
    let newGame = function() {   
        // reset characters health and attack to 150
        character = {
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
            8: {name: "Krang", healthPt: "195", attackPt: "12", ctrAttPt: "32", virtue: "bad"
            },
            9: {name: "Bebop", healthPt: "185", attackPt: "10", ctrAttPt: "29", virtue: "bad"
            },
            10: {name: "Rocksteady", healthPt: "175", attackPt: "8", ctrAttPt: "26", virtue: "bad"
            },
            11: {name: "Slash", healthPt: "165", attackPt: "6", ctrAttPt: "23", virtue: "bad"
            },
            12: {name: "Baxtor Fly", healthPt: "155", attackPt: "4", ctrAttPt: "21", virtue: "bad"
            }  
        }
        playerSelection = {};
        attackTurns = 0;
        playerAttack = 0;
        attSelection1 = {};
        attSelection2 = {};
        attackerArray = [];
        // return charactors to their team positions
        $('.good-dude').appendTo('.good-team');
        $('.bad-dude').appendTo('.bad-team');
        choseFighter();
    }
    
    // button click will start game
    $('.newgame').click(newGame);
    console.log('need to select character first');


});

