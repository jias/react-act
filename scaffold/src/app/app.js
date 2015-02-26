var HelloWorld = require('../HelloWorld');

var App = React.createClass({
    render: function () {
        return (
            <HelloWorld world="React"/>
        )
    }
});

$(function () {
    React.render(
        <App />,   
        $('#J_App')[0]
    );
});