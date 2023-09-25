document.getElementById("dice-button").onclick = drawNumber();

function drawNumber(){
    var d1 = getRandomNumber();
    var d2 = getRandomNumber();

    switch (d1) {
        case 1:
            var img = document.getElementById("dice-1").src = 'dice-1.jpg'
            break;
        case 2:
            var img = document.getElementById("dice-1").src = 'dice-2.jpg'
            break;
        case 3:
            var img = document.getElementById("dice-1").src = 'dice-3.jpg'
            break;
        case 4:
            var img = document.getElementById("dice-1").src = 'dice-4.jpg'
            break;
        case 5:
            var img = document.getElementById("dice-1").src = 'dice-5.jpg'
            break;
        case 6:
            var img = document.getElementById("dice-1").src = 'dice-6.jpg'
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



