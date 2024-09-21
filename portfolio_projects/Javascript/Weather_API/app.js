const form = document.querySelector("form")
const display = document.querySelector("#displayTemp")
const displayHumidity = document.querySelector("#humidity")
const wSpeed = document.querySelector("#windSpeed")
const displayContainer = document.querySelector(".displayContainer")

let cityName = document.getElementById("city")
const imageAPI_KEY= "1cQhIDWGFya2ZrvuPJ02Iss4eUmeLFW1qx8fHH2TJXYeSV7sqlDzOvJA"
const API_key = "e0e272178c56e56a4ff1b32b1206f80e";

form.addEventListener("submit", event => {
    event.preventDefault()

    const userInput = document.getElementById("userInput").value.trim()

    document.querySelector(".displayContainer").style.display = "block"

    if(userInput){
        displayContainer.style.display = "none"
        fetchData(userInput)
        document.querySelector("h1").innerHTML = `Weather App`
    }else{
        handleError()
    } 

})

function handleError(error){
    if(!error){
        document.querySelector("h1").innerHTML = `Please Enter A City` 
    }else{
        document.querySelector("h1").innerHTML = error
    }
}

function fetchCityImg(city){
    fetch(`https://api.pexels.com/v1/search?query=${city}&per_page=2`,
            {headers: {Authorization: imageAPI_KEY}}
        ).then(response => {
                                if(!response.ok){
                                    throw new Error("Couldn't Find Image For This City")
                                }else{
                                    return response.json()
                                }
                                })
        .then(data => { 
                            const bcgImg = data.photos[0].src.original

                            document.body.style.backgroundImage = `url(${bcgImg})`

                            console.log(data)
                            console.log(city)
        })

}

function fetchData(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Couldn't Find This City. Check Spelling");
            } else {
                return response.json();
            }
        })
        .then(data => {

            fetchCityImg(city)

            cityName.textContent = `City: ${data.name}, ${data.sys.country}`;

            display.textContent = `Temperature: ${covertToCelsius(data.main.temp)} C`;

            humidityChecker(data.main.humidity);

            windSpeedChecker(data.wind.speed);

            updateWeatherEmoji(data.weather[0].main);

            displayContainer.style.display = "block"
        })
        .catch(error => {handleError(error)});
}


function covertToCelsius(temperature){
    let Kelvin;
    Kelvin = Number(temperature)
    return celsius = (Kelvin - 273.15).toFixed(2)
}

function humidityChecker(humidity){
    humidity > 30 && humidity < 50 ? displayHumidity.textContent = `Humidity: Normal`:""

    humidity > 50 && humidity < 60 ? displayHumidity.textContent = `Humidity: Mildly Humid`:""

    humidity > 60 ? displayHumidity.textContent = `Humidity: Very Humid`:""

    return humidity
}

function windSpeedChecker(windSpeed){
    windSpeed > 0 && windSpeed < 9 ? wSpeed.textContent = `Wind Speed: ${windSpeed} mp/h, Light Breeze` : "";

    windSpeed > 9 && windSpeed < 18 ? wSpeed.textContent = `Wind Speed: ${windSpeed} mp/h, Mildly Windy` : "";

    windSpeed > 18 && windSpeed < 31 ? wSpeed.textContent = `Wind Speed: ${windSpeed} mp/h, Windy` : "";

    windSpeed > 31 && windSpeed < 47 ? wSpeed.textContent = `Wind Speed: ${windSpeed} mp/h, Very Windy` : "";

    windSpeed > 47 ? wSpeed.textContent = `Wind Speed: ${windSpeed} mp/h, Very Very Windy` : "";

    return windSpeed

}

function updateWeatherEmoji(weatherMain) {
    const emoji = getWeatherEmoji(weatherMain);
    document.getElementById('weatherEmoji').innerText = emoji;
}

function getWeatherEmoji(weather) {
    return weather.toLowerCase() === 'clear' ? '☀️' :
           weather.toLowerCase() === 'clouds' ? '☁️' :
           weather.toLowerCase() === 'rain' ? '🌧️' :
           weather.toLowerCase() === 'drizzle' ? '🌦️' :
           weather.toLowerCase() === 'thunderstorm' ? '⛈️' :
           weather.toLowerCase() === 'snow' ? '❄️' :
           ['mist', 'fog', 'haze'].includes(weather.toLowerCase()) ? '🌫️' :
           weather.toLowerCase() === 'smoke' ? '💨' :
           ['dust', 'sand'].includes(weather.toLowerCase()) ? '🏜️' :
           weather.toLowerCase() === 'ash' ? '🌋' :
           weather.toLowerCase() === 'squall' ? '💨' :
           weather.toLowerCase() === 'tornado' ? '🌪️' : '❓';
}






