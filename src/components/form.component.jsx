import React from 'react'
import './css/form.style.css';

const Form = props =>{
    return(
        <div className="container">
            <h1 className="py-2">Weather App</h1>
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.loadWeather}>
                <div className="row">
                    <div className="input-group py-4">
                        <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City name" />
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="submit" name="search-button">
                                <i className="glyphicon glyphicon-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

function error(){
    return(
        <div className="alert alert-danger" role="alert">Please enter your city name</div>
    );
}

export default Form;