/*
  Creare un array di oggetti di squadre di calcio.
  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
  Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
  Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
  Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// create objects array of football team 
const footballTeam = [
  {
    name: 'Juventus',
    points: '',
    faults: '',
  },
  {
    name: 'Lecce',
    points: '',
    faults: '',
  },
  {
    name: 'Inter',
    points: '',
    faults: '',
  },
  {
    name: 'Milan',
    points: '',
    faults: '',
  },
  {
    name: 'Roma',
    points: '',
    faults: '',
  },
  {
    name: 'Lazio',
    points: '',
    faults: '',
  },
  {
    name: 'Perugia',
    points: '',
    faults: '',
  },
]


// prepare new array 
const arrNameFault = []

for (let i = 0; i < footballTeam.length; i++) {
  const team = footballTeam[i];
  // generate random number for points and faults
  team['faults'] = Math.floor(Math.random() * 51)

  team['points'] = Math.floor(Math.random() * 51)

  // create new array with names and faults
  arrNameFault.push({
    name: team.name,
    faults: team.faults,
  })
}

// log results
console.log(footballTeam);
console.log(arrNameFault);






