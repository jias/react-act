var CommentBox = React.createClass({displayName: "CommentBox",
    getInitialState: function () {
        return {
            data: []
        };
    },
    render: function () {
        return (
            React.createElement("div", {className: "commentBox"}, 
                React.createElement("h1", null, "Comments"), 
                React.createElement(CommentList, {data: this.state.data}), 
                React.createElement(CommentForm, null)
            )
        )
    }
});

React.render(
    React.createElement(CommentBox, {url: "comments.json"}),
    document.getElementById('content')
);