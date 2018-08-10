import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from "../actions";

class SearchBar extends Component {
    // set our state up with the constructor
    constructor(props) {
        super(props);
        // the value of the input is going to be mapped to this.state.term
        this.state = {term: ""};

        //  bind the function onInputChange to an instance of SearchBar(this)
        // then replace onInputChange with this.onInputChange
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        // we need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        // clear the search input
        this.setState({term: ""});
    }

    render() {
        return (
            // the form makes a POST request to the server upon submitting
            // prevent this default behavior with the onFormSubmit event handler
            <form onSubmit={this.onFormSubmit} className="input-group">
                {/*update the state overtime using the change handler in the input*/}
                {/*the callback has a reference to this. So we need to bind the context*/}
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Search
                    </button>
                </span>
            </form>
        );
    }
}

// hook up the action creator fetchWeather to the SearchBar container
function mapDispatchToProps(dispatch) {
    // make sure the action flows down into the middleware and the reducers inside redux
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);



