var info = document.getElementById('weatherInfo');
var pic = document.getElementById('pic');
var warning = document.getElementById('warning');

$(document).ready(function(){
  $('.toggle').click(function(){
    $('.toggle').toggleClass('active')
    $('body').toggleClass('night')
  })
});

function getWeather(){
  var city = $('#cityName').val();
  if(city == ""){
    warning.style.display = 'block';
  }
  else{
    warning.style.display = 'none';
  var apiCall = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=5847d3548a7d6affe368a77f835e87cf';
  $.getJSON(apiCall, weatherCall);
  }
}

function weatherCall(weatherData){
  var city = weatherData.name;
  var temp = weatherData.main.temp;
  var view = weatherData.weather[0].main;
  console.log(temp);
  view = view.toLowerCase();
  temp = (temp * (9/5) - 459.67).toFixed();

  changeWeatherImage(view);

  info.innerHTML  = `${city}'s forcast is ${view} with a temperature of ${temp} fahrenheit.`;
}

function changeWeatherImage(view){
  if(view == "clear"){
    pic.src = "https://photos.gograph.com/thumbs/CSP/CSP587/landscape-green-grass-clear-sky-stock-illustration_k5874262.jpg"
  }

  if(view == "clouds"){
    pic.src = "http://iconbug.com/download/size/256/icon/2859/cloudy-sky/"
  }

  if(view == "rain"){
    pic.src = "https://i.pinimg.com/736x/68/98/1f/68981fbd0714523bf89167c899365cfd--sentence-structure-free-clipart-images.jpg"
  }

  if(view == "sunny"){
    pic.src = "https://bloximages.newyork1.vip.townnews.com/northwestgeorgianews.com/content/tncms/assets/v3/editorial/9/cf/9cf0d394-2352-11e3-9d30-001a4bcf6878/565f5a4629c30.image.jpg"
  }
}
