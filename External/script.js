const apiKey = "ccbbe741d8f9e6d24c21a0833eafd0b1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apiKey;
async function checkWeather(city) {
      const response = await fetch(`${apiUrl}&q=${city}`);
      const weather_icon = document.querySelector(".weatherLogo");
      if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
      } else {
            const data = await response.json();
            document.querySelector(".cityName").innerHTML = data.name;
            document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            if (data.weather[0].main == "Clouds") {
                  weather_icon.src = "./External/images/clouds.png";
            } else if (data.weather[0].main == "Clear") {
                  weather_icon.src = "./External/images/clear.png";
            } else if (data.weather[0].main == "Rain") {
                  weather_icon.src = "./External/images/rain.png";
            } else if (data.weather[0].main == "Drizzle") {
                  weather_icon.src = "./External/images/drizzle.png";
            } else if (data.weather[0].main == "Mist") {
                  weather_icon.src = "./External/images/mist.png";
            }
            document.querySelector(".error").style.display = "none";
            document.querySelector(".weather").style.display = "block";
      }
}
const search_btn = document.querySelector(".form .btn");
search_btn.addEventListener("click", (event) => {
      event.preventDefault();
      const search_box = document.querySelector(".form .inputBox");
      checkWeather(search_box.value);
});
