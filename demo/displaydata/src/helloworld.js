// http://facebook.github.io/react/docs/displaying-data.html
var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return (
      React.createElement("p", null, 
        "强大的React.render方法：", React.createElement("br", null), 
        "Hello, ", React.createElement("input", {type: "text", placeholder: "Your name here"}), "!" + ' ' +
        "It is ", this.props.date.toTimeString()
      )
    );
  }
});
// 
setInterval(function() {
  React.render(
    React.createElement(HelloWorld, {date: new Date()}),
    document.getElementById('example')
  );
}, 500);