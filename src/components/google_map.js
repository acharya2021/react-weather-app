import React, {Component} from 'react';

class GoogleMap extends Component {

    // a method that gets called automatically after this component
    // has been rendered to the screen
    componentDidMount() {
        // create an embedded google map inside our doc
        // takes an html element as the first argument
        // and renders an embedded map into it
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render() {
        // the ref system allows us to get a direct reference to
        // an HTML element that has been rendered to the page
        // as in this.refs.map
        return <div ref="map"/>;
    }
}

export default GoogleMap;