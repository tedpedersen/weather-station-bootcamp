# Weather Dashboard

A simple application to display the weather for a given city. Using the fetch API, the app calls https://api.openweathermap.org/data/2.5/ to retrieve the today's weather, plus a 5-day forecast of upcoming weather. The UV display color is dynamically set, so the color is red if severe, yellow if moderate and green if low. The user's results are stored in local storage, and a clickable search history list is dynamically created as the user searches cities. There is validation if the input is empty, to make sure the city exists, and also to make sure we don't add duplicates to the search history list. I animated the background clouds and the sliding cards using pure CSS.

Deployed App: https://tedpedersen.github.io/weather-station-bootcamp-challenge/

![Screenshot](https://github.com/tedpedersen/weather-station-bootcamp/blob/master/assets/img/screenshot.png)