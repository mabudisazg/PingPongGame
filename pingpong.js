const btn1 = document.querySelector('#p1btn');
const btn2 = document.querySelector('#p2btn');
const p1Display = document.querySelector('#player1Display');
const p2Display = document.querySelector('#player2Display');
const resetBtn = document.querySelector('#reset');
const selectGame = document.querySelector('#odaberi');

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

btn1.addEventListener('click', () => {
    // Ako igra još traje, povećavaj score dok ne bude winning score
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === winningScore){
            // Kada je postignut rezultat, prekini igru i dodaj boju za pobjednika ili gubitnika
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        // Updejtaj score
        p1Display.textContent = p1Score;
    }
});
btn2.addEventListener('click', () => {
    // Ako igra još traje, povećavaj score dok ne bude winning score
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === winningScore){
            // Kada je postignut rezultat, prekini igru
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }
        // Updejtaj score
        p2Display.textContent = p2Score;
    }
});


// Samo ako se promijeni igra sa change, ako ostane ista ništa se ne mijenja
selectGame.addEventListener('change', function () {
    // Koristimo parseInt jer nam value vraća string i trebamo ga pretvoriti u broj
    // Ne koristim arrow function jer se this u arrow functionu odnosi na globalnu vrijednost
    winningScore = parseInt(this.value);
    reset();
});

// Kada se klikne reset, resetiraj winning score, tj isGameOver da se moze nova igra igrati, resetiraj i rezultate i display rezultata
resetBtn.addEventListener('click',reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner','loser');
    p2Display.classList.remove('loser','winner');
};  