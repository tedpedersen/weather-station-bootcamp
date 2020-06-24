var userFormEl = document.querySelector("#searchForm");
var nameInputEl = document.querySelector("#searchInput");

var getWeather = function(cityname) {
  // format the api url: api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
  var apiUrlToday = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=fabf22bfb54443507c45e344ea64f584";

  // today's requests
  fetch(apiUrlToday).then(function(response) {
  response.json().then(function(today) {
    //refs api
    var now = moment();
    var todaylat = today.coord.lat;
    var todaylon = today.coord.lon;
    var nowis = now.format("MMM, DD, YYYY");
    var city = today.name;
    var cond = today.weather[0].description;
    var temp = today.main.temp;
    var theiconcode = today.weather[0].icon;
    var icon = "http://openweathermap.org/img/w/" + theiconcode + ".png";
    var hum = today.main.humidity;
    var wind = today.wind.speed;
    var uv = "";
    //buid the card for today
    var todayCard = `<div class="card animated fadeIn">
      <div class="card-body" id="maincard">
        <h2 class="upper">${city} <span class="small date">${nowis}</span> <img id="wicon" src="${icon}" alt="Weather icon"> <span class="small upper">${cond}</span></h2>
        <p>Temp: <span>${temp}</span> F&deg;</p>
        <p>Humidity: <span>${hum}</span>%</p>
        <p>Wind Speed: <span>${wind}</span> MPH</p>
        <p>UV Index: <span class="badge" id="uv">${uv}</span></p>
      </div>
    </div>
    <h4>5 Day Forecast for <span class="upper">${city}</span></h4>`
    $("#main").html("");
    $("#main").append(todayCard);
  
    //5 day request
  var apiUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + todaylat + "&lon=" +todaylon + "&exclude=minutely,hourly&units=imperial&appid=fabf22bfb54443507c45e344ea64f584";
  fetch(apiUrl2).then(function(response) {
    response.json().then(function(forecast) {
      if(cityname){
      // clear the input
      nameInputEl.value = "";
      // refs to api
      var thewind = forecast.daily[1].wind_speed;
      var thehum = forecast.daily[1].humidity;
      var thetemp = forecast.daily[1].temp.max;
      var thecond = forecast.daily[1].weather[0].description;
      var iconcode = forecast.daily[1].weather[0].icon
      var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
      //date gives back unix time stamp, so convert to human readable
      var thedateis = new Date(forecast.daily[1].dt * 1000);
      var mdate = moment(thedateis);
      var thedate = mdate.format("MMM, DD, YYYY");
      var thewind1 = forecast.daily[2].wind_speed;
      var thehum1 = forecast.daily[2].humidity;
      var thetemp1 = forecast.daily[2].temp.max;
      var thecond1 = forecast.daily[2].weather[0].description;
      var iconcode1 = forecast.daily[2].weather[0].icon;
      var iconurl1 = "http://openweathermap.org/img/w/" + iconcode1 + ".png";
      var thedateis1 = new Date(forecast.daily[2].dt * 1000);
      var mdate1 = moment(thedateis1);
      var thedate1 = mdate1.format("MMM, DD, YYYY");
      var thewind2 = forecast.daily[3].wind_speed;
      var thehum2 = forecast.daily[3].humidity;
      var thetemp2 = forecast.daily[3].temp.max;
      var thecond2 = forecast.daily[3].weather[0].description;
      var iconcode2 = forecast.daily[3].weather[0].icon
      var iconurl2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png";
      var thedateis2 = new Date(forecast.daily[3].dt * 1000);
      var mdate2 = moment(thedateis2);
      var thedate2 = mdate2.format("MMM, DD, YYYY");
      var thewind3 = forecast.daily[4].wind_speed;
      var thehum3 = forecast.daily[4].humidity;
      var thetemp3 = forecast.daily[4].temp.max;
      var thecond3 = forecast.daily[4].weather[0].description;
      var iconcode3 = forecast.daily[4].weather[0].icon
      var iconurl3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png";
      var thedateis3 = new Date(forecast.daily[4].dt * 1000);
      var mdate3 = moment(thedateis3);
      var thedate3 = mdate3.format("MMM, DD, YYYY");
      var thewind4 = forecast.daily[5].wind_speed;
      var thehum4 = forecast.daily[5].humidity;
      var thetemp4 = forecast.daily[5].temp.max;
      var thecond4 = forecast.daily[5].weather[0].description;
      var iconcode4 = forecast.daily[5].weather[0].icon
      var iconurl4 = "http://openweathermap.org/img/w/" + iconcode4 + ".png";
      var thedateis4 = new Date(forecast.daily[5].dt * 1000);
      var mdate4 = moment(thedateis4);
      var thedate4 = mdate4.format("MMM, DD, YYYY");
   

      // template for 5 day cards  
      var card = `
      <div class="row animated fadeInUp" id="fiveday">
          <div class="col card">
            <div class="card-body">
              <h6>${thedate}</h6>
              <p><img id="wicon" src="${iconurl}" alt="Weather icon"> <span class="upper">${thecond}</span></p>
              <p>Temp: <span>${thetemp} F&deg</span></p>
              <p>Humidity: <span>${thehum}%</span></p>
              <p>Wind Speed: <span>${thewind} MPH</span></p>
            </div>
          </div>
        <div class="col card">
          <div class="card-body">
              <h6>${thedate1}</h6>
              <p><img id="wicon" src="${iconurl1}" alt="Weather icon"> <span class="upper">${thecond1}</span></p>
              <p>Temp: <span>${thetemp1} F&deg</span></p>
              <p>Humidity: <span>${thehum1}%</span></p>
              <p>Wind Speed: <span>${thewind1} MPH</span></p>
           </div>
        </div>
        <div class="col card">
          <div class="card-body">
              <h6>${thedate2}</h6>
              <p><img id="wicon" src="${iconurl2}" alt="Weather icon"> <span class="upper">${thecond2}</span></p>
              <p>Temp: <span>${thetemp2} F&deg</span></p>
              <p>Humidity: <span>${thehum2}%</span></p>
              <p>Wind Speed: <span>${thewind2} MPH</span></p>
          </div>
        </div>
        <div class="col card">
          <div class="card-body">
              <h6 dir="ltr">${thedate3}</h6>
              <p><img id="wicon" src="${iconurl3}" alt="Weather icon"> <span class="upper">${thecond3}</span></p>
              <p>Temp: <span>${thetemp3} F&deg</span></p>
              <p>Humidity: <span>${thehum3}%</span></p>
              <p>Wind Speed: <span>${thewind3} MPH</span></p>
          </div>
        </div>
        <div class="col card">
          <div class="card-body">
            <h6 dir="ltr">${thedate4}</h6>
            <p><img id="wicon" src="${iconurl4}" alt="Weather icon"> <span class="upper">${thecond4}</span></p>
            <p>Temp: <span>${thetemp4} F&deg</span></p>
            <p>Humidity: <span>${thehum4}%</span></p>
            <p>Wind Speed: <span>${thewind4} MPH</span></p>
           </div>
          </div>
        </div>
      </div>
      `;
    $("#five").html("");
    $("#five").append(card);
  
      }
    });
  });

    //get the UV data, put in card, and color the badge
    var apiUV = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + todaylat + "&lon=" +todaylon + "&units=imperial&appid=fabf22bfb54443507c45e344ea64f584";
    fetch(apiUV).then(function(response) {
      response.json().then(function(data3) {
        // console.log(data3[0].value);
        $("#uv").text(data3[0].value)
        if (data3[0].value < 3) {
          $( "#uv" ).addClass( "badge-success" );
        }
        else if (data3[0].value < 7) {
          $( "#uv" ).addClass( "badge-warning" );

        }
        else {
          $( "#uv" ).addClass( "badge-danger" );

        } 
      });
    });
    });
  });
  
};

