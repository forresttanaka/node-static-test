'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

var ExampleComponent = React.createClass({
    getInitialState: function() {
        return {
            results: 'not yet'
        }
    },

    render: function() {
        var promise = newPromise((resolve, reject) => {
            resolve('it worked');
        });
        promise.then(result => {
            this.setState({results: result});
        })
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
