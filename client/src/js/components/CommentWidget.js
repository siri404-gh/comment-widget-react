var React = require('react');
var AddComment = require('./AddComment');
var IndividualComment = require('./IndividualComment');
var Reply = require('./Reply');
var moment = require('moment');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            comments :[],
            user: 'Guest'
        }
    },
    addComment: function(comment) {
        var comments = this.state.comments;
        var timestamp = moment();
        var timestamp = moment().format();
        var timestamp = moment().unix();
        comments.push({
            comment: comment,
            replies: [],
            timestamp: timestamp,
            user: this.state.user,
            upvotes: 0,
            downvotes: 0
        });
        this.setState({
            comments: comments
        });
    },
    addReply: function(reply, commentId) {
        var self = this;
        var comments = this.state.comments;
        var timestamp = moment();
        var timestamp = moment().format();
        var timestamp = moment().unix();
        comments.forEach(function(comment, i) {
            if(i == commentId) {
                comment.replies.push({
                    value: reply,
                    upvotes: 0,
                    downvotes: 0,
                    timestamp: timestamp,
                    user: self.state.user
                });
            }
        });
        this.setState({
            comments: comments
        });
    },
    vote: function(commentId, replyId, up) {
        var comments = this.state.comments;
        comments.forEach(function(comment, i) {
            if (i == commentId) {
                if(replyId || replyId == 0) {
                    comment.replies.forEach(function(reply, i) {
                        if (i == replyId) {
                            if(up)
                                reply.upvotes++;
                            else reply.downvotes++;
                        }
                    });
                } else {
                    if(up)
                        comment.upvotes++;
                    else comment.downvotes++;
                }
            }
        });
        this.setState({
            comments: comments
        });
    },
    getComments: function() {
        var comms = [];
        var self = this;
        this.state.comments.forEach(function(comment, i) {
            var replies = [];
            comment.replies.forEach(function(reply, j) {
                replies.push(
                    <Reply key={j} replyId={j} commentId={i} vote={self.vote} upvotes={reply.upvotes} user={reply.user} downvotes={reply.downvotes} time={reply.timestamp}>{reply.value}</Reply>
                );
            });
            comms.push(
                <IndividualComment key={i} commentId={i} upvotes={comment.upvotes} downvotes={comment.downvotes} replies={replies} addReply={self.addReply} time={comment.timestamp} user={comment.user} vote={self.vote}>{comment.comment}</IndividualComment>
            );
        });
        return comms;
    },
    selectUser: function() {
        this.setState({
            user: this.refs.user.value
        });
    },
	render: function(){
        var comments = this.getComments();
		return (
            <div>
                <div className='row'>
                    <div className='col-md-4'>
                        <h4>Select User</h4>
                        <select ref='user' id='user' className='inline form-control' name='user' onChange={this.selectUser}>
                            <option value='Guest'>Guest</option>
                            <option value='Aryabhatta'>Aryabhatta</option>
                            <option value='Ramanujan'>Ramanujan</option>
                            <option value='Einstein'>Einstein</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <AddComment addComment={this.addComment}/>
                        {comments}
                    </div>
                </div>
            </div>
		);
	}
});
