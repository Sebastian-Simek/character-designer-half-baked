// import functions and grab DOM elements
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
// set state for all of the character's catchphrases
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

let catchPhraseList = [''];

headDropdown.addEventListener('change', () => {
    headEl.style.backgroundImage = `url('../assets/${headDropdown.value}-head.png')`;
    headCount++;    
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    middleEl.style.backgroundImage = `url(../assets/${middleDropdown.value}-middle.png)`;
    middleCount++;
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    bottomEl.style.backgroundImage = `url(../assets/${bottomDropdown.value}-pants.png)`;
    bottomCount++;
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    catchPhraseList.push(catchphraseInput.value);
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (refactor to/call displayCatchphrases to do this work)
    displayCatchphrases();
});

function displayStats() {
    reportEl.textContent = `you have changed the head ${headCount} times, the body ${middleCount} times, and the pants ${bottomCount} times`;
}

function displayCatchphrases() {

    for (let catchphraseOut of catchPhraseList) {
        if (catchPhraseList[catchphraseOut]) {
            return catchphraseOut;
        } catchphrasesEl.append(catchphraseOut);
    } 
    
        
    // and for each catchphrase
    
    // create an HTML element with the catchphrase as its text content
    
    // and append that HTML element to the cleared-out DOM
}
