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


let biciLeggera = bici[0]
for (let i = 0; i < bici.length; i++) {

  if (bici[i]["peso-kg"] < biciLeggera['peso-kg']) {
    biciLeggera = bici[i]
  }

}
console.log(biciLeggera);


const divEl = document.querySelector('.lighter-cycle')

divEl.innerHTML = `la ${biciLeggera.nome} pesa ${biciLeggera['peso-kg']}kg  ed e' la piu' leggera ` 



