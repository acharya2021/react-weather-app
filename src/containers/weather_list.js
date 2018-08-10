import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    // cityData is an object retrieved from the api
    renderWeather(cityData) {
        const name = cityData.city.name;
        // for each item in the list, return item.main.temp
        const temps = cityData.list.map(weather => weather.main.temp);
        console.log(temps);
        return (
            <tr key={name}>
                {/*access the city's name*/}
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="orange"/>
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
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


