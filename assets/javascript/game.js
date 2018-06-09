$(document).ready(function() {
/*
    let numWins = 0;
    let numLosses = 0;
    let topazVal = "";
    let emeraldVal = "";
    let sapphireVal = "";
    let rubyVal = "";   
    let playerScore = 0; 
    let count="";
    let counter="";

    // function to generate random gem values
    let ranGemValues = function() {
        topazVal = "";
        emeraldVal = "";
        sapphireVal = "";
        rubyVal = "";
        let gemGameVals = [];
        let aGemVal = function() {
            while (ranGemVal = Math.floor(Math.random() * 12) + 1) {
                if (gemGameVals.indexOf(ranGemVal) == -1) {
                    gemGameVals.push(ranGemVal);
                    return ranGemVal;
                }
            } console.log

        }
    
        topazVal = aGemVal();
        console.log('topaz value this game = ' + topazVal);
        
        emeraldVal = aGemVal();
        console.log('emerald value this game  = ' + emeraldVal);
          
        rubyVal = aGemVal();
        console.log('ruby value this game = ' + rubyVal);
      
        sapphireVal = aGemVal();
        console.log('sapphire value this game = ' + sapphireVal);
      
        console.log(gemGameVals);  
    }

    // start timer
    function timer() {
        console.log('timer ran mofo!');
        count=count-1;
        $('#timer').html(count + ' seconds');
        if (count <= 0) {
            numLosses++;
            $('#game-end').html('Your Time has passed! You have not met the price the Universe demands.');
            $('#numLosses').html(numLosses);
            clearInterval(counter)
        }
    }

    // start new game
    let newGame = function() {   
        // reset player score for new game 
        playerScore = 0;
        $('#playerTotal').html(playerScore);
        // generate new random number
        randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        $("#gameRanNum").html(randomNumber);
        // generate new gem values
        ranGemValues();
        console.log('random number is = ' + randomNumber)
        console.log(`playerScore: ${playerScore}  randomNumber: ${randomNumber}`);
        $('#game-end').html("");
        clearInterval(counter);
        count=60
        counter=setInterval(timer, 1000);
        $('#timer').html(count + ' seconds');
    }

    $('button').click(newGame);

    // game win function if player score equals random game number
    let gameTally = function()  {
        if (playerScore === randomNumber) {
            numWins++;
            console.log('you win');
            $('#numWins').html(numWins);
            $('#game-end').html('You have met the offering demands of the Universe! The fates favor you!');
            clearInterval(counter);
        } else if (playerScore > randomNumber) {
            numLosses++;
            console.log('you loss');
            $('#numLosses').html(numLosses);
            $('#game-end').html('You have NOT met the demands of the Universe! You! Are! Not! Worthy!');
            clearInterval(counter);
        }
    } 


    // on gem click the gem value is added to player total
    $('#topaz').click(function() {
        playerScore+=topazVal;
        $('#playerTotal').html(playerScore);
        console.log(`playerScore: ${playerScore}`);
        gameTally();
    });

    $('#emerald').click(function() {
        playerScore+=emeraldVal;
        $('#playerTotal').html(playerScore);
        console.log(`playerScore: ${playerScore}`);
        gameTally();
    });

    $('#ruby').click(function() {
        playerScore+=rubyVal;
        $('#playerTotal').html(playerScore);
        console.log(`playerScore: ${playerScore}`);
        gameTally();
    });

    $('#sapphire').click(function() {
        playerScore+=sapphireVal;
        $('#playerTotal').html(playerScore);
        console.log(`playerScore: ${playerScore}`);
        gameTally();
    });
   */
});
