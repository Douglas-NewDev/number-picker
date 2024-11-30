function draw() {
    let quantity = parseInt(document.getElementById('quantity').value);
    let fromNumber = parseInt(document.getElementById('from').value);
    let toNumber = parseInt(document.getElementById('to').value);

    if (quantity > toNumber || fromNumber > toNumber) {
        alert('Invalid numbers');
        reset();
        toggleButtonStatus();
        return;
    }

    if (quantity > (toNumber - fromNumber + 1)) {
        alert("The quantity of numbers cannot exceed the available range.");
        reset();
        toggleButtonStatus();
        return;    
    }

    if (isNaN(quantity) || isNaN(fromNumber) || isNaN(toNumber)) {
        alert('Please fill in all fields with numeric values.');
        return;
    }

    let drawnNumbers = [];
    let number;

    for (let i = 0; i < quantity; i++) {
        number = getRandomNumber(fromNumber, toNumber);
        drawnNumbers.push(number);
    }

    let result = document.getElementById('result');
    result.innerHTML = `<label class="text__paragraph">Drawn numbers: ${drawnNumbers}</label>`;

    toggleButtonStatus();
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function toggleButtonStatus() {
    let button = document.getElementById('btn-reset');
    if (button.classList.contains('button__disabled')) {
        button.classList.remove('button__disabled');
        button.classList.add('button__enabled');
    } else {
        button.classList.remove('button__enabled');
        button.classList.add('button__disabled');
    }
}

function reset() {
    document.getElementById('quantity').value = '';
    document.getElementById('from').value = '';
    document.getElementById('to').value = '';
    document.getElementById('result').innerHTML = '<label class="text__paragraph">Drawn numbers: none yet</label>';
    toggleButtonStatus();
}
