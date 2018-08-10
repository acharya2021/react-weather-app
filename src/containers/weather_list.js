import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    // cityData is an object retrieved from the api
    renderWeather(cityData) {
        const name = cityData.city.name;
        // for each item in the list, return item.main.temp
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;

        return (
            <tr key={name}>
                {/*access the city's name*/}
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color="orange" units="K"/></td>
                <td><Chart data={pressures} color="green" units="hPa"/></td>
                <td><Chart data={humidities} color="black" units="%"/></td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature(K)</th>
                    <th>Pressure(hPa)</th>
                    <th>Humidity(%)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

// this function will allow us to pull weather data into the container above
// by accessing this.props.weather
function mapStateToProps({weather}) {
    return {weather};
}

// connect our component WeatherList with the function mapStateToProps
// export the connected version of WeatherList
export default connect(mapStateToProps)(WeatherList);


