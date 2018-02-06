let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongodb://lucas:lucas@ds151702.mlab.com:51702/teste'
mongoose.connect('mongodb://lucas:lucas@ds151702.mlab.com:51702/teste', { useMongoClient: true }, function(err) {
    if (err) {
        console.log('Mongoose error => ', err);
    }

    console.log('Mongoose connected');
});

module.exports = mongoose;