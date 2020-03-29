import React from 'react';
import Weather from './components/weather.component';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
import Form from './components/form.component';

const API_Key = "7e189b29f652a2b0f7690e09f43c99b8";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      temperature: undefined,
      feels_like: undefined,
      description: undefined
    };

    this.weatherIcon = {
      clearDay: "wi-day-sunny",
      clearNight: "wi-night-clear",

      fewCloudyDay: "wi-day-sunny-overcast",
      fewCloudyNight: "wi-night-alt-partly-cloudy",

      cloudyDay: "wi-day-cloudy",
      cloudyNight: "wi-night-alt-cloudy",

      windyCloudyDay: "wi-day-cloudy-gusts",
      windyCloudyNight: "wi-night-alt-cloudy-gusts",

      rainyDay: "wi-day-rain",
      rainyNight: "wi-night-alt-rain",

      drizzlyDay: "wi-day-sprinkle",
      drizzlyNight: "wi-night-alt-sprinkle",

      thunderstormDay: "wi-day-thunderstorm",
      thunderstormNight: "wi-night-alt-thunderstorm",

      snowDay: "wi-day-snow",
      snowNight: "wi-night-alt-snow",

      mistyDay: "wi-day-fog",
      mistyNight: "wi-night-fog",

      cloudy: "wi-cloudy"
    }
  }

  convertK2C(temp){
    let celsius = Math.floor(temp - 273.15);
    return celsius;
  }

  getWeatherIcon(icons, id){
    switch(true){
      case id === "01d":
        this.setState({icon: this.weatherIcon.clearDay});
        break;
      case id === "01n":
        this.setState({icon: this.weatherIcon.clearNight});
        break;
      case id === "02d":
        this.setState({icon: this.weatherIcon.fewCloudyDay});
        break;
      case id === "02n":
        this.setState({icon: this.weatherIcon.fewCloudyNight});
        break;
      case id === "03d":
        this.setState({icon: this.weatherIcon.cloudyDay});
        break;
      case id === "03n":
        this.setState({icon: this.weatherIcon.cloudyNight});
        break;
      case id === "04d":
        this.setState({icon: this.weatherIcon.windyCloudyDay});
        break;
      case id === "04n":
        this.setState({icon: this.weatherIcon.windyCloudyNight});
        break;
      case id === "09d":
        this.setState({icon: this.weatherIcon.rainyDay});
        break;
      case id === "09n":
        this.setState({icon: this.weatherIcon.rainyNight});
        break;
      case id === "10d":
        this.setState({icon: this.weatherIcon.drizzlyDay});
        break;
      case id === "10n":
        this.setState({icon: this.weatherIcon.drizzlyNight});
        break;
      case id === "11d":
        this.setState({icon: this.weatherIcon.thunderstormDay});
        break;
      case id === "11n":
        this.setState({icon: this.weatherIcon.thunderstormNight});
        break;
      case id === "13d":
        this.setState({icon: this.weatherIcon.snowDay});
        break;
      case id === "13n":
        this.setState({icon: this.weatherIcon.snowNight});
        break;
      case id === "50d":
        this.setState({icon: this.weatherIcon.mistyDay});
        break;
      case id === "50n":
        this.setState({icon: this.weatherIcon.mistyNight});
        break;
      default:
        this.setState({icon: this.weatherIcon.cloudy});

    }
  }

  getWeather = async (e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;

    if(city){
          const API_Call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`);

          const response = await API_Call.json();

          console.log(response);

          this.setState({
            city: `${response.name}, ${response.sys.country}`,
            temperature: this.convertK2C(response.main.temp),
            feels_like: this.convertK2C(response.main.feels_like),
            description: response.weather[0].description,
            error: false
          });

          this.getWeatherIcon(this.weatherIcon, response.weather[0].icon);
    }

    else{
      this.setState({error: true});
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="py-2">Weather App</h1>
        <Form 
          loadWeather={this.getWeather}
          error={this.state.error}
        />
        <Weather 
          city= {this.state.city} 
          country = {this.state.country}
          temp_current={this.state.temperature}
          temp_feelslike={this.state.feels_like}
          weather_description={this.state.description}
          weatherIcon={this.state.icon}
        />
      </div>
    );
  }
}

export default App;
