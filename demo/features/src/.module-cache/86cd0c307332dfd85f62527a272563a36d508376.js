var FancyCheckbox = React.createClass({displayName: "FancyCheckbox",
  render: function() {
    var { checked, title, ...other } = this.props;
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
  React.createElement(FancyCheckbox, {checked: true, onClick: console.log.bind(console)}, 
    "Hello world!"
  ),
  document.body
);