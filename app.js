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

let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

let catchPhraseList = [];


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
    displayCatchphrases();
    // catchphraseInput.value = '';
});

function displayStats() {
    reportEl.textContent = `you have changed the head ${headCount} times, the body ${middleCount} times, and the pants ${bottomCount} times`;
}

function displayCatchphrases() {
    catchphrasesEl.textContent = '';
    for (let catchphraseOut of catchPhraseList) {
        const newEl = document.createElement('div');       
        newEl.textContent = catchphraseOut;
        catchphrasesEl.append(newEl);
    }
}
