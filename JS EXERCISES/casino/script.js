document.getElementById("dice-button").onclick = function(){drawNumber1()};

function drawNumber1(){
    d1 = getRandomNumber();;
    
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
    d2 = getRandomNumber();;
    
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



