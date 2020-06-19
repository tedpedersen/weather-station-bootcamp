var getWeather = function(city) {
    // format the api url api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=fabf22bfb54443507c45e344ea64f584";
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };
  
  var userFormEl = document.querySelector("#searchForm");
  var nameInputEl = document.querySelector("#searchInput");
  
  var formSubmitHandler = function(event) {
    event.preventDefault();
    // get value from input element
    var cityname = nameInputEl.value.trim();
  
    if (username) {
      getWeather(cityname);
      nameInputEl.value = "";
    } else {
      alert("Please enter a city name.");
    }
    console.log(event);
  };
  
  userFormEl.addEventListener("submit", formSubmitHandler);