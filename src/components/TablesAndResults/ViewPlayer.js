import React from 'react';
import axios from 'axios';
import '../../styles.css'

class ViewPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
        player: [],
        playerLoaded: false,
    };
  }

  componentDidMount() {
    this.getPlayer()
  }

  getPlayer(){
    const playerId = this.props.match.params.playerId
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_SHEET_ID}/values/Sheet2!A${playerId}:D${playerId}?key=${process.env.REACT_APP_SHEETS_API_KEY}`
    axios.get(url)
    .then(res => {
        this.setState({ player: res.data.values, playerLoaded: true });
        console.log(this.state.player[0])
    })
    .catch(error => {
        console.log(error)
    })
}

  render() {
    return (
        <div>
          {this.state.playerLoaded ? 
                <div>
                <h1>player: {this.state.player[0]}</h1>
                </div>
                : null}
        </div>
    );
  }
}

export default ViewPlayer;