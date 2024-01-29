//1. CHECK SPEED DIFFERENCE BETWEEN LOOPS: WHILE, FOR, FOR OF, FOREACH

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]

  
  console.time('While loop time');
  let i = 0;
  while(i < countries.length){
    console.log(countries[i]);
    i++;
  }
  console.timeEnd('While loop time');

  console.time('For loop time');
  for (let i = 0; i < countries.length; i++){
    console.log(countries[i]);
  }
  console.timeEnd('For loop time');

  console.time('For of loop time');
  for (const country of countries){
    console.log(country);
  }
  console.timeEnd('For of loop time');

  console.time('ForEach loop time');
  countries.forEach(country => {
    console.log(country);
  });
  console.timeEnd('ForEach loop time');