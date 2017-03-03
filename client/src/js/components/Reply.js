var React = require('react');
var utils = require('./utils');

module.exports = React.createClass({
    upvote: function() {
        this.props.vote(this.props.commentId, this.props.replyId, 1);
    },
    downvote: function() {
        this.props.vote(this.props.commentId, this.props.replyId);
    },
    render: function() {
        var time = utils.passedTime(this.props.time);
        return (
            <div className='col-md-12'>
                <div className='row reply-row'>
                    <div className='col-xs-2'>
                        <img className='dp-small thumbnail' src={'/images/'+this.props.user+'.png'}/>
                    </div>
                    <div className='col-xs-10'>
                        <div className='row row-underline-normal'>
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
                        <div className='row row-underline-normal'>
                            <div className='col-md-12'>
                                <h4>{this.props.children}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
