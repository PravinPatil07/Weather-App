var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
// apik = "63a90ae96d390ec37d6c125f5a86e1a";
function conversion(val)
{
    return(val - 273).toFixed(3);
}

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/205/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
        {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var temparature = data['main']['temp']
            var wndspeed = data['wind']['speed']

            city.innerHTML = `weather of <span>${nameval} <span>`
            temp.innerHTML = `tempreture: <span> ${conversion(temparature)} c</span>`
            description.innerHTML = `sky condition: <span>${descrip}<span>`
            wind.innerHTML = `wind speed: <span>${wndspeed} km/h<span>`
        })

        .catch(err => alert('you entered wrong city name'))
})