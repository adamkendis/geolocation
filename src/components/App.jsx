import React from 'react';
import { getGps } from '../modules/geolocation.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  componentDidMount() {
    let coords = getGps();
    // console.log(coords)
    this.setState(coords);
  }
  
  render() {
    let {latitude, longitude, altitude, accuracy, altitudeAccuracy, heading, timestamp} = this.state;
    return (
      <div>
        <div>Latitude: {latitude}</div>
        <div>Longitude: {longitude}</div>
        <div>Time: {timestamp}</div>
      </div>
    )
  }
}

export default App;