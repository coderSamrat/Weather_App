const apiKey = "ccbbe741d8f9e6d24c21a0833eafd0b1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apiKey;
async function checkWeather(city) {
      try {
            const response = await fetch(`${apiUrl}&q=${city}`);
            if (!response.ok) {
                  throw new Error(`Failed to fetch weather data for ${city}`);
            }
            const data = await response.json();
            displayWeather(data);
      } catch (error) {
            handleErrors();
            console.error(error.message);
      }
}
function displayWeather(data) {
      const weather_icon = document.querySelector(".weatherLogo");
      document.querySelector(".cityName").innerHTML = data.name;
      document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
      switch (data.weather[0].main) {
            case "Clouds":
                  weather_icon.src = "./External/images/clouds.png";
                  break;
            case "Clear":
                  weather_icon.src = "./External/images/clear.png";
                  break;
            case "Rain":
                  weather_icon.src = "./External/images/rain.png";
                  break;
            case "Drizzle":
                  weather_icon.src = "./External/images/drizzle.png";
                  break;
            case "Mist":
                  weather_icon.src = "./External/images/mist.png";
                  break;
            default:
                  weather_icon.src = ""; 
      }
      document.querySelector(".error").style.display = "none";
      document.querySelector(".weather").style.display = "block";
}
function handleErrors() {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
}
const search_btn = document.querySelector(".form .btn");
search_btn.addEventListener("click", (event) => {
      event.preventDefault();
      const search_box = document.querySelector(".form .inputBox");
      checkWeather(search_box.value);
});
