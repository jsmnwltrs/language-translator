const german = {
    "merry": "frohe", 
    "christmas":"weihnachten", 
    "and":"und", 
    "happy":"glückliches", 
    "new":"neues", 
    "year":"jahr"
};

const spanish = {
    "merry": "feliz", 
    "christmas":"navidad", 
    "and":"y", 
    "happy":"próspero", 
    "new":"nuevo", 
    "year":"año"
};

const french = {
    "merry": "joyeux", 
    "christmas":"noel", 
    "and":"et", 
    "happy":"bonne", 
    "new":"nouveau", 
    "year":"année"
};


const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};

let outputString = '';
const translatorLoop = (language) => {
let inputText = document.getElementById('textarea').value.toLowerCase();
let inputArray = inputText.split(' ');
for (i = 0; i < inputArray.length; i++) {
    outputString += `${language[inputArray[i]]}`;
    outputString += " ";
};
printToDom(outputString,'emptyDiv');
};
