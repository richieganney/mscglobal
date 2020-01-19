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
        this.weatherImage = this.weatherImage.bind(this);
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

    weatherImage(){
        const currentWeather = this.state.BLCweather.condition.text
        if(currentWeather.includes("Sunny")){
            return Sun
        }
        if(currentWeather.includes("Cloud")){
            return Cloud
        }
        if(currentWeather.includes("Snow")){
            return Snow
        }
        if(currentWeather.includes("Rain")){
            return Rain
        }
        if(currentWeather.includes("Clear")){
            return Clear
        }
      }

    render() {
        const { condition, feelslike_c, gust_mph, humidity } = this.state.BLCweather;
        return (
            <div>
              {this.state.BLCLoaded && this.state.MongoliaLoaded === true ? 
                    <div>
                    <Card style={overlayStyle}>
                    <Card.Img variant="top" src={condition.icon} />
                    <Card.Body>
                        <Card.Title>BLC Weather - {condition.text}</Card.Title>
                        <Card.Text>
                        <li>Feels Like: {feelslike_c}c</li>
                        <li>Wind Speed: {gust_mph}mph</li>
                        <li>Humidity: {humidity}</li>
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
    zIndex: '2' /* Specify a stack order in case you're using a different order for other elements */
}

export default GetWeather;
