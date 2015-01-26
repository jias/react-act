var Header = React.createClass({
  render: function() {
    return (
        <h2>
          {this.props.title}
        </h2>
    );
  }
});
module.exports = {
    Header: Header
}