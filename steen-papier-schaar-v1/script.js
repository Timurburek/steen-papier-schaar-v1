// 1. Elementen selecteren
const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");

const steenBtn = document.querySelector("#steen");
const papierBtn = document.querySelector("#papier");
const schaarBtn = document.querySelector("#schaar");

// 2. Variabelen declareren 
let humanChoice;
let computerChoice;

// Starttekst 
humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze!";

// 3. De functie voor het spel (zonder alert)
function playGame(event) {
    console.log("Jij koos: " + event.target.id);
    // Jouw keuze ophalen via de id van de geklikte knop
    humanChoice = event.target.id;
    humanOutput.innerHTML = humanChoice;

    // Computer keuze genereren (1 t/m 3) 
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    if (randomNumber === 1) {
        computerChoice = "steen";
    } else if (randomNumber === 2) {
        computerChoice = "schaar";
    } else if (randomNumber === 3) {
        computerChoice = "papier";
    }
    console.log("De computer koos: " + computerChoice);
    
    computerOutput.innerHTML = computerChoice; 

    // 4. De winnaar bepalen 
    if (humanChoice === computerChoice) {
        resultOutput.innerHTML = "Gelijkspel! Probeer het opnieuw.";
    } else if (
        (humanChoice === "steen" && computerChoice === "schaar") ||
        (humanChoice === "schaar" && computerChoice === "papier") ||
        (humanChoice === "papier" && computerChoice === "steen")
    ) {
        resultOutput.innerHTML = "Je hebt GEWONNEN!";
    } else {
        resultOutput.innerHTML = "Je hebt VERLOREN!";
    }
}

// 5. Event listeners toevoegen aan de knoppen 

// Bij steen doen we de alert EN het spel
steenBtn.addEventListener("click", function(event) {
    alert("Klik event triggered"); // De alert komt alleen hier
    playGame(event);               // Daarna start het spel
});

// Bij papier en schaar doen we alleen het spel
papierBtn.addEventListener("click", playGame);
schaarBtn.addEventListener("click", playGame);