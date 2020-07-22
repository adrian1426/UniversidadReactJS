//Spread operator con arreglos

const frutasVerdes = ['kiwi', 'uva', 'limon'];

const frutasRojas = ['manzana', 'fresa', 'sandia'];

const resultado = frutasVerdes.concat(frutasRojas);

const resultado2 = [
  'pera',
  ...frutasVerdes,
  'ciruela',
  ...frutasRojas
];

console.log("objeto combinado2: ", resultado2);
