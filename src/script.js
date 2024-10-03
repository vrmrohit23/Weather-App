
import config from "./config";

let displayweather = async (wheather) => {

  //
  //top temp content starts here
  //
  let tempcont = document.getElementById('tempcont')
  tempcont.classList.add('tempcont');
  let tempstore = document.getElementById('tempanimate')
  let color;
  let temp = Math.floor(wheather.main.temp);
  let faren = Math.floor(temp * 9 / 5 + 32);
  if (temp >= 30) {
    color = "#ffcd0a"
  }
  else if (temp < 30 && temp > 10) {
    color = "#7ed2f6"
  }
  else {
    color = "#13b2f6"
  }
  if (tempstore.firstElementChild != null) {
    tempstore.classList.add('upanimate')
    tempstore.classList.remove('downanimate')
    setTimeout(() => {
      tempstore.innerHTML = `<span>${temp}&#176;<small style = "color:${color}">C</small></span>&nbsp;&nbsp;&nbsp; <span><small>${faren}&#176</small><small style = "color:${color}">F</small></span><div style = "display:flex; justify-content:center;" class = "font20px"><span>Max: ${wheather.main.temp_max}C&nbsp;&nbsp;/&nbsp;&nbsp;Min: ${wheather.main.temp_min}C</span></div>`
      tempstore.classList.add('downanimate')
    }, 2000)
  }
  else {
    tempstore.innerHTML = `<span>${temp}&#176;<small style = "color:${color}">C</small></span>&nbsp;&nbsp;&nbsp; <span><small>${faren}&#176</small><small style = "color:${color}">F</small></span><div style = "display:flex; justify-content:center;" class = "font20px"><span>Max: ${wheather.main.temp_max}C&nbsp;&nbsp;/&nbsp;&nbsp;Min: ${wheather.main.temp_min}C</span></div>`
    setTimeout(() => {
      tempstore.classList.add('downanimate')
    }, 2000)
  }
  //
  //UV content starts here
  //
  document.getElementById('uvandfeelmaincont').classList.add('uvandfeelcont');
  let uvcont = document.getElementById('uv')
  let uv = document.getElementById('uvanimate');
  uvcont.classList.add('tempcont');
  uvcont.classList.add('contproperties');
  let weathercondition = wheather.weather[0].main;
  let weatherimage;
  let realweathercondition = wheather.weather[0].description;

  console.log(weathercondition)
  if (weathercondition === "Rain") {
    weatherimage = "small icons/rainy-day.png"

  }
  else if (weathercondition === "Snow") {
    weatherimage = "small icons/snowy.png"

  }
  else if (weathercondition === "Clear") {
    weatherimage = "small icons/sun.png"

  }
  else if (weathercondition === "Snow") {
    weatherimage = "small icons/snowy.png"

  }
  else if (weathercondition === "Haze") {
    weatherimage = "small icons/haze.png"
  }
  else if (weathercondition === "Smoke") {
    weatherimage = "small icons/smoke.png"
  }
  else {
    weatherimage = "small icons/clouds.png";
  }
  console.log(weatherimage)
  if (uv.firstElementChild != null) {
    uv.classList.add('upanimate')
    uv.classList.remove('downanimate')
    setTimeout(() => {
      uv.innerHTML = `<div style = "text-align:center;"><div style = "display:flex; justify-content:center;"><img src = "${weatherimage}" class = "weatherconditionimage"></div><span 
        style=" text-decoration:underline;">${realweathercondition}</span><div style = "display:flex; justify-content: center;">  
          </div>  </div>`
      uv.classList.add('downanimate')
    }, 2000)
  }
  else {
    uv.innerHTML = `<div style = "text-align:center;"><div style = "display:flex; justify-content:center;"><img src = "${weatherimage}" class = "weatherconditionimage"></div><span 
    style=" text-decoration:underline;">${realweathercondition}</span><div style = "display:flex; justify-content: center;">  
      </div>  </div>`
    setTimeout(() => {
      uv.classList.add('downanimate')
    }, 2000)
  }
  //
  // feel temp starts here
  //
  let feeltempcont = document.getElementById("feeltemp")
  feeltempcont.classList.add("tempcont");
  feeltempcont.classList.add("contproperties");
  let feeltemp = document.getElementById("feeltempanimate")
  let realtemp = Math.floor(wheather.main.feels_like)
  let feeltempwords;
  if (realtemp > temp) {
    feeltempwords = 'Warmer'
  }
  else {
    feeltempwords = 'Cooler'
  }
  if (feeltemp.firstElementChild !== null) {
    feeltemp.classList.add('upanimate')
    feeltemp.classList.remove('downanimate')

    setTimeout(() => {
      feeltemp.innerHTML = `<div><span class = "font20px">feels like</span></div>
       <span class = "font50px">${realtemp}&#176;<small style = "color:${color}">C</small></span><div>${feeltempwords}</div>`
      feeltemp.classList.add('downanimate')
    }, 2000)
  }
  else {
    feeltemp.innerHTML = `<div><span class = "font20px">feels like</span></div>
     <span class = "font50px">${realtemp}&#176;<small style = "color:${color}">C</small></span><div>${feeltempwords}</div>`

    setTimeout(() => {
      feeltemp.classList.add('downanimate')
    }, 2000)
  }
  // //
  // // humidity starts here
  // //
  let humiditycont = document.getElementById("humidity")
  humiditycont.classList.add("tempcont");
  humiditycont.classList.add("contproperties");
  let humidity = document.getElementById('humidityanimate')
  if (humidity.firstElementChild !== null) {
    humidity.classList.add('upanimate')
    humidity.classList.remove('downanimate')
    setTimeout(() => {
      humidity.innerHTML = `<div style = "display:flex; justify-content:center;"><img src = "small icons/humidity white.png" class =     
        "humidityimage"></div><span style = "text-decoration:underline;">Humidity</span> <div style="height:2vh;"></div><div style = "display:flex; justify-content:center;">           <span class = "font50px">${wheather.main.humidity}%<span></div>`
      humidity.classList.add('downanimate')
    }, 2000)
  }
  else {
    humidity.innerHTML = `<div style = "display:flex; justify-content:center;"><img src = "small icons/humidity white.png" class =     
    "humidityimage"></div><span style = "text-decoration:underline;">Humidity</span> <div style="height:2vh;"></div><div style = "display:flex; justify-content:center;">           <span class = "font50px">${wheather.main.humidity}%<span></div>`
    setTimeout(() => {
      humidity.classList.add('downanimate')
    }, 2000)
  }
  //
  // air pressure starts here
  //
  document.getElementById('ap,wind,visibilitymaincont').classList.add('uvandfeelcont')
  document.getElementById('ap,wind,visibilitymaincont').style.marginTop = '1vh';
  let airpressurecont = document.getElementById("airpressure")
  airpressurecont.classList.add("tempcont");
  airpressurecont.classList.add("contproperties");
  let airpressure = document.getElementById('airpressureanimate')
  if (airpressure.firstElementChild !== null) {
    airpressure.classList.add('upanimate')
    airpressure.classList.remove('downanimate')
    setTimeout(() => {
      airpressure.innerHTML = `<div style = "display:flex; justify-content:center;"><img src = "small icons/airpressure.png" class =     
      "humidityimage"></div><span class = "font20px">Air Pressure</span> <div style="height:2vh;"></div><div style = "display:flex; justify-
       content:center;"><span class = "font40px">${wheather.main.pressure}</span class = "font20px"><span>pa</span></div>`
      airpressure.classList.add('downanimate')
    }, 2000)

  }
  else {
    airpressure.innerHTML = `<div style = "display:flex; justify-content:center;"><img src = "small icons/airpressure.png" class =     
  "humidityimage"></div><span class = "font20px">Air Pressure</span> <div style="height:2vh;"></div><div style = "display:flex; justify-
   content:center;"><span class = "font40px">${wheather.main.pressure}</span><span class = "font20px">pa</span></div>`
    setTimeout(() => {
      airpressure.classList.add('downanimate');
    }, 2000);
  }
  //
  // wind section starts here
  //
  let windcont = document.getElementById("wind")
  windcont.classList.add("tempcont");
  windcont.classList.add("contproperties");
  let wind = document.getElementById('windanimate')
  let winddirection;
  let winddirectionimage;
  let winddeg = wheather.wind.deg;
  if (winddeg >= 350 || winddeg <= 10) {
    winddirection = 'N';
    winddirectionimage = 'direction icons/north.png';
  }
  else if (winddeg > 10 && winddeg < 80) {
    winddirection = 'NE';
    winddirectionimage = 'direction icons/northeast.png';
  }
  else if (winddeg >= 80 && winddeg <= 100) {
    winddirection = 'E';
    winddirectionimage = 'direction icons/east.png';
  }
  else if (winddeg > 100 && winddeg < 170) {
    winddirection = 'SE';
    winddirectionimage = 'direction icons/southeast.png';
  }
  else if (winddeg >= 170 && winddeg <= 190) {
    winddirection = 'S';
    winddirectionimage = 'direction icons/south.png';
  }
  else if (winddeg > 190 && winddeg < 260) {
    winddirection = 'SW';
    winddirectionimage = 'direction icons/southwest.png';
  }
  else if (winddeg >= 260 && winddeg <= 280) {
    winddirection = 'W';
    winddirectionimage = 'direction icons/west.png';
  }
  else {
    winddirection = 'NW';
    winddirectionimage = 'direction icons/northwest.png';
  }

  if (wind.firstElementChild !== null) {
    wind.classList.add('upanimate')
    wind.classList.remove('downanimate')
    setTimeout(() => {
      wind.innerHTML = `<div style = "text-align:center;"><span style = "text-decoration:underline;">Winds</span></div><img src ="${winddirectionimage}" class = "humidityimage" style = "position:relative; top:2vh;"><span style = >${winddirection}</span> <div style="height:2vh;"></div><div style = "text-align:center;"><span>${wheather.wind.speed}m/s</span></div>`
      wind.classList.add('downanimate')
    }, 2000)

  }
  else {
    wind.innerHTML = `<div style = "text-align:center;"><span style = "text-decoration:underline;">Winds</span></div><img src ="${winddirectionimage}" class = "humidityimage" style = "position:relative; top:2vh;"><span style = >${winddirection}</span> <div style="height:2vh;"></div><div style = "text-align:center;"><span>${wheather.wind.speed}m/s</span></div>`
    setTimeout(() => {
      wind.classList.add('downanimate');
    }, 2000);
  }


}

