var FancyCheckbox = React.createClass({
  render: function() {
    var { checked, title, ...other } = this.props;
    var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    var fancyTitle = checked ? 'X ' + title : 'O ' + title;
    return (
      <label>
        <input {...other}
          checked={checked}
          className={fancyClass}
          type="checkbox"
        />
        {fancyTitle}
      </label>
    );
  }
});
React.render(
  <FancyCheckbox checked={true} onClick={console.log.bind(console)} title={"标题"}>
    Hello world!
  </FancyCheckbox>
  ,
  document.getElementById('d1')
);

var ControlledInput = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    // validate
    this.setState({value: event.target.value.substr(0, 10)});
  },
  render: function() {
    var value = this.state.value;
    return <input type="text" value={value} onChange={this.handleChange} />;
  }
});

var UncontrolledInput = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    // validate
    this.setState({value: event.target.value.substr(0, 10)});
  },
  render: function() {
    var value = this.state.value;
    return <input type="text" defaultValue={value} onChange={this.handleChange} />;
  }
});

// http://facebook.github.io/react/docs/more-about-refs.html
  var App = React.createClass({
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
        <div>
          <div onClick={this.clearAndFocusInput}>
            Click to Focus and Reset
          </div>
          <input
            ref="theInput"
            value={this.state.userInput}
            onChange={this.handleChange}
          />
        </div>
      );
    }
  });



var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var TodoList = React.createClass({
  getInitialState: function() {
    return {items: ['hello', 'world', 'click', 'me']};
  },
  handleAdd: function() {
    var newItems = this.state.items.concat([prompt('Enter some text')]);
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
        <div key={item} onClick={this.handleRemove.bind(this, i)}>
          {item}
        </div>
      );
    }.bind(this));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup transitionName="example">
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

React.render(
  <div>
  ControlledInput 最多10个字符: <ControlledInput /><br/>
  UncontrolledInput 长度控制失效: <UncontrolledInput /><br/><br/><br/>
  演示Refs功能: <br/><App /><br/><br/><br/>
  TodoList: <br/><TodoList />
  </div>,
  document.getElementById('d2')
);






