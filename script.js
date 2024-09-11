const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWin() {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            statusDisplay.textContent = `${currentPlayer} Ganan super bien!`;
            gameActive = false;
            return;
        }
    }
    if ([...cells].every(cell => cell.textContent)) {
        statusDisplay.textContent = "Es un empate!";
        gameActive = false;
    }
}

function handleClick(event) {
    const cell = event.target;
    if (!gameActive || cell.textContent) return;
    
    cell.textContent = currentPlayer;
    checkWin();
    if (gameActive) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function handleReset() {
    cells.forEach(cell => cell.textContent = '');
    statusDisplay.textContent = '';
    currentPlayer = 'X';
    gameActive = true;
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', handleReset);