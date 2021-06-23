// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

let container = document.querySelector('#container');

for (let i=1; i<=898 ; i++) {
    let pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    let newImg = document.createElement('img');  
    let pokeNum = document.createElement('span');
    
    container.appendChild(pokemon);
    
    pokemon.appendChild(newImg);
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`; 

    pokemon.appendChild(pokeNum);
    pokeNum.textContent = `#${i}`;
}

