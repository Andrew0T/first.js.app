let pokemonRepository=function(){let t=[];function e(e){"object"==typeof e&&"detailsUrl"in e?t.push(e):console.log("pokemon details are not correct!")}function n(t){i(t).then((function(){!function(t){let e=$(".modal-title"),n=$(".modal-body");e.empty(),n.empty();let i=$("<h1>"+t.name+"</h1>"),o=$('<img class= "modal-img">');o.attr("src",t.imageUrl);let a=$("<p>Weight: "+t.weight+"</p>"),l=$("<p>Height: "+t.height+"</p>"),p=$("<p>Types: "+t.types+"</p>"),r=$("<p>Abilities: "+t.abilities+"</p>");e.append(i),n.append(o),n.append(l),n.append(a),n.append(p),n.append(r)}(t)}))}function i(t){let e=t.detailsUrl;return fetch(e).then((function(t){return t.json()})).then((function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.weight=e.weight,t.types=[];for(var n=0;n<e.types.length;n++)t.types.push(e.types[n].type.name);t.abilities=[];for(let n=0;n<e.abilities.length;n++)t.abilities.push(e.abilities[n].ability.name)})).catch((function(t){console.error(t)}))}return{add:e,getAll:function(){return t},addListItem:function(t){let e=document.querySelector(".list-group"),i=document.createElement("group-list-item"),o=document.createElement("button");o.innerHTML=t.name,o.setAttribute("data-toggle","modal"),o.setAttribute("data-target",".modal"),o.classList.add("btn","btn-primary","btn-block"),i.appendChild(o),e.appendChild(i),o.addEventListener("click",(function(){n(t)}))},showDetails:n,loadList:function(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=154").then((function(t){return t.json()})).then((function(t){t.results.forEach((function(t){e({name:t.name,detailsUrl:t.url})}))})).catch((function(t){console.error(t)}))},loadDetails:i}}();pokemonRepository.loadList().then((function(){pokemonRepository.getAll().forEach((function(t){pokemonRepository.addListItem(t)}))}));