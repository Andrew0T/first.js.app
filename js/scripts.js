let pokemonRepository = (function () {

  let pokemonList = []; // individual pokemons removed from array. the array now connected to pokeapi.co/api/v2/pokemon url

  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=1154';//apiUrl function created

  function add(pokemon) {
    if (typeof pokemon === 'object' && 'name' && 'detailsUrl' in pokemon); //'detailsUrl' added to add()
    pokemonList.push(pokemon);
  }

  //returns complet pokemon list

  function getAll(pokemon) {
    return pokemonList;
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function(event){
      showDetails(pokemon); // showDetails function added after event Listener.
    });
  }

  // showDetails function changed to import details from loadDetails()

  function showDetails(pokemon){
    loadDetails(pokemon).then(function(){
      console.log(pokemon);
    });
  }

  // LoadList () added which loads items from pokeapi.co/api/v2/pokemon/
  function LoadList(item) {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  // loadDetails () added which loads items details from pokeapi.co/api/v2/pokemon/
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    LoadList: LoadList, // LoadList added
    loadDetails: loadDetails// loadDetails Added
  }

})();

// LoadList() line added
pokemonRepository.LoadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
