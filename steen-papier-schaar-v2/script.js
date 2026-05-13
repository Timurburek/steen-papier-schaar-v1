// Selecteer de elementen waar we de tekst in tonen
const computerKeuzeDisplay = document.getElementById('computer-keuze');
const jouwKeuzeDisplay = document.getElementById('jouw-keuze');
const resultaatDisplay = document.getElementById('resultaat');
const scoreDisplay = document.getElementById('score');

// Gebruik querySelectorAll voor alle buttons
const mogelijkeKeuzes = document.querySelectorAll('button');

let gebruikersKeuze;
let computerKeuze;
let resultaat;
let score = 0; // We beginnen op 0

// Slechts 1 click event handler nodig via een loop
mogelijkeKeuzes.forEach(knop => knop.addEventListener('click', (e) => {
    // STAP 1: Leg jouw keuze vast
    gebruikersKeuze = e.target.id;
    jouwKeuzeDisplay.innerHTML = gebruikersKeuze;

    console.log("Jij koos: " + gebruikersKeuze);
    
    // STAP 2: Laat de computer een keuze maken
    genereerComputerKeuze();
    
    // STAP 3: Bereken de winnaar (nu met de gefixte switch)
    bepaalWinnaar();
}));

function genereerComputerKeuze() {
    const randomNummer = Math.floor(Math.random() * 3) + 1;

    console.log("Willekeurig nummer: " + randomNummer);
    
    if (randomNummer === 1) computerKeuze = 'steen';
    if (randomNummer === 2) computerKeuze = 'schaar';
    if (randomNummer === 3) computerKeuze = 'papier';
    
    computerKeuzeDisplay.innerHTML = computerKeuze;
}

// Gebruik Switch statements voor de logica
function bepaalWinnaar() {
    // We plakken de keuzes aan elkaar: bijv. "steen" + "schaar" wordt "steenschaar"
    switch (gebruikersKeuze + computerKeuze) {
        // Gevallen waarin JIJ wint
        case 'schaarpapier':
        case 'steenschaar':  // GEFIXT: Streepje is nu weg
        case 'papiersteen':
            resultaat = "JE HEBT GEWONNEN! 🎉";
            break;

        // Gevallen waarin de COMPUTER wint
        case 'papierschaar':
        case 'schaarsteen':
        case 'steenpapier':
            resultaat = "JE HEBT VERLOREN! 😢";
            break;

        // Gevallen waarin het GELIJK is
        case 'steensteen':
        case 'papierpapier':
        case 'schaarschaar':
            resultaat = "GELIJKSPEL! 🤝";
            break;
            
        default:
            resultaat = "Er ging iets mis... (Check: " + gebruikersKeuze + " vs " + computerKeuze + ")";
    }
    
    // Toon de uitkomst in de browser
    resultaatDisplay.innerHTML = resultaat;
}
function bepaalWinnaar() {
    switch (gebruikersKeuze + computerKeuze) {
        case 'schaarpapier':
        case 'steensteen': 
        case 'steenschaar':
        case 'papiersteen':
            resultaat = "JE HEBT GEWONNEN! 🎉";
            score++; // SCORE GAAT OMHOOG
            break;

        case 'papierschaar':
        case 'schaarsteen':
        case 'steenpapier':
            resultaat = "JE HEBT VERLOREN! 😢";
            score = 0; // RESET NAAR NUL
            break;

        case 'steensteen':
        case 'papierpapier':
        case 'schaarschaar':
            resultaat = "GELIJKSPEL! 🤝";
            // Score verandert niet
            break;
    }
    
    // HEEL BELANGRIJK: Update de tekst in je HTML
    resultaatDisplay.innerHTML = resultaat;
    scoreDisplay.innerHTML = score; // DEZE REGEL MOET ONDERAAN DE FUNCTIE
}