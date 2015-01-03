var FancyCheckbox = React.createClass({displayName: "FancyCheckbox",
  render: function() {
    var $__0=      this.props,checked=$__0.checked,title=$__0.title,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{checked:1,title:1});
    var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    var fancyTitle = checked ? 'X ' + title : 'O ' + title;
    return (
      React.createElement("label", null, 
        React.createElement("input", React.__spread({},  other, 
          {checked: checked, 
          className: fancyClass, 
          type: "checkbox"})
        ), 
        fancyTitle
      )
    );
  }
});
React.render(
  React.createElement(FancyCheckbox, {checked: true, onClick: console.log.bind(console), title: "标题"}, 
    "Hello world!"
  )
  ,
  document.getElementById('d1')
);

var ControlledInput = React.createClass({displayName: "ControlledInput",
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    // validate
    this.setState({value: event.target.value.substr(0, 10)});
  },
  render: function() {
    var value = this.state.value;
    return React.createElement("input", {type: "text", value: value, onChange: this.handleChange});
  }
});

var UncontrolledInput = React.createClass({displayName: "UncontrolledInput",
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    // validate
    this.setState({value: event.target.value.substr(0, 10)});
  },
  render: function() {
    var value = this.state.value;
    return React.createElement("input", {type: "text", defaultValue: value, onChange: this.handleChange});
  }
});

React.render(
  React.createElement("div", null, 
  "ControlledInput: ", React.createElement(ControlledInput, null), React.createElement("br", null), 
  "UncontrolledInput: ", React.createElement(UncontrolledInput, null)
  ),
  document.getElementById('d2')
);






