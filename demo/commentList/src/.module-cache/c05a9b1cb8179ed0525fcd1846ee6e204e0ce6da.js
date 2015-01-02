var CommentBox = React.createClass({displayName: "CommentBox",
    getInitialState: function () {

    },
    render: function () {
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, "Comments"), 
                React.createElement(CommentList, {data: this.props.data}), 
                React.createElement(CommentForm, null)
            )
        )
    }
});
var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];
React.render(
    React.createElement(CommentBox, {url: "comments.json"}),
    document.getElementById('content')
);