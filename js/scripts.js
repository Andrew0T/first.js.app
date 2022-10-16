<<<<<<< Updated upstream
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

//add new pokemon to pokemonList

function add(pokemon) {
  if (typeof pokemon === 'object' && 'name' in pokemon);
  pokemonList.push(pokemon);
}


function getAll() {
  return pokemonList;
}

// addListItem function

function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function(event){ 
      console.log(addEventListener); //event Listener Added
      return showDetails(pokemon); // showDetails function added after event Listener.
    });
};

 // showDetails function added

function showDetails(pokemon){
    let showDetails = document.querySelector('pokemonList');    
    console.log(pokemonList);
};  

return {
    add: add,
    getAll: getAll, // (,) added 
    addListItem: addListItem, // addListItem added 
    showDetails: showDetails // showDetails added 
  };

})();
=======
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
>>>>>>> Stashed changes
