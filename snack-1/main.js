/*
  Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
  Stampare a schermo la bici con peso minore.
*/


// create objects array

const bici = [
  {
    nome: 'bicicletta_1',
    'peso-kg': 0.5,
  },
  {
    nome: 'bicicletta_2',
    'peso-kg': 1,
  },
  {
    nome: 'bicicletta_3',
    'peso-kg': 0.7,
  },
  {
    nome: 'bicicletta_4',
    'peso-kg': 0.8,
  },
  {
    nome: 'bicicletta_5',
    'peso-kg': 1.5,
  },
  {
    nome: 'bicicletta_6',
    'peso-kg': 2.5,
  },
  {
    nome: 'bicicletta_7',
    'peso-kg': 1.2,
  }
]

// create empty array for weigh property
let arrPesoBici =[];

// get a function to find lower value in an array
function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}

// for loop to push weight of single bycicle in the array 
for (let i = 0; i < bici.length; i++) {
  const bicicletta = bici[i];
  arrPesoBici.push( bicicletta["peso-kg"])  
}

// call back function to find lower value in arrPesoBici
const pesoMinore = getMinOfArray(arrPesoBici)
// log result
console.log(arrPesoBici);
console.log(pesoMinore);



