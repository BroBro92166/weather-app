import React from 'react'
import './css/form.style.css';

const Weather = (props) => {
    return (
        <div className="container text-light py-4" id="container">
            <h2 class="py-4">
                {props.city}
            </h2>
            <h5>
                <i className={`wi ${props.weatherIcon} display-1`}></i> 
            </h5>
            {currentTemp(props.temp_current)}
            
            {feelslikeTemp(props.temp_feelslike)}

            {weatherDescription(props.weather_description)}

            <div className="btn-group py-4">
                <button className="btn btn-warning" type="submit">What Should I Wear?</button>
            </div>

            <div className="btn-toolbar">
                <div className="btn-group btn-group-justified">
                    <button className="btn btn-warning" type="submit" name="search-button">5 Day Forecast</button>
                    <button className="btn btn-warning" type="submit" name="search-button">
                        <i className="glyphicon glyphicon-volume-up"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

function currentTemp(temp) {
    if(temp){
        return (
            <h2>
                <h3>Current temperature</h3>
                <span className="py-2">{temp}&deg;C</span>
            </h2>
        );
    }

}

function feelslikeTemp(feelslike){
    if(feelslike){
        return (
            <h3>
                <h5>Temperature feels like</h5>
                <span className="px-4">{feelslike}&deg;C</span>
            </h3>
        );
    }

}


function weatherDescription(description) {
    return (
        <h4>
            <span className="py-3">{description}</span>
        </h4>
    );

}

export default Weather;