let weather={
    "apikey":"f0df996b3b470d7134e6999039db912a",
    fetchWeather:function(city){~
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        +"&units=metric&appid="
         + this.apikey +""
         )
        .then((respnose)=>respnose.json())
        .then((data)=> this.displayWeather(data)) 
        .catch((error) => {
            alert("Enter valid city");
          }); 
    },
    displayWeather:function(data){
            const{ name }=data;
            const{ icon, description }=data?.weather[0];
            const{ temp, humidity }=data?.main;
            const{ speed }=data?.wind;
            // const{ message }=data;
            // console.log(message,"error")
            // if(message){
            //     alert(message);
            // }
        // console.log(name, icon, description, temp, humidity,speed )
        document.querySelector(".city").innerHTML="Weather in "+ name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description").innerHTML=description;
        document.querySelector(".temp").innerHTML=temp + "°C";
        document.querySelector(".humidity").innerHTML="Humidity: "+humidity +"%";
        document.querySelector(".wind").innerHTML="Wind speed: "+speed +"km/h"
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keypress",function(){
        if(event.key=='Enter'){
            weather.search();
        }
})
weather.fetchWeather("bangalore");