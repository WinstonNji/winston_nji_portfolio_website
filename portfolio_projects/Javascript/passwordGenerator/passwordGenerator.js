const includeNumbers = document.getElementById('Numbers');
const includeSymbols = document.getElementById('Symbols');
const includeLowerCase = document.getElementById('lowerCase');
const includeUpperCase = document.getElementById('upperCase');
const form = document.getElementById('passwordForm');
const display = document.getElementById('display')

const numbers = `1234567890`;
const symbols = `!@#$%&_-`;
const lowerCase = `abcdefghijklmnopqrstuvwxyz`
const upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;


form.addEventListener('submit', (event)=> {

    event.preventDefault()

    let passwordLength= document.getElementById('length').value.trim()

    if(!includeLowerCase.checked && !includeUpperCase.checked && !includeNumbers.checked && !includeSymbols.checked){
        display.textContent = `Please check at-least one box`
    }
    else if(passwordLength === '' || isNaN(passwordLength)){
        display.textContent = 'Enter a valid Number'
    }
    else if(passwordLength < 6){
        display.textContent = 'Password Length needs to be greater than 6'
    } else{
        let allowedCharacters = '';
        let password = '';
    
       
        allowedCharacters += includeNumbers.checked ? numbers :"";
        allowedCharacters += includeSymbols.checked ? symbols : "";
        allowedCharacters += includeLowerCase.checked ? lowerCase : "";
        allowedCharacters += includeUpperCase.checked ? upperCase : ""
    
        for(let i = 0; i < passwordLength; i++){
            let randomIndex = Math.floor(Math.random()* allowedCharacters.length)
    
            password += allowedCharacters[randomIndex]
            
           
            console.log(`Random ${randomIndex}`)
            console.log(password)
    
            display.textContent = password
        }
    }

  
    
})

