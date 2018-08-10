import React, {Component} from 'react';

export default class SearchBar extends Component {
    // set our state up with the constructor
    constructor(props) {
        super(props);
        // the value of the input is going to be mapped to this.state.term
        this.state = {term: ""};

        //  bind the function onInputChange to an instance of SearchBar(this)
        // then replace onInputChange with this.onInputChange
        this.onInputChange = this.onInputChange.bind(this);

    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        // we need to go and fetch weather data
    }

    render() {
        return (
            // the form makes a POST request to the server upon submitting
            // prevent this default behavior with the onFormSubmit event handler
            <form onSubmit={this.onFormSubmit} className="input-group">
                {/*update the state overtime using the changehandler in the input*/}
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
};


