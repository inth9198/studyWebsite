const API_KEY = "381b1e2a32f1418a0d31c617b10295d7";

function onGeoOk(position)
{
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log(lat,long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`
    fetch(url).then(Response => Response.json()).then(data => 
    {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}'C`;
        city.innerText = data.name;
        console.log(data.name, data.weather[0].main);
    });
}

function onGeoError()
{
    alert("Can't find you. No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
