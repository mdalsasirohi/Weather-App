const apiKey = "api_key";

const searchBar = document.querySelector(".search_bar");
const searchButton = document.querySelector(".search");
const selectCity = document.querySelector(".select_city");
const weatherDetails = document.querySelector(".weather_details");
const backHome = document.querySelector(".home_button");

const city = document.querySelector(".city_name");
const temp = document.querySelector("h2");
const feelsLike = document.querySelector(".feels_like");
const min = document.querySelector(".min");
const max = document.querySelector(".max");
const briefCond = document.querySelector(".brief_condition");
const humidity = document.querySelector(".humidity");
const visibility = document.querySelector(".visibility");
const windSpeed = document.querySelector(".windspeed");
const sunset = document.querySelector(".sunset");
const sunrise = document.querySelector(".sunrise");
const img = document.querySelector("img");

let cityName;
let data;

function time(def) {
    let setTime = def;
    let setDate = new Date(setTime * 1000);
    let sunSet = setDate.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    return sunSet;
}

searchBar.addEventListener('input',(evt)=>{
    cityName = evt.target.value  
})
searchButton.addEventListener("click", async(event) => {
    event.preventDefault()
    selectCity.style.display = "none";
    weatherDetails.style.display = "flex";
    const base_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    let response = await fetch(base_URL);
    data = await response.json();
    console.log(data);
    img.src =  `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    city.innerText = data.name;
    temp.innerText = data.main.temp;
    feelsLike.innerText = `Feels like: ${data.main.feels_like}`;
    min.innerText = `Min: ${data.main.temp_min}`;
    max.innerText = `Max: ${data.main.temp_max}`;
    briefCond.innerText = data.weather[0].main;
    humidity.innerText = `Humidity: ${data.main.humidity}%`;
    visibility.innerText = `Visibility: ${data.visibility}m`;
    windSpeed.innerText = `Wind speed: ${data.wind.speed}m/s`;
    sunset.innerText = `Sunset: ${time(data.sys.sunset)}`;
    sunrise.innerText = `Sunrise: ${time(data.sys.sunrise)}`;
})
backHome.addEventListener("click", () => {
    weatherDetails.style.display = "none";
    selectCity.style.display = "flex";
})
