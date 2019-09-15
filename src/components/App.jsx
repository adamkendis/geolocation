import React from 'react';
import Map from './Map.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 36.4974,
      longitude: -118.2172,
    };
    this.getCoords.bind(this);
  };

  getCoords() {
    if (navigator.geolocation) {
      const success = (pos) => {
        const {latitude, longitude, altitude, accuracy, altitudeAccuracy, heading} = pos.coords;
        const timestamp = new Date(pos.timestamp).toLocaleString();
        const locInfo = {latitude, longitude, altitude, accuracy, altitudeAccuracy, heading, timestamp};
        this.setState(locInfo);
      }
      const error = (err) => {
        console.warn(err.code, ': ', err.message);
      }
      const options = {
        maximumAge: 15000,
        enableHighAccuracy: true,
        timeout: 5000,
      }
      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      alert('Geolocation is not supported on this device.')
    }
  }

  componentDidMount() {
    this.getCoords();
  }
  
  render() {
    let {latitude, longitude, altitude, accuracy, altitudeAccuracy, heading, timestamp} = this.state;
    return (
      <div id='info-wrapper' style={{height: '100%'}}>
        <div>Latitude: {latitude}</div>
        <div>Longitude: {longitude}</div>
        <div>Time: {timestamp}</div>
      <Map latitude={latitude} longitude={longitude} />
      </div>
    )
  }
}

export default App;