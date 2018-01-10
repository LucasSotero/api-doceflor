let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/doce-flor', { useMongoClient: true }, function (err) {
    if (err) {
        console.log('Mongoose error => ', err);
    }

    console.log('Mongoose connected');
});

module.exports = mongoose;
