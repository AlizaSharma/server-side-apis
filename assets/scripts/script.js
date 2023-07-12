// store references to html elements for search inputed in search button 
var searchInputEl = document.querySelector(".textVal");
var searchButtonEl = document.querySelector("#button-addon2");

// take input and plug it into api query 
var apiKey = "894a8632519c8ba9df1569e892b67fd0";

function getCurrentWeather(lat, lon){

}

function getLatLon(cityName){
    fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=5&appid=" + apiKey)
        .then(function(response){
          return response.json();  
        })
        .then(function(data){
           console.log(data)
           getCurrentWeather(data.lat,data.lon)
        })
}

searchButtonEl.addEventListener("click", function(){
   // grab content typed in search bar 
   console.log(searchInputEl.value)

   // query the geo coder api

   getLatLon(searchInputEl.value);


   // query the current weather api

})





