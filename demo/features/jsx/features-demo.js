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

React.render(
  <div>
  ControlledInput: <ControlledInput /><br/>
  UncontrolledInput: <UncontrolledInput />
  </div>,
  document.getElementById('d2')
);






