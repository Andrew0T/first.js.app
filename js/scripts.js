// exericise 1.1
// alert('Hello World');
//let favoriteFood = 'Pasta';
//document.write(favoriteFood); old task 1.1 deleted as required to start next task.
// new task for 1.2 started

// exercise 1.2 pokomon name list in an array with types in another array.
//let pokemonList = [
//  { name: 'Zapdos', height: 1.7, types: ['electic', 'flying']
//},
//{ name: 'Seel', height: 1.1, types: ['ice', 'water']
//},
//{ name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison']
//}
//];
// exercise 1.3 the 'for' loop highlighting the name, height and types of the pokemon
let pokemonList = [
  { name: 'Zapdos',
    height: 1.7, 
   types: ['electic', 'flying']
  },
  {
   name: 'Seel',
   height: 1.1,
    types: ['ice', 'water']
  },
  { name: 'Bulbasaur',
   height: 0.7, 
   types: ['grass', 'poison']
  }
];
let i = 0;
for (let i = 0; i < 3; i++) {
    if (pokemonList[i].height >= 1.2) {
      document.write(pokemonList[i].name + "is" + pokemonList[i].height + " meters tall" + "Wow, that is big!" + pokemonList[i].types)
  } else if (pokemonList[i].height < 1.2 && pokemonList[i].height > 0.8) {
      document.write(pokemonList[i].name + "is" + pokemonList[i].height + " meters tall" + pokemonList[i].types)
  } else if (pokemonList[i].height < 0.8) {
      document.write(pokemonList[i].name + "is" + pokemonList[i].height + " meters tall" + pokemonList[i].types)
  }
};