const button=document.getElementById('search-button');
const input=document.getElementById('city-input');
const cityName=document.getElementById('city-name');
const cityTemperature=document.getElementById('city-temperature');
const cityTime=document.getElementById('city-time');

async function getData(cityName){
    const promise=await fetch(`https://api.weatherapi.com/v1/current.json?key=addyourapikey&q=${cityName}&aqi=yes`)
    return await promise.json();
}
button.addEventListener('click',async function(){
   console.log(input.value);
   const value=input.value;
   const result= await getData(value);
    cityName.innerHTML=`${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerHTML=`${result.location.localtime}`;
    cityTemperature.innerHTML=`${result.current.temp_c}°C`; 
})

