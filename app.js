const inputBox = document.querySelector("input[type='text']");
const addBtn = document.querySelector("button");
const cardImage = document.querySelector(".cardImage");
const dates = document.querySelector(".dates");
const cityName = document.querySelector(".cityName");
const temp = document.querySelector(".temp");
const weatherType = document.querySelector(".weatherType");
const maxTemp = document.querySelector(".maxTemp");
const minTemp = document.querySelector(".minTemp");
const humidityy = document.querySelector(".humidityy");
const pressuree = document.querySelector(".pressuree");

// Enter Button
addBtn.onclick = () => {
    const API_KEY = "b03117d42d54c29a55b51cf4bb72740e"; //API KEY from Open Weather
    let userData = inputBox.value; //Taking the input from user


    //Using fetch method to fetch the data from open weather API
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + userData + '&appid=' + API_KEY + '')

    //Covert data from string format to JSON format
    .then((res) => {
            return res.json()
        })
        //The whole data
        .then((data) => {
            console.log(data);

            //Current Date
            const date = new Date();
            dates.innerHTML = date.toDateString();

            //Name of City
            let nameOfCity = data['name'];
            cityName.innerHTML = nameOfCity;

            //Temp Value and convert in into Kelvin to Celsius
            let tempValue = data['main']['temp'];
            tempValue -= 273;
            temp.innerHTML = Math.floor(tempValue) + '&#176;<span class="celsius">C</span>';

            //Weather Type
            let typeOfWeather = data['weather'][0]['main'];
            weatherType.innerHTML = typeOfWeather;

            //Weather Icon
            // let iconWeather = document.createElement('img');
            // iconWeather.src = "http://openweathermap.org/img/wn/" + data['weather'][0]['icon'] + ".png";
            // weatherType.prepend(iconWeather);

            //Changing the background image basis on their weather type
            if (typeOfWeather == "Mist" || typeOfWeather == "Fog") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80')"
            } else if (typeOfWeather == "Clouds") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80')"
            } else if (typeOfWeather == "Clear") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1558418294-9da149757efe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60')"
            } else if (typeOfWeather == "Snow") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25vd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60')"
            } else if (typeOfWeather == "Dizzle" || typeOfWeather == "Sand") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')"
            } else if (typeOfWeather == "Thunderstorm" || typeOfWeather == "Tornado") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80')"
            } else if (typeOfWeather == "Haze" || typeOfWeather == "Smoke") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1447014421976-7fec21d26d86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
            } else if (typeOfWeather == "Rain") {
                cardImage.style.backgroundImage = "url('https://images.unsplash.com/photo-1438449805896-28a666819a20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
            }

            //Extra Weather details (Min Temperature)
            let minTemperature = data['main']['temp_min'];
            minTemperature -= 273;
            minTemp.innerHTML = Math.floor(minTemperature) + '&#176;C(Min Temp)';

            //Extra Weather details (Max Temperature)
            let maxTemperature = data['main']['temp_max'];
            maxTemperature -= 273;
            maxTemp.innerHTML = Math.floor(maxTemperature) + '&#176;C(Max Temp)';

            //Some More Extra Weather details (Humidity)
            let humidity = data['main']['humidity'];
            humidityy.innerHTML = humidity + '%(Humidity)';

            //Some More Extra Weather details (pressure)
            let pressure = data['main']['pressure'];
            pressuree.innerHTML = pressure + 'mb(Pressure)';

            //Empty Input box
            inputBox.value = "";
        })
        //To catch error if present and show
        .catch((err) => {
            console.log(err);
        });
}