import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      <div>
        <div>Latitude: {latitude}</div>
        <div>Longitude: {longitude}</div>
        <div>Time: {timestamp}</div>
      </div>
    )
  }
}

export default App;