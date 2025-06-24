let yourWins = 0;
let compWins = 0;
const icons = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};
function play(yourChoice) {
    const options = ["rock", "paper", "scissors"];
    const compChoice = options[Math.floor(Math.random() * 3)];
    let resultText = "";
    if (yourChoice === compChoice) {
        resultText = `🤝 It's a tie! You both chose ${icons[yourChoice]} (${yourChoice}).`;
    } else if (
        (yourChoice === "rock" && compChoice === "scissors") ||
        (yourChoice === "paper" && compChoice === "rock") ||
        (yourChoice === "scissors" && compChoice === "paper")
    ) {
        resultText = `✅ You won! ${icons[yourChoice]} (${yourChoice}) beats ${icons[compChoice]} (${compChoice}).`;
        yourWins++;
    } else {
        resultText = `❌ You lost! ${icons[compChoice]} (${compChoice}) beats ${icons[yourChoice]} (${yourChoice}).`;
        compWins++;
    }
    document.getElementById("result").textContent = resultText;
    document.getElementById("your-wins").textContent = yourWins;
    document.getElementById("comp-wins").textContent = compWins;
}
function resetGame() {
    yourWins = 0;
    compWins = 0;
    document.getElementById("result").textContent = "";
    document.getElementById("your-wins").textContent = yourWins;
    document.getElementById("comp-wins").textContent = compWins;
}