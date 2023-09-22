let auxBool = true;
let totalAux = null;
document.getElementById("rollButton").addEventListener("click", function () {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    let total = dice1 + dice2;

    document.getElementById("dice1").innerHTML = `Dice 1= ${dice1}`;
    document.getElementById("dice2").innerHTML = `Dice 2= ${dice2}`;

    document.getElementById("soma").innerText = `SOMA: ${total}`;
    if (auxBool == true) {
        if (total == 7 || total == 11) {
            document.getElementById("resultado").innerText = `RESULTADO: ${total},VOCE GANHOU`;
            

        } else if (total == 2 || total == 3 || total == 12) {
            document.getElementById("resultado").innerText = `RESULTADO: ${total},VOCE PERDEU :(`;
            //4, 5, 6, 8, 9, 10
        }
        else {
            document.getElementById("resultado").innerText = `RESULTADO: ${total}, continue jogando`;
            totalAux = total;
        }
        auxBool = false;
        
    }
    else {
        document.getElementById("soma").innerText = `SOMA: ${total}`;
        if (totalAux == total) {
            document.getElementById("resultado").innerText = `RESULTADO: ${total},VOCE GANHOU`;
        }
        else if (total == 7) {
            document.getElementById("resultado").innerText = `RESULTADO: ${total},VOCE PERDEU :(`;
        }
    }
});