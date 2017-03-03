var React = require('react');
module.exports = React.createClass({
    addComment: function() {
        if(this.refs.comment.value)
            this.props.addComment(this.refs.comment.value);
        this.refs.comment.value = '';
    },
    render: function() {
        return (
            <div>
                <h4>Add your Comment</h4>
                <div className='row'>
                    <div className='col-xs-8'>
                        <input className='form-control' type='text' ref='comment' placeholder='Add Comment'/>
                    </div>
                    <div className='col-xs-4'>
                        <button className='btn btn-primary' type='button' onClick={this.addComment}>Comment</button>
                    </div>
                </div>
            </div>
        );
    }
});
