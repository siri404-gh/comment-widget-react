var React = require('react');
var moment = require('moment');
var utils = require('./utils');

module.exports = React.createClass({
    addReply: function() {
        var reply = this.refs.reply.value;
        this.refs.reply.value = '';
        var commentId = this.props.commentId;
        this.props.addReply(reply, commentId);
    },
    upvote: function() {
        this.props.vote(this.props.commentId, null, 1);
    },
    downvote: function() {
        this.props.vote(this.props.commentId);
    },
    render: function() {
        var time = utils.passedTime(this.props.time);
        return (
            <div>
                <div className='row comment-row'>
                    <div className='col-xs-2'>
                        <img className='dp thumbnail' src={'/images/'+this.props.user+'.png'}/>
                    </div>
                    <div className='col-xs-10'>
                        <div className='row row-underline'>
                            <div className='col-xs-12'>
								<b>{this.props.user}</b>  
								<span className='pull-right'>
                                    <span className='vote glyphicon glyphicon-menu-up' onClick={this.upvote}></span>
                                    {this.props.upvotes} |
                                    <span className='vote glyphicon glyphicon-menu-down' onClick={this.downvote}></span> {this.props.downvotes}
                                </span>
								<span className='time pull-right'>{time}</span>
                            </div>
                        </div>
                        <div className='row row-underline'>
                            <div className='col-xs-12'>
                                <h4>{this.props.children}</h4>
                            </div>
                        </div>
                        <div className='row'>
                            {this.props.replies}
                        </div>
                        <div className='row'>
                            <div className='col-xs-9'>
                                <input className='form-control' type='text' ref='reply'/>
                            </div>
                            <div className='col-xs-3'>
                                <button className='btn btn-default' type='button' onClick={this.addReply}>Reply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
