import React, { Component } from 'react';
import axios from 'axios';
import Sun from '../../photos_and_videos/weather/sun.svg';
import Cloud from '../../photos_and_videos/weather/cloud.svg';
import Clear from '../../photos_and_videos/weather/clear.svg';
import Rain from '../../photos_and_videos/weather/water.svg';
import Snow from '../../photos_and_videos/weather/snow.svg';
import { Card } from 'react-bootstrap';

class GetWeather extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
        BLCweather: [],
        MongolianWeather: [],
        BLCLoaded: false,
        MongoliaLoaded: false
        };
        this.getBLCWeather = this.getBLCWeather.bind(this);
        this.getMongolianWeather = this.getMongolianWeather.bind(this);
    }

    componentDidMount() {
        this.getBLCWeather();
        this.getMongolianWeather();
      }

    getBLCWeather(){
        const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=N15JU`
        axios.get(url)
        .then(res => {
            console.log('state')
            this.setState({ BLCweather: res.data.current, BLCLoaded: true });
            console.log(this.state)
        })
        .catch(error => {
            console.log(error)
        })
    }

    getMongolianWeather(){
        const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=Ulaanbaatar`
        axios.get(url)
        .then(res => {
            console.log('state')
            this.setState({ MongoliaWeather: res.data.current, MongoliaLoaded: true });
            console.log(this.state)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const { condition, feelslike_c, wind_mph, humidity, wind_dir, vis_miles } = this.state.BLCweather;
        return (
            <div>
              {this.state.BLCLoaded && this.state.MongoliaLoaded === true ? 
                    <div>
                    <Card style={overlayStyle}>
                    <Card.Img variant="top" src={condition.icon} />
                    <Card.Body>
                        <Card.Title>BLC Weather - {condition.text}</Card.Title>
                        <Card.Text>
                        <li style={listStyle}>Feels Like: {feelslike_c}c</li>
                        <li style={listStyle}>Wind Speed: {wind_mph}mph</li>
                        <li style={listStyle}>Wind Direction: {wind_dir}</li>
                        <li style={listStyle}>Visibility: {vis_miles} miles</li>
                        <li style={listStyle}>Humidity: {humidity}</li>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </div>
                    : null}
            </div>
        );
    }
}

const overlayStyle = {
    position: 'absolute', /* Sit on top of the page content */
    width: '18rem',
    height: '30rem',
    top: '250px',
    left: '30px',
    right: '0',
    bottom: '0',
    color: '#7B67C9',
    fontFamily: 'montserrat',
    fontWeight: 'bold',
    zIndex: '2' /* Specify a stack order in case you're using a different order for other elements */
}

const listStyle = {
    color: '#7B67C9',
    fontFamily: 'montserrat'
}

export default GetWeather;