async function getweather(response) {
  let lat = response[0].lat
  let lon = response[0].lon
  let weatherresponseobject = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config}&units=metric`);
  let weatherresponse = await weatherresponseobject.json()
 


 
  displayweather(weatherresponse)
  datalist.innerHTML = "";
}

let locationsget = (response) => {
  let l = response.length
  for (let i = 0; i < l; i++) {
    let filler;
    if (response[i].state != null) {
      filler = response[i].name + "," + response[i].state + "," + response[i].country;
    }
    else {
      filler = response[i].name + "," + response[i].country;
    }
    datalist.innerHTML += `<option value = "${filler}">`
  }

}


let errorfunction = () => {

  let tempstore = document.getElementById('tempanimate')
  tempstore.classList.add('downanimate')
  tempstore.innerHTML = `<div style = "display:flex; justify-content:center;"><img src = "sorry error.png" class = "errorimage"></div><span style = "font-size:30px;">Sorry,we couldn't find the location<span>`
  document.getElementById('uvanimate').innerHTML = "<div></div";
  document.getElementById("feeltempanimate").innerHTML = "<div></div";
  document.getElementById('humidityanimate').innerHTML = "<div></div>";
  document.getElementById('airpressureanimate').innerHTML = "<div></div>";
  document.getElementById('windanimate').innerHTML = "<div></div>";
}

let datalist = document.getElementById('locations')
let arr;
let btn = document.getElementById('find')
btn.addEventListener('click', async () => {
  let val = document.getElementById('search').value
  if (val === "") {
    alert("Please enter a place name");
  }
  else {
    let loader = document.getElementById('loader')
    document.getElementsByClassName('parentbox')[0].classList.add('parentboxposition')
    // for creating a loader animation
    loader.classList.add('loader')
    // calling api to get longitude and latitude
    console.log(config)
    let responseobject = fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${val}&limit=10&appid=${config}`);
    responseobject.then((response) => {
      return response.json()

    })
      .then((wheather) => {
        if (wheather.length === 0) {
          // errorfunction
          throw new Error('Something went wrong please try again')
        }
        loader.classList.remove('loader');
        if (wheather.length > 1) {
          if (datalist.firstElementChild != null) {
            getweather(wheather).catch((error) => {
            })
          }
          else {
            locationsget(wheather)
          }
        }
        else {
          getweather(wheather).catch((error) => {
            console.log(error)
          })
        }
        // divupdate(wheather)
      })
      .catch((error) => {
        loader.classList.remove('loader');
        errorfunction()
      })
  }

})
