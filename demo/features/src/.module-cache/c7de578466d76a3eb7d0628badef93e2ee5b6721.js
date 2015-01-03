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
  React.createElement(FancyCheckbox, {checked: true, onClick: console.log.bind(console), title: abc}, 
    "Hello world!"
  ),
  document.body
);