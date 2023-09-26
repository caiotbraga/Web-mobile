var d1 = getRandomNumber();
var d2 = getRandomNumber();
var sum;
var firstRound = true;
var point;

document.getElementById("dice-button").onclick = function(){drawNumber1()};

function drawNumber1(){
    
    if(d1 === 1){
        document.getElementById("dice-1").src = "img/dice-1.jgp"
    }
    else if(d1 === 2){
        document.getElementById("dice-1").src = "img/dice-2.jpg"
    }
    else if(d1 === 3){
        document.getElementById("dice-1").src = "img/dice-3.jpg"
    }
    else if(d1 === 4){
        document.getElementById("dice-1").src = "img/dice-4.jpg"
    }
    else if(d1 === 5){
        document.getElementById("dice-1").src = "img/dice-5.jpg"
    }
    else if(d1 === 6){
        document.getElementById("dice-1").src = "img/dice-6.jpg"
    }

    drawNumber2();
}

function drawNumber2(){
    
    
    if(d2 === 1){
        document.getElementById("dice-2").src = "img/dice-1.jpg"
    }
    else if(d2 === 2){
        document.getElementById("dice-2").src = "img/dice-2.jpg"
    }
    else if(d2 === 3){
        document.getElementById("dice-2").src = "img/dice-3.jpg"
    }
    else if(d2 === 4){
        document.getElementById("dice-2").src = "img/dice-4.jpg"
    }
    else if(d2 === 5){
        document.getElementById("dice-2").src = "img/dice-5.jpg"
    }
    else if(d2 === 6){
        document.getElementById("dice-2").src = "img/dice-6.jpg"
    }
}

function getRandomNumber() {

    let IntegerNumber = Math.floor(Math.random() * 6) + 1;

    return IntegerNumber;
}

function calculate(){
    sum = d1 + d2;
    
    if(firstRound){
        if(sum === 7 || sum === 11){
            setTimeout(function() {
                alert("Você perdeu o jogo!");
              }, 1000);
        }else if(sum === 2 || sum === 3 ||sum === 12){
            setTimeout(function() {
                alert("Você perdeu o jogo!");
              }, 1000);
        }else{
            point = sum
            document.getElementById("point").innerHTML = "Point: " + point;
        }
        firstRound = false;
    }else{
        if(sum === point){
            setTimeout(function() {
                alert("You won the game!");
              }, 1000);
        }else if(sum === 7){
            setTimeout(function() {
                alert("You lost the game!");
              }, 1000);
        }else{
            setTimeout(function() {
                alert("Try again!");
              }, 1000);
        }
    }
}



