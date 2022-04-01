console.log('js funguje');

const names = [
    'Shelly',
    'Jenny',
    'John',
    'Paul'
];

const newNames = names.map((name) => {      // uvnitř map je funkce, která přímá jeden parametr (položka pole) a vrací nové pole
    // return name.length > 4               // fce může přijmat i druhý parametr a to index položky
    return `Ciao, I'm ${name}`;             
})

console.log(newNames)

const newNames2 = names.map(name => `Ciao, I'm ${name}`);    // pokud má fce jeden parametr, můžu jí zapsat jednoduššeji
console.log(newNames2)

const weekdays = [
    'pondělí',
    'úterý',
    'středa',
    'čtvrtek',
    'pátek',
    'sobota',
    'neděle',
  ];

//   const newWeekdays = weekdays.map((weekday) => {
//       return weekday.toUpperCase()
//   })

const newWeekdays = weekdays.map(weekday => weekday.toUpperCase())       // vypíše mi to dny velkým písmenem

const newWeekdays2 = weekdays.map(weekday => weekday.slice(0, 2))        // vypíše mi po, ut, st, čt, pa, so, ne - jen první dvě písmenka

console.log(newWeekdays)
console.log(newWeekdays2)




const months = [
    {
      name: 'leden',
      days: 31,
    },
    {
      name: 'únor',
      days: 28,
    },
    {
      name: 'březen',
      days: 31,
    },
    {
      name: 'duben',
      days: 30,
    },
    {
      name: 'květen',
      days: 31,
    },
    {
      name: 'červen',
      days: 30,
    },
    {
      name: 'červenec',
      days: 31,
    },
    {
      name: 'srpen',
      days: 31,
    },
    {
      name: 'září',
      days: 30,
    },
    {
      name: 'říjen',
      days: 31,
    },
    {
      name: 'listopad',
      days: 30,
    },
    {
      name: 'prosinec',
      days: 31,
    },
  ];

const newMonths = months.map(month => month.days)

const newMonths2 = months.map(month => `1. ${month.name} 2020`)



console.log(newMonths)
console.log(newMonths2)




// v Reaktu, pokud chci vypsat více elementů za sebou, tak je můžu vypsat do pole

const serieElementu = [
  <h3>Praha</h3>,
  <h3>Brno</h3>,
  <h3>Ostrava</h3>,
];        // do renderu pak napíšu {serieElementu} a vypíšou se všechny


const serieEl = serieElementu.map(
  serieElementu => {
    return <h3>{serieElementu}</h3>
  }
);

// const serieEl = serieElementu.map(serieElementu => <h3>{serieElementu}</h3>)   // můžu to napsat i takto zkráceně

// do renderu to můžu zapsat 
{/* <ul>
  {names.map(name => <li>{ name }</li>) }
</ul> */}


