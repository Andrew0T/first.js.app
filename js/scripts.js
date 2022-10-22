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

  // creates a button for the individual pokemon from pokemon-list
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

  // showDetails() function changed to load details from loadDetails()
  // change from console.log to showModal

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
    }).catch(function (e) {
      console.error(e);
    });
  }

 function showModal(pokemon) {
    let modalContainer = document.querySelector('#modal-container');
    
    let modal = document.createElement('div');
    modal.classList.add('modal');
    
    // Clear all existing modal content
    modalContainer.innerHTML = '';
  
    // Add the new modal content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);
  
    let nameElement = document.createElement('h1');
    nameElement.innerText = pokemon.name;

    let weightElement = document.createElement('p');
    weightElement.innerText = 'Weight: ' + pokemon.weight; 

    let heightElement = document.createElement('p');
    heightElement.innerText = 'Height: ' + pokemon.height;

    let imageElement = document.createElement('img');
    imageElement.setAttribute('src', pokemon.imageUrl);
    imageElement.setAttribute('width', '128');
    imageElement.setAttribute('height', '128');
  
    modal.appendChild(closeButtonElement);
    modal.appendChild(nameElement);
    modal.appendChild(imageElement);
    modal.appendChild(heightElement);
    modal.appendChild(weightElement);
    modalContainer.appendChild(modal);
    modalContainer.classList.add('is-visible');
    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
    }
  });
}

function hideModal(pokemon) {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();  
  }
});

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    LoadList: LoadList, // LoadList added
    loadDetails: loadDetails, // loadDetails Added
    showModal : showModal, //showModal added
    hideModal: hideModal // hideModal added

}

})();

// LoadList() line added
pokemonRepository.LoadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
