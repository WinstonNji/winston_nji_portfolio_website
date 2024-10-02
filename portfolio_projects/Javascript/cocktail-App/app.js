const apiKey = 'RzLFvdPiQIDuGXWIGfdndA==DVTXJS6BsPy3Nc8c';
const form = document.querySelector('form')


form.addEventListener('submit', event => {
    event.preventDefault()
    const userInput = document.getElementById('cockTail').value.trim()
    let index = 1

    if(userInput === "" || !isNaN(userInput)){
        alert("Enter a valid cocktail or ingredient")
    }else{
        fetch(`https://api.api-ninjas.com/v1/cocktail?name=${userInput}`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey
                }
            })
        .then(response => {
                if(!response.ok){
                    throw new Error (`Couldn't fetch Data`)
                }else{
                return response.json()
                }
            })
        .then(data => {

            let display = "" 
            
            data.forEach(drink => {
                const cocktailName = drink.name
                const instructions = drink.instructions
                const ingredientsList = displayIngredients(drink.ingredients);
                
                display += `
                    <h3 id="cocktailName">${index ++}. ${cocktailName}</h3>
                    <ul id="ingredient">
                        ${ingredientsList}
                    </ul>
                    <p id="Ingredients">${instructions}</p>
                    </div>
                `
                document.getElementById("display").innerHTML = display
            })
        })
        .catch(error => console.error(error))
        } 
    }
)

function displayIngredients(ingredients){
    console.log(ingredients)
    let ingredientItems = "";
    ingredients.forEach(ingredient => {
        ingredientItems += `<li>${ingredient}</li>`;
    });
    return ingredientItems;
}


