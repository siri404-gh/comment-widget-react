var moment = require('moment');
module.exports = {
    passedTime: function(commentTimestamp) {
        var timestamp = moment();
        var timestamp = moment().format();
        var timestamp = moment().unix();
        var diff = (timestamp - commentTimestamp);
        if(diff <= 60) return 'Just now..';
        else if (diff > 60 && diff <=120) return 'A minute ago..';
        else if (diff > 120 && diff <=300) return 'Few minutes ago..';
        else if (diff >=300 && diff <= 3600) return 'Less than an hour ago..';
        else return 'Over than an hour ago..';
    }
}
