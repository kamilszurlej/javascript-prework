const buttonRock = document.getElementById('button-rock'), 
    buttonPaper = document.getElementById('button-paper'), 
    buttonScissors = document.getElementById('button-scissors'), 
    resultPc = document.getElementById('result-pc'), 
    resultUser = document.getElementById('result-user')
;

let resultPcScore = 0, 
    resultUserScore = 0
;

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    function getMoveName(argMoveId) {
        console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
            return 'kamień';
        }
    }

    function displayResult(argPlayerMove, argComputerMove) {
        console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
        if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
            printMessage('Wygrywasz!');
            resultUserScore++;
        } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
            printMessage('Wygrywasz!');
            resultUserScore++;
        } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
            printMessage('Wygrywasz!');
            resultUserScore++;
        } else if (argPlayerMove == argComputerMove) {
            printMessage('Remis! :O');
        } else {
            printMessage('Przegrywasz :(');
            resultPcScore++;
        }
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    }
    argPlayerMove = argButtonName;
    console.log('ruch gracza to: ' + argPlayerMove);

    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);

    argComputerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + argComputerMove);
    
    displayResult(argPlayerMove, argComputerMove);
    console.log('wynik: ' + resultPcScore + " - " + resultUserScore);

    resultPc.innerHTML = resultPcScore;
    resultUser.innerHTML = resultUserScore;
}

buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });
buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });