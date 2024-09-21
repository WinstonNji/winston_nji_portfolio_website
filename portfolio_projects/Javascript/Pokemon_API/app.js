const form = document.getElementById("form")
const img = document.getElementById("pokemonImage")
const btn = document.getElementById("submitBtn")
const pokemonType = document.getElementById("pokemonType")
const title = document.querySelector("h1")


form.addEventListener('submit',event => {
    event.preventDefault()

    let userInput = document.getElementById('userInput').value.trim().toLowerCase()  

    if(userInput){
        fetchPokemon(userInput)
    }else{
        title.textContent = "Please Enter a Pokemon Before Submitting"
    }
    document.getElementById('userInput').value = ""
})

function fetchPokemon(userInput){
    fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
        .then(response => 
                    { if(!response.ok){
                        throw new Error(`Couldn't find that Pokemon. Check Spelling`)
                    }
                        return response.json()
                    })
        .then(data => {
                // Getting and displaying the image
                let pokemonImage = data.sprites.front_default
                img.src = pokemonImage
                img.alt = data ? userInput : ""

                // Getting the pokemon type
                let type = data.types[0].type.name


                userInputClarity(type)
                pokemonType.textContent= `Type: ${textDisplayed}`
                
                title.textContent = `Pokemon: ${userInputClarity(userInput)}`
                changeBackGround(type)

        })
        .catch(error => {title.textContent = error})
}

let textDisplayed;
function userInputClarity(userInput){
    textDisplayed = userInput
    userClarity= textDisplayed = textDisplayed.slice(0,1).toUpperCase() + textDisplayed.slice(1).toLowerCase()
    return userClarity
}

function changeBackGround(type){
    const body = document.getElementById("body")
        setTimeout(() => {
                // Color Adjustement for buttons
                type === 'dark' ? btn.style.color = "white" : btn.style.color = "black"

                // Color Adjustment for title element
                type === 'dark' ? title.style.color = "white" : title.style.color = "black"

                // Setting background color based on Pokémon type
                type === "normal" ? body.style.backgroundColor = "lightgray" : "";
                type === "normal" ? btn.style.backgroundColor = "lightgray" : "";

                type === "fire" ? body.style.backgroundColor = "tomato" : "";
                type === "fire" ? btn.style.backgroundColor = "tomato" : "";

                type === "water" ? body.style.backgroundColor = "lightblue" : "";
                type === "water" ? btn.style.backgroundColor = "lightblue" : "";

                type === "grass" ? body.style.backgroundColor = "lightgreen" : "";
                type === "grass" ? btn.style.backgroundColor = "lightgreen" : "";

                type === "electric" ? body.style.backgroundColor = "yellow" : "";
                type === "electric" ? btn.style.backgroundColor = "yellow" : "";

                type === "ice" ? body.style.backgroundColor = "lightcyan" : "";
                type === "ice" ? btn.style.backgroundColor = "lightcyan" : "";

                type === "fighting" ? body.style.backgroundColor = "brown" : "";
                type === "fighting" ? btn.style.backgroundColor = "brown" : "";

                type === "poison" ? body.style.backgroundColor = "purple" : "";
                type === "poison" ? btn.style.backgroundColor = "purple" : "";

                type === "ground" ? body.style.backgroundColor = "burlywood" : "";
                type === "ground" ? btn.style.backgroundColor = "burlywood" : "";

                type === "flying" ? body.style.backgroundColor = "skyblue" : "";
                type === "flying" ? btn.style.backgroundColor = "skyblue" : "";

                type === "psychic" ? body.style.backgroundColor = "hotpink" : "";
                type === "psychic" ? btn.style.backgroundColor = "hotpink" : "";

                type === "bug" ? body.style.backgroundColor = "greenyellow" : "";
                type === "bug" ? btn.style.backgroundColor = "greenyellow" : "";

                type === "rock" ? body.style.backgroundColor = "saddlebrown" : "";
                type === "rock" ? btn.style.backgroundColor = "saddlebrown" : "";

                type === "ghost" ? body.style.backgroundColor = "mediumpurple" : "";
                type === "ghost" ? btn.style.backgroundColor = "mediumpurple" : "";

                type === "dragon" ? body.style.backgroundColor = "slateblue" : "";
                type === "dragon" ? btn.style.backgroundColor = "slateblue" : "";

                type === "dark" ? body.style.backgroundColor = "black" : "";
                type === "dark" ? btn.style.backgroundColor = "black" : "";

                type === "steel" ? body.style.backgroundColor = "silver" : "";
                type === "steel" ? btn.style.backgroundColor = "silver" : "";

                type === "fairy" ? body.style.backgroundColor = "lightpink" : "";
                type === "fairy" ? btn.style.backgroundColor = "lightpink" : "";

                        }, 300)
}

// // "Eevee",     // Normal
// "Charmander", // Fire
// "Squirtle",  // Water
// "Bulbasaur", // Grass
// "Pikachu",   // Electric
// "Snorunt",   // Ice
// "Machop",    // Fighting
// "Ekans",     // Poison
// "Sandshrew", // Ground
// "Pidgey",    // Flying
// "Abra",      // Psychic
// "Caterpie",  // Bug
// "Geodude",   // Rock
// "Gastly",    // Ghost
// "Dratini",   // Dragon
// "Murkrow",   // Dark
// "Magnemite", // Steel
// // "Clefairy"   // Fairy



