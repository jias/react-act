var HelloWorld = React.createClass({
    getInitialState: function () {
        return {
            world: this.props.world
        };
    },
    render: function () {
        return (
            <h1>Hello {this.state.world}</h1>
        )
    }
});

module.exports = HelloWorld;