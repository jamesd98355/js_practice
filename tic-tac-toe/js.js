
function gameBoard(){
    //9 element array for gameboard
    const gameBoardArray = ["O", "X", "X", "O", "X", "X", "X", "O", "O "];

    //get field
    const getValue = (index) => gameBoardArray(index);

    //getGameBoard
    const getGameBoard = () => gameBoardArray;

    //reset game board
    const resetGameBoard = () => gameBoardArray.forEach((element) => element = null);

    //set one value on gameboard
    const setValue = (index, value) => gameBoardArray[index] = value;

    return{gameBoardArray, getValue, getGameBoard, resetGameBoard, setValue}
}
function Player(counter){
    this.counter = counter;

    //return counter of player (X or O)
    const getCounter = () => counter;

    return{
        getCounter
    }
}

function gameController(){

    const playerMove = (index) => {
        if(!gameBoard.getValue == ' '){alert('space already taken')}
        gameBoard.setValue(index, 'X');
    }
}


//displays game onto html page
function DisplayController(){
    const htmlBoard = Array.from(document.querySelectorAll('.grid-child'))
    for(let i = 0; i < htmlBoard.length; i++)
    {
        htmlBoard[i].addEventListener('click', gameController.playerMove.bind(i))
    }
}

const game1 = gameBoard();
game1.setValue(0,"z")

const htmlBoard = Array.from(document.querySelectorAll('.grid-child'))
    for(let i = 0; i < htmlBoard.length; i++)
    {
        htmlBoard[i].addEventListener('click', gameController.playerMove(i))
    }
