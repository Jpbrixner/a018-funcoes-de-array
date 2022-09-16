//Crie um array de números que contenha 8 números.

const arrayNum = [3, 12, 5, 24, 11, 2, 7, 25];

//Depois disso, utilize este array para criar duas funcões de array `map()`:
//A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma const triplos, e guarde o valor do array nesta const;

const triplos = arrayNum.map((num) => {
  return num * 3;
});

// A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma const metades, e guarde o valor do array nesta const;

const metades = arrayNum.map((num) => {
  return num / 2;
});

console.log(triplos, metades);