var formSubmitHandler = function(event) {
event.preventDefault();
// get value from input element
var cityname = nameInputEl.value.trim();
if (cityname) {
  checkCity(cityname);

  }     

  //validate the input
  else {
  alert("Please enter a valid city name.");
  }
};

function checkCity(cityname){
  var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&units=imperial&appid=fabf22bfb54443507c45e344ea64f584";
  fetch(apiUrl).then(function(response) {
    if (response.status === 404) {
      response.json().then(function(object) {
        alert("Please enter only a valid city by name!")
      })
    } else if (response.status === 200) {
      response.json().then(function(object) {
        addToStorage(cityname);
        //build history button
        buildHistory(cityname);
        //show the card
        getWeather(cityname);
      })
    }
  })
}

function buildHistory(cityname){
  var stringFromLocalStorage = window.localStorage.getItem("itemsline");

  //Then parse that string into an actual value.
  var parsedValueFromString = JSON.parse(stringFromLocalStorage);
  $("#historyList").html("");
  $(parsedValueFromString).each(function() {
    // console.log(this);
    var searchHistory = `<li class="list-group-item upper">${this}</li>`;
    $("#historyList").prepend(searchHistory);
  });

}

function addToStorage(cityname) {
  //Grab our itemsline string from localStorage.
  var stringFromLocalStorage = window.localStorage.getItem("itemsline");

  //Then parse that string into an actual value.
  var parsedValueFromString = JSON.parse(stringFromLocalStorage);

  //If that value is null (meaning that we've never saved anything to that spot in localStorage before), use an empty array as our array. Otherwise, just stick with the value we've just parsed out.
  var array = parsedValueFromString || [];

  //Here's the value we want to add
  var value = cityname;

  //If our parsed/empty array doesn't already have this value in it...
  if(array.indexOf(value) == -1){
      //add the value to the array
      array.push(value);

      //turn the array WITH THE NEW VALUE IN IT into a string to prepare it to be stored in localStorage
      var stringRepresentingArray = JSON.stringify(array);

      //and store it in localStorage as "itemsline"
      window.localStorage.setItem("itemsline", stringRepresentingArray);
      checkCity(cityname);
  }
};

userFormEl.addEventListener("submit", formSubmitHandler);

buildHistory();
//history list click event
$(document).delegate(".list-group-item", 'click', function(){
  cityname = $(this).text();
  getWeather(cityname);
});





