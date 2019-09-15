import React, { Component } from 'react';
import loadGoogleMapsApi from 'load-google-maps-api';
import config from '../../config.js';


class Map extends Component {
  constructor(props) {
    super(props);
    this.createMap.bind(this);
  }

  createMap = () => {
    loadGoogleMapsApi({key: config.GOOGLE_MAPS_API_KEY}).then(maps => {
      new google.maps.Map(document.getElementById('map'), {
        center: {
          lat: this.props.latitude,
          lng: this.props.longitude,
        },
        zoom: 15,
      })
    }).catch(err => {
      console.error(err);
    })
  }

  componentDidMount() {
    this.createMap();
  }

  render() {
    const mapStyle = {
      height: '75%',
      width: '50%',
    }
    return (
      <div id='map' style={mapStyle}></div>
      )
    }
  }
  

export default Map;