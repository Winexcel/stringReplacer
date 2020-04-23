function isInteger(number) {
    return (Number(number) ^ 0) === Number(number) && (typeof number === 'string' || typeof number === 'number')
}

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function generateRandomString(n) {
    let alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let randomString = '';
    for (let i = 1; i <= n; i++) {
        randomString = randomString + alphabet[randomInteger(0, alphabet.length - 1)];
    }

    return randomString;
}

let n = 0;

do {
    n = prompt('Введите число N');
} while (!isInteger(n) && n > 0);

n = Number(n);

let randomString = generateRandomString(n)

document.querySelector('#randomString').innerHTML = randomString;

let symbol = '';
let symbolRepeat = 0;

do {
    symbol = prompt('Введите первый символ');
} while (!symbol || symbol.length !== 1);

randomString = randomString.split('');

for (let i = 0; i < randomString.length; i++) {
    let code = randomString[i].charCodeAt(0);
    if(code >= 65 && code <= 90) {
        randomString[i] = symbol;
        symbolRepeat++;
    }
}

randomString = randomString.join('');

console.log(randomString);

let symbol2 = '';
let symbol2Repeat = 0;

do {
    symbol2 = prompt('Введите второй символ');
} while (!symbol2 || symbol2.length !== 1);

randomString = randomString.split('');

for (let i = 0; i < randomString.length; i++) {
    let code = randomString[i].charCodeAt(0);
    if(code >= 48 && code <= 57) {
        randomString[i] = symbol2;
        symbol2Repeat++;
    }
}

randomString = randomString.join('');

document.querySelector('#randomStringAfter').innerHTML = randomString;
document.querySelector('#symbolRepeat').innerHTML = symbolRepeat;
document.querySelector('#symbol2Repeat').innerHTML = symbol2Repeat;


