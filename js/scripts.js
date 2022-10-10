let pokemonRepository = (function(){

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

  {
    name: 'Bulbasaur',
    height: 0.7,
    types: ['grass', 'poison']
  }

];

function getAll() {
  return pokemonList;
}

function add(pokemon) {
  if (typeof pokemon === 'Object' && 'Name' in pokemon);
  pokemonList.push(pokemon);
}

return {
  add: add,
  getAll: getAll
};

})();

// adding another pokemon to the Array
pokemonRepository.add({ name: 'Kangaskhan',
    height: 2.2, 
   types: ['normal']
  });

//print the pokemon's name, height and types in the Array.
pokemonRepository.getAll().forEach(function(pokemon){
    if (pokemon.height >= 1.9) {
    document.write("<p>" + pokemon.name + "</p>" + "( is" + pokemon.height + " meters tall)" + " Wow, that is big!" + "<p>" + pokemon.types + "</p>")
  } else if (pokemon.height <= 1.8 && pokemon.height > 1.2) {
    document.write("<p>" + pokemon.name + "</p>" + "(is" + pokemon.height + " meters tall)" + "<p>" + pokemon.types + "</p>")
  } else if (pokemon.height <= 1.2 && pokemon.height >= 0.8) {
    document.write("<p>" + pokemon.name + "</p>" + "(is" + pokemon.height + " meters tall)" + "<p>" + pokemon.types + "</p>")
  } else {
    document.write("<p>" + pokemon.name + "</p>" + "(is" + pokemon.height + " meters tall)" + "<p>" + pokemon.types + "</p>")
  }
});

Object.keys(pokemonRepository.getAll()).forEach(function(pokemon){
  console.log(pokemon + ': ' + pokemonRepository.getAll()[pokemon] +'<br>');
  document.write(pokemon + ': ' + pokemonRepository.getAll()[pokemon] +'<br>');
});// array results in undefined