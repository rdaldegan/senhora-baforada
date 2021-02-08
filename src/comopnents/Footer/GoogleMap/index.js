import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const containerStyle  = {
  position: 'relative',
  width: '60%',
  height: '60%',
  marginLeft: '500px',
}

const mapsLink = 'https://www.google.com/maps/place/Senhora+Baforada+Tabacaria/@-15.7566912,-47.8909503,15z/data=!4m5!3m4!1s0x0:0x847d8438f8c0a999!8m2!3d-15.7566912!4d-47.8909503';

const coordenadasDaLoja = {
  lat: -15.7565053376016,
  lng: -47.89103613068727
}

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
 
  render() {
    return (
      <Map
        initialCenter={{
          lat: coordenadasDaLoja.lat,
          lng: coordenadasDaLoja.lng
        }} 
        google={this.props.google}
        onClick={this.onMapClicked}
        containerStyle={containerStyle}
      >
      <Marker onClick={this.onMarkerClick}s />

      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
          <div>
            <a href={mapsLink} target="blank" style={{textDecoration: 'none', color: 'black'}}><h1>Senhora Baforada</h1></a>
          </div>
      </InfoWindow>
    </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBnQNwGSSBmXM6zNoUH0ZQ3p9n0T4RunUY',
})(MapContainer)