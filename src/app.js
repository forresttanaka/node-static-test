'use strict';
require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');
require('whatwg-fetch');


var ExampleComponent = React.createClass({
    getInitialState: function() {
        return {
            results: 'not yet'
        }
    },

    componentDidMount: function() {
        var result = fetch('https://www.encodeproject.org/biosamples/ENCBS254TSW/?format=json');
        result.then(response => {
            return response.json();
        }).then(text => {
            this.setState({results: text.description});
        }).catch(ex => {
            console.log('failed', ex)
        });
    },

    render: function() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <p>State: {this.state.results}</p>
            </div>
        );
    }
});

ReactDOM.render(
    <ExampleComponent />,
    document.getElementById('example')
);
