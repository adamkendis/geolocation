
function getGps() {
  if (navigator.geolocation) {
    let options = {
      maximumAge: 10000,
      enableHighAccuracy: true,
    };
    
    let errorFunc = err => {
      console.warn(err.code, err.message);
    }

    let successFunc = pos => {
      let {latitude, longitude, altitude, accuracy, altitudeAccuracy, heading} = pos.coords;
      let timestamp = new Date(pos.timestamp).toLocaleString();
      return {latitude, longitude, altitude, accuracy, altitudeAccuracy, heading, timestamp};      
    }
    
    navigator.geolocation.getCurrentPosition(successFunc, errorFunc, options);
  }
}

module.exports.getGps = getGps;

