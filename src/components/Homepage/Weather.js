import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import Sunny from '../../photos_and_videos/weather/sunny.png';
import Cloudy from '../../photos_and_videos/weather/cloud.png';
import Rainy from '../../photos_and_videos/weather/rain.png';

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state =
        {
        weather: []
        };
        this.weatherImage = this.weatherImage.bind(this);
        // this.getTable = this.getTable.bind(this);
    }

    componentDidMount(){
      const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=N15JU`
      console.log(process.env.REACT_APP_WEATHER_API_KEY)
      axios.get(url)
      .then(res => {
          this.setState({ weather: res.data.current })
          console.log(this.state.weather.condition.text)
      })
      .catch(error => {
          console.log(error)
      })
    }

    weatherImage(){
        const currentWeather = this.state.weather.condition.text
      if(currentWeather.includes("sunny")){
          return Sunny
      }
      if(currentWeather.includes("cloud")){
          return Cloudy
      }
      if(currentWeather.includes("rain")){
          return Rainy
      }
    }

    render() {
        return (
            <div>
                <Card style={overlayStyle}>
                    <Card.Img variant="top" src={Sunny} />
                    <Card.Body>
                        <Card.Title>BLC Weather - </Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
const overlayStyle = {
    position: 'absolute', /* Sit on top of the page content */
    width: '18rem',
    height: '25rem',
    top: '250px',
    left: '30px',
    right: '0',
    bottom: '0',
    zIndex: '2' /* Specify a stack order in case you're using a different order for other elements */
}

export default Weather;
