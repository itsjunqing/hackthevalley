/*global google */

import React, {Component} from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';

const style = {
    width: '100%',
    height: '100%',
    position: 'absolute'
};

async function getServiceJSONs(category) {
    const response = await fetch(
        `https://hackthevalley123456789.appspot.com/api/v1/serviceCategory?category=${category}`,
    );
    const {data} = await response.json();
   // console.log(data);
    return data;
}

let temp = getServiceJSONs("Handyman");


let currentLocation = {lat: 43.786697, lng: -79.189673};
let serviceLocation0 = {lat: 43.793265, lng: -79.182807};
let serviceLocation1 = {lat: 43.785543, lng: -79.206352};
let serviceLocation2 = {lat: 43.775078, lng: -79.193287};
let serviceLocation3 = {lat: 43.787718, lng: -79.172442};
let serviceLocation4 = {lat: 43.782420, lng: -79.182656};
let serviceLocation5 = {lat: 43.776936, lng: -79.217203};
let serviceLocation6 = {lat: 43.766374, lng: -79.231228};
let serviceLocation7 = {lat: 43.776987, lng: -79.137527};
let serviceLocation8 = {lat: 43.807638, lng: -79.168046};
let serviceLocation9 = {lat: 43.795188, lng: -79.235413};
let serviceLocation10 = {lat: 43.764457, lng: -79.185092};
let serviceLocation11 = {lat: 43.782050, lng: -79.173342};
let serviceLocation12 = {lat: 43.794443, lng: -79.196431};
let serviceLocation13 = {lat: 43.800772, lng: -79.199521};
let serviceLocation14 = {lat: 43.816735, lng: -79.210932};
let serviceLocation15 = {lat: 43.824267, lng: -79.246862};

// for(let x = 0; x < temp.length; x++){
//     let otherTemp = {lat: temp.lat, lng: temp.long};
//     serviceArray.push(otherTemp);
// }


