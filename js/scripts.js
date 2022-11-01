let pokemonRepository = (function () {

  let pokemonList = []; // individual pokemons removed from array. the array now connected to pokeapi.co/api/v2/pokemon url

  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=154';//apiUrl function created

  // add the fetch Pokemon only when the criterion are met
  function add(pokemon) {
    if (typeof pokemon === 'object' && 'name' && 'detailsUrl' in pokemon) { //'detailsUrl' added to add()
    pokemonList.push(pokemon);
  } else {
    console.log('pokemon details are not correct!')
  }
}

  //returns the list of pokemon
  function getAll(pokemon) {
    return pokemonList;
  }

  // fetch Pokemon list from pokeapi.co/api/v2/pokemon/
  function loadList(item) {
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

  // creates a button for the individual pokemon from pokemon-list
  function addListItem(pokemon){
    let pokemonList = document.querySelector('.list-group');
    let listpokemon = document.createElement('group-list-item');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '.modal');
    button.classList.add('btn','btn-primary','btn-lg','btn-block');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function(event){
      showDetails(pokemon); // showDetails function added after event Listener.
    });
  }
  
  function showDetails(pokemon){
    loadDetails(pokemon).then(function(){
      showModal(pokemon);
    });
  }

  // loadDetails () added which loads items details from pokeapi.co/api/v2/pokemon/
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
      return response.json();
    })
      .then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = [];
        for (var i = 0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }
      item.abilities = [];
        for (var i = 0; i < details.abilities.length; i++) {
          item.abilities.push(details.abilities[i].ability.name);
        }
    }).catch(function (e) {
      console.error(e);
    });
  }

 function showModal(pokemon) {
    let modalTitle = $('.modal-title');
    let modalHeader = $('.modal-header');
    let modalBody = $('.modal-body');

    // // Clear all existing modal content
    modalTitle.empty();
    modalBody.empty();
  
    let nameElement = $('<h1>'+ pokemon.name + '</h1>');
    let imageElement = $('<img class="modal-img">');
    imageElement.attr('src', pokemon.imageUrl);
    let weightElement = $('<p>' + 'Weight: ' + pokemon.weight + '</p>'); 
    let heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>' );
    let typesElement = $('<p>' + 'Types: ' + pokemon.types + '</p>');
    let abilitiesElement = $('<p>' + 'Abilities: ' + pokemon.abilities + '</p>');    

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
    modalBody.append(abilitiesElement);
}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList, 
    loadDetails: loadDetails,
    showModal: showModal
}

})();

// LoadList() line added
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});