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

// http://facebook.github.io/react/docs/more-about-refs.html
  var App = React.createClass({displayName: "App",
    getInitialState: function() {
      return {userInput: ''};
    },
    handleChange: function(e) {
      this.setState({userInput: e.target.value});
    },
    clearAndFocusInput: function() {
      this.setState({userInput: ''}); // Clear the input
      // We wish to focus the <input /> now!
      // This code executes after the component is re-rendered
        this.refs.theInput.getDOMNode().focus();   // Boom! Focused!
    },
    render: function() {
      return (
        React.createElement("div", null, 
          React.createElement("div", {onClick: this.clearAndFocusInput}, 
            "Click to Focus and Reset"
          ), 
          React.createElement("input", {
            ref: "theInput", 
            value: this.state.userInput, 
            onChange: this.handleChange}
          )
        )
      );
    }
  });



  var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var TodoList = React.createClass({displayName: "TodoList",
  getInitialState: function() {
    return {items: ['hello', 'world', 'click', 'me']};
  },
  handleAdd: function() {
    var newItems =
      this.state.items.concat([prompt('Enter some text')]);
    this.setState({items: newItems});
  },
  handleRemove: function(i) {
    var newItems = this.state.items;
    newItems.splice(i, 1);
    this.setState({items: newItems});
  },
  render: function() {
    var items = this.state.items.map(function(item, i) {
      return (
        React.createElement("div", {key: item, onClick: this.handleRemove.bind(this, i)}, 
          item
        )
      );
    }.bind(this));
    return (
      React.createElement("div", null, 
        React.createElement("button", {onClick: this.handleAdd}, "Add Item"), 
        React.createElement(ReactCSSTransitionGroup, {transitionName: "example"}, 
          items
        )
      )
    );
  }
});

React.render(
  React.createElement("div", null, 
  "ControlledInput 最多10个字符: ", React.createElement(ControlledInput, null), React.createElement("br", null), 
  "UncontrolledInput 长度控制失效: ", React.createElement(UncontrolledInput, null), React.createElement("br", null), React.createElement("br", null), React.createElement("br", null), 
  "演示Refs功能: ", React.createElement("br", null), React.createElement(App, null), 
  "TodoList: ", React.createElement("br", null), React.createElement(TodoList, null)
  ),
  document.getElementById('d2')
);






