var userFormEl = document.querySelector("#searchForm");
var nameInputEl = document.querySelector("#searchInput");

var getWeather = function(cityname) {
  // format the api url: api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
  var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityname + "&units=imperial&appid=fabf22bfb54443507c45e344ea64f584";
  var apiUrlToday = "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&units=imperial&appid=fabf22bfb54443507c45e344ea64f584";

  // today's requests
  fetch(apiUrlToday).then(function(response) {
  response.json().then(function(data2) {
    // console.log(data2);
    //refs api
    var now = moment();
    var todaylat = data2.coord.lat;
    var todaylong = data2.coord.lon;
    var nowis = now.format("MMM, DD, YYYY");
    var city = data2.name;
    var cond = data2.weather[0].description;
    var temp = data2.main.temp;
    var theiconcode = data2.weather[0].icon;
    var icon = "http://openweathermap.org/img/w/" + theiconcode + ".png";
    var hum = data2.main.humidity;
    var wind = data2.wind.speed;
    var uv = "";

    console.log("long" + todaylong + "lat" + todaylat);

    var todayCard = `<div class="card animated fadeIn">
      <div class="card-body" id="maincard">
        <h2>${city} <span class="small date">${nowis}</span> <img id="wicon" src="${icon}" alt="Weather icon"> <span class="small upper">${cond}</span></h2>
        <p>Temp: <span>${temp}</span> F&deg;</p>
        <p>Humidity: <span>${hum}</span>%</p>
        <p>Wind Speed: <span>${wind}</span> MPH</p>
        <p>UV Index: <span>${uv}</span></p>
      </div>
    </div>
    <h4>5 Day Forcast for ${city}</h4>`
    $("#main").html("");
    $("#main").append(todayCard); 
    });
  });

  
  //5 day request
  fetch(apiUrl).then(function(response) {
    response.json().then(function(data) {
      if(cityname){
      console.log(data);
      // clear the input
      nameInputEl.value = "";
      // refs to api
      var thewind = data.list[6].wind.speed;
      var thehum = data.list[6].main.humidity;
      var thetemp = data.list[6].main.temp;
      var thecond = data.list[6].weather[0].description;
      var iconcode = data.list[6].weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
      var myDate = data.list[6].dt_txt;
      var thedateis = myDate.substring(0,10);
      var thedate = moment(thedateis).format("MMM, DD, YYYY");
      var theuv = "";

      var thewind1 = data.list[12].wind.speed;
      var thehum1 = data.list[12].main.humidity;
      var thetemp1 = data.list[12].main.temp;
      var thecond1 = data.list[12].weather[0].description;
      var iconcode1 = data.list[12].weather[0].icon;
      var iconurl1 = "http://openweathermap.org/img/w/" + iconcode1 + ".png";
      var myDate1 = data.list[12].dt_txt;
      var thedate1 = moment(myDate1).format("MMM, DD, YYYY");
      var theuv1 = "";
  ﻿
      var thewind2 = data.list[20].wind.speed;
      var thehum2 = data.list[20].main.humidity;
      var thetemp2 = data.list[20].main.temp;
      var thecond2 = data.list[20].weather[0].description;
      var iconcode2 = data.list[20].weather[0].icon;
      var iconurl2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png";
      var myDate2 = data.list[20].dt_txt;
      var thedate2 = moment(myDate2).format("MMM, DD, YYYY");
      var theuv2 = "";

      var thewind3 = data.list[30].wind.speed;
      var thehum3 = data.list[30].main.humidity;
      var thetemp3 = data.list[30].main.temp;
      var thecond3 = data.list[30].weather[0].description;
      var iconcode3 = data.list[30].weather[0].icon;
      var iconurl3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png";
      var myDate3 = data.list[30].dt_txt;
      var thedateis3 = myDate3.substring(0,10);
      var thedate3 = moment(thedateis3).format("MMM, DD, YYYY");
      var theuv3 = "";

      var thewind4 = data.list[36].wind.speed;
      var thehum4 = data.list[36].main.humidity;
      var thetemp4 = data.list[36].main.temp;
      var thecond4 = data.list[36].weather[0].description;
      var iconcode4 = data.list[36].weather[0].icon;
      var iconurl4 = "http://openweathermap.org/img/w/" + iconcode4 + ".png";
      var myDate4 = data.list[36].dt_txt;
      var thedateis4 = myDate4.substring(0,10);
      var thedate4 = moment(thedateis4).format("MMM, DD, YYYY");
      var theuv4 = "";
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
              <p>UV Index: <span>${theuv}</span></p>
            </div>
          </div>
        <div class="col card">
          <div class="card-body">
              <h6>${thedate1}</h6>
              <p><img id="wicon" src="${iconurl1}" alt="Weather icon"> <span class="upper">${thecond1}</span></p>
              <p>Temp: <span>${thetemp1} F&deg</span></p>
              <p>Humidity: <span>${thehum1}%</span></p>
              <p>Wind Speed: <span>${thewind1} MPH</span></p>
              <p>UV Index: <span>${theuv1}</span></p>
            </div>
        </div>
        <div class="col card">
          <div class="card-body">
              <h6>${thedate2}</h6>
              <p><img id="wicon" src="${iconurl2}" alt="Weather icon"> <span class="upper">${thecond2}</span></p>
              <p>Temp: <span>${thetemp2} F&deg</span></p>
              <p>Humidity: <span>${thehum2}%</span></p>
              <p>Wind Speed: <span>${thewind2} MPH</span></p>
              <p>UV Index: <span>${theuv2}</span></p>
          </div>
        </div>
        <div class="col card">
          <div class="card-body">
              <h6 dir="ltr">${thedate3}</h6>
              <p><img id="wicon" src="${iconurl3}" alt="Weather icon"> <span class="upper">${thecond3}</span></p>
              <p>Temp: <span>${thetemp3} F&deg</span></p>
              <p>Humidity: <span>${thehum3}%</span></p>
              <p>Wind Speed: <span>${thewind3} MPH</span></p>
              <p>UV Index: <span>${theuv3}</span></p>
          </div>
        </div>
        <div class="col card">
          <div class="card-body">
            <h6 dir="ltr">${thedate4}</h6>
            <p><img id="wicon" src="${iconurl4}" alt="Weather icon"> <span class="upper">${thecond4}</span></p>
            <p>Temp: <span>${thetemp4} F&deg</span></p>
            <p>Humidity: <span>${thehum4}%</span></p>
            <p>Wind Speed: <span>${thewind4} MPH</span></p>
            <p>UV Index: <span>${theuv4}</span></p>
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
    console.log(this);
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

$(".list-group-item").click(function() {
  cityname = $(this).text();
  getWeather(cityname);
});


var myDate = new Date(1498132800);
console.log(myDate);

