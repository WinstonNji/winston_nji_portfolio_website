const form = document.querySelector('form')
const container = document.querySelector('.container')
const wordnAudio = document.querySelector('.wordnAudio')

 


form.addEventListener('submit',event => {
    event.preventDefault()

    let display ="";

    const userInput = document.getElementById('userInput').value.trim()


    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
    .then(response => {
        if(!response.ok){
            throw new Error ("Couldn't Find This Word")
        }else{
            return response.json()
        }
    }).then(data => {
        
        const word = data[0].word
        const meanings = data[0].meanings
        const phonetics = data[0].phonetics[0].audio
        console.log(meanings)


        display += `    <div class="wordnAudio">
                            <h2 id="word">${word}</h2>
                            <button onclick="playAudio('${phonetics}')">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="orange"><path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z"/></svg>
                            </button>  
                        </div>
                    `

        let displaypartOfSpeech = new Set()
        
        meanings.forEach(meaning => {
            const definition = meaning.definitions[0].definition
            const example = meaning.definitions[0].example
            const partOfSpeech = meaning.partOfSpeech

            if(!displaypartOfSpeech.has(partOfSpeech)){
                displaypartOfSpeech.add(partOfSpeech)
            

                display += ` 
                                <div class="noun">
                                    <h4>${partOfSpeech}</h4>
                                    <p>${definition}</p>
                                </div>
                            `
                    }

                    if(example){
                        display += `<div class="example">
                                        <p style="font-weight: 600; text-decoration: underline; padding-left: 0;" >Example:</p>
                                        <p>${example}</p>
                                    </div>`
        }
            container.innerHTML = display 
        })
    })
})

function playAudio(phonetics){
    if(phonetics){
        const audio = new Audio(phonetics)
        audio.play()
    }else{
        alert(`Sound not available for this word.`)
    }
} 

