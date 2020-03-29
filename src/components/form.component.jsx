import React from 'react'
import './css/form.style.css';

const Form = props =>{
    return(
        <div className="container">
            <div className="app-container">
                <div>{props.error ? error() : null}</div>
                <form onSubmit={props.loadWeather}>
                    <div className="row">
                        <div>
                            <div className="input-group py-4" id="search-bar">
                                <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City name" />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="submit" name="search-button">
                                        <i className="glyphicon glyphicon-search" />
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

function error(){
    return(
        <div className="alert alert-danger" role="alert">Please enter your city name</div>
    );
}

export default Form;