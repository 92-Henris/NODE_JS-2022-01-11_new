console.clear();

// Vidurkio išvedimas

const a1 = [10, 8, 2, 4];
const a2 = [1, 3, 5, 7, 9];
const a3 = [147, 258, 369, 123, 456, 789];


function vidurkis (array) {
    let suma = 0;
    array.forEach (i => {
        suma += i;
    });
    const vidurkis = suma / array.length;

console.log(`suma yra: ${suma} vidurkis yra: ${vidurkis} iš ${array.length} vnt.`);
}

vidurkis(a1);
vidurkis(a2);
vidurkis(a3);

console.log('----------------------------------------------------------');

// Legendines asmenybes [Vardas] [Pavarde] trumpinys yra [V.P.]

const s1 = 'mike Pukuotukas';
const s2 = 'Chuck Norris';
const s3 = 'Wonder Women';
const s4 = 'Algimantas cekuolis';

function varduraides (pavadinimas) {
    const zodis = pavadinimas.split(' ');
    const vard = zodis[0][0].toUpperCase();
    const pav = zodis[1][0].toUpperCase();
    console.log('Sutrumpinimai yra:', vard, pav);
}

varduraides(s1);
varduraides(s2);
varduraides(s3);
varduraides(s4);

console.log('----------------------------------------------------------');

// [Vardas] [Pavarde] yra [amzius] metų amžiaus.

const jonas = {
    name: 'Jonas',
    surname: 'Jonaitis',
    age: 99,
}

const maryte = {
    name: 'Maryte',
    surname: 'Marytaitė',
    age: 87,
}

console.log(jonas.name, jonas.surname, `yra ${jonas.age} metų amžiaus.`);
console.log(maryte.name, maryte.surname, `yra ${maryte.age} metų amžiaus.`);

// const people = [
//     {name: 'Maryte', surname: 'Marytaitė', age: 87};
//     {name: 'Jonas', surname: 'Jonaitis', age: 99};
// ];