const apiId='363085f44e66e11901fa638f8e04c20e';
unit='metric';
getWeatherInfo("Dhaka");
function getWeatherInfo(cityName)
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiId}&units=${unit}`)
.then(res => 
    res.json())
.then(data=>{
  
    updateWeather(data);
})
}
function searchCity(){
   let inputText=document.getElementById("input-text").value;
   if(inputText){
       getWeatherInfo(inputText);
   }
}
function updateWeather(data){
    if(data.cod!=404)
        {
        let cityName=document.getElementById("input-text").value;
        if(cityName){
        document.getElementById("city-name").innerText=cityName.charAt(0).toUpperCase()+cityName.slice(1);}
        else{
            document.getElementById("city-name").innerText="Dhaka"
        }
        let temp=data.main.temp;
        document.getElementById("temp").innerText=temp;
        let weather=data.weather[0].main;
        document.getElementById("weather").innerText=weather;
        }
    else{
        document.getElementById("city-name").innerText="City is Not Found!"
        document.getElementById("weather").innerText="";
        document.getElementById("temp").innerText="";
    }
}