export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        directions: null,
        error: null
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };
    componentDidMount() {
        const origin = currentLocation;
        const destination = serviceLocation0;
        const directionsService = new google.maps.DirectionsService();
        directionsService.route({
            origin: origin,
            destination: destination,
        },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result
                    });
                } else {
                    this.setState({error: result});
                }
            }
        );
    }

    render() {

        return (
            <Map
                google={this.props.google}
                zoom={15}
                style={style}
                initialCenter={currentLocation}>
                <Marker
                    onClick={this.onMarkerClick}
                    name={'Your Location'}
                />
                <Marker
                    onClick = {this.onMarkerClick}
                    name = {"John's Plumbing"}

                    position = {serviceLocation0}
                    options={{icon: {url: 'https://pngimage.net/wp-content/uploads/2019/05/google-maps-png-icon-1.png', scaledSize: { width: 90, height: 90 }}}}
                />
                <Marker
                    onClick = {this.onMarkerClick}
                    name = {"Barry the Handyman"}
                    position = {serviceLocation1}
                    options={{icon: {url: 'https://pngimage.net/wp-content/uploads/2019/05/google-maps-png-icon-1.png', scaledSize: { width: 90, height: 90 }}}}
                />
                <Marker
                    onClick = {this.onMarkerClick}
                    name = {"Henry (Electrician)"}
                    position = {serviceLocation2}
                    options={{icon: {url: 'https://pngimage.net/wp-content/uploads/2019/05/google-maps-png-icon-1.png', scaledSize: { width: 90, height: 90 }}}}
                />
                <Marker
                    onClick = {this.onMarkerClick}
                    name = {"Tayla the Plumber"}
                    position = {serviceLocation3}
                    options={{icon: {url: 'https://pngimage.net/wp-content/uploads/2019/05/google-maps-png-icon-1.png', scaledSize: { width: 90, height: 90 }}}}
                />
                <Marker
                    onClick = {this.onMarkerClick}
                    name = {"Erika's Repairs"}
                    position = {serviceLocation4}
                    options={{icon: {url: 'https://pngimage.net/wp-content/uploads/2019/05/google-maps-png-icon-1.png', scaledSize: { width: 90, height: 90 }}}}
                />
                <Marker
                    onClick = {this.onMarkerClick}
                    name = {"Erika the Locksmith"}
                    position = {serviceLocation5}
                    options={{icon: {url: 'https://pngimage.net/wp-content/uploads/2019/05/google-maps-png-icon-1.png', scaledSize: { width: 90, height: 90 }}}}
                />
                <Marker
                    onClick = {this.onMarkerClick}
                    name = {"Michelle the Repairwoman"}
                    position = {serviceLocation6}
                    options={{icon: {url: 'https://pngimage.net/wp-content/uploads/2019/05/google-maps-png-icon-1.png', scaledSize: { width: 90, height: 90 }}}}
                />
                <Marker
                    onClick = {this.onMarkerClick}
                    name = {"Harrison"}
                    position = {serviceLocation7}
                    options={{icon: {url: 'https://pngimage.net/wp-content/uploads/2019/05/google-maps-png-icon-1.png', scaledSize: { width: 90, height: 90 }}}}
                />
                <Marker
                    onClick = {this.onMarkerClick}
                    name = {"Erika the Locksmith"}
                    position = {serviceLocation8}
                    options={{icon: {url: 'https://pngimage.net/wp-content/uploads/2019/05/google-maps-png-icon-1.png', scaledSize: { width: 90, height: 90 }}}}
                />
                <Marker
                    onClick = {this.onMarkerClick}
                    name = {"Benny the pipeline engineer"}
                    position = {serviceLocation9}
                    options={{icon: {url: 'https://pngimage.net/wp-content/uploads/2019/05/google-maps-png-icon-1.png', scaledSize: { width: 90, height: 90 }}}}
                />
                <Marker
                    onClick = {this.onMarkerClick}
                    name = {"Harsh the Locksmith"}
                    position = {serviceLocation10}
                    options={{icon: {url: 'https://pngimage.net/wp-content/uploads/2019/05/google-maps-png-icon-1.png', scaledSize: { width: 90, height: 90 }}}}
                />
                <Marker
                    onClick = {this.onMarkerClick}
                    name = {"Zhang the Consultant"}
                    position = {serviceLocation11}
                    options={{icon: {url: 'https://pngimage.net/wp-content/uploads/2019/05/google-maps-png-icon-1.png', scaledSize: { width: 90, height: 90 }}}}
                />
                <Marker
                    onClick = {this.onMarkerClick}
                    name = {"Zhong the pipe fixer"}
                    position = {serviceLocation12}
                    options={{icon: {url: 'https://pngimage.net/wp-content/uploads/2019/05/google-maps-png-icon-1.png', scaledSize: { width: 90, height: 90 }}}}
                />
                <Marker
                    onClick = {this.onMarkerClick}
                    name = {"Benjamin the Handyman"}
                    position = {serviceLocation13}
                    options={{icon: {url: 'https://pngimage.net/wp-content/uploads/2019/05/google-maps-png-icon-1.png', scaledSize: { width: 90, height: 90 }}}}
                />
                <Marker
                    onClick = {this.onMarkerClick}
                    name = {"Erza the Locksmith"}
                    position = {serviceLocation14}
                    options={{icon: {url: 'https://pngimage.net/wp-content/uploads/2019/05/google-maps-png-icon-1.png', scaledSize: { width: 90, height: 90 }}}}
                />
                <Marker
                    onClick = {this.onMarkerClick}
                    name = {"Samanfa the Electrician"}
                    position = {serviceLocation15}
                    options={{icon: {url: 'https://pngimage.net/wp-content/uploads/2019/05/google-maps-png-icon-1.png', scaledSize: { width: 90, height: 90 }}}}
                />



                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA52WFUwVWUZ9xPDr-K-FOKVWF54DR0M9w'
})(MapContainer);