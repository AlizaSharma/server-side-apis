// store references to html elements for search inputed in search button 
var searchInputEl = document.querySelector(".textVal");
var searchButtonEl = document.querySelector("#button-addon2");
var tempEl =document.querySelector(".card-text");
var humidityEl =document.querySelector(".card-text-two");
var windEl =document.querySelector(".card-text-three");
var cityEl =document.querySelector(".cardTodayCityName");
var dateEl =document.querySelector(".cardTodayDate");

// take input and plug it into api query 
var apiKey = "894a8632519c8ba9df1569e892b67fd0";

function getCurrentWeather(lat, lon){

}

async function getLatLon(cityName){
    await fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=" + apiKey)
        .then(function(response){
          return response.json();  
        })
        .then(function(data){
           
           getCurrentWeather(data[0].lat,data[0].lon)
        })
    
}

async function getCurrentWeather(lat,lon){
    await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&units=imperial")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
      console.log(data)  
      var cityName = data.city.name
      console.log(cityName)
      var temp = data.list[0].main.temp
      var windSpeed = data.list[0].wind.speed
      var humidity = data.list[0].main.humidity
      var icon = data.list[0].weather[0].icon
      var date = data.list[0].dt_txt

      
    
      var weatherImg = document.querySelector(".icon-box");
      weatherImg.innerHTML = "<img" + " src=" + "http://openweathermap.org/img/wn/" + icon + "@2x.png>";

      dateEl.innerHTML = date 

      
    tempEl.innerHTML = temp + " \xB0" + "F";

    humidityEl.innerHTML = humidity + "%";

    windEl.innerHTML = windSpeed + " mph";

    cityEl.innerHTML = cityName;

     
    })
    .catch(function(error){
        
    })

}


searchButtonEl.addEventListener("click", function(){
   // grab content typed in search bar 
   console.log(searchInputEl.value)

   // query the geo coder api

   getLatLon(searchInputEl.value);


   // query the current weather api
   getCurrentWeather(searchInputEl.value)

})









