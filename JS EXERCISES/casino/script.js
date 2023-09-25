document.getElementById("dice-button").onclick = drawNumber();

function drawNumber(){
    var d1 = getRandomNumber();
    var d2 = getRandomNumber();

    switch (d1) {
        case 1:
            var img = document.getElementById("dice-1");
            img.src = ''
            break;
    
        default:
            break;
    }
}

function getRandomNumber() {

    let decimal = Math.random() * 6;

    let IntegerNumber = Math.floor(decimal) + 1;

    return IntegerNumber;
}



