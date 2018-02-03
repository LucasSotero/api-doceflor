let mongoose = require('mongoose')
function CrudService(model) {
    this.model = model;
}

CrudService.prototype.list = function() {
    return new Promise((resolve) => {
        this.model.find({}).exec((err, result) => {
            return resolve({ data: result })
        })
    });
}

CrudService.prototype.getOne = function(data) {
    return new Promise((resolve) => {
        this.model.findOne({ barCode: data }, (err, result) => {
            if (err) { return reject({ err: err }) }
            return resolve({ data: result })
        });
    });
}

CrudService.prototype.getAll = function(data) {
    return new Promise((resolve) => {
        this.model.find({ client: data }, (err, result) => {
            if (err) { return reject({ err: err }) }
            return resolve({ data: result })
        });
    });
}


CrudService.prototype.get = function(id) {
    return new Promise((resolve) => {
        this.model.findById(id, (err, result) => {
            if (err) { return reject({ err: err }) }
            return resolve({ data: result })
        });
    });
}

CrudService.prototype.listStock = function(id) {
    return new Promise((resolve) => {
        this.model.findById(id, (err, result) => {
            if (err) { return reject({ err: err }) }
            return resolve({ data: result })
        });
    });
}

CrudService.prototype.insert = function(data) {
    return new Promise((resolve) => {
        this.model.create(data, (err, result) => {
            if (err) { return ({ err: err }) }
            return this.model.find({}).exec((err, result) => {
                return resolve({ data: result })
            })
        });
    });
}

CrudService.prototype.update = function(id, data) {
    return new Promise((resolve) => {
        this.model.update({ "_id": id }, { $set: data }, (err, result) => {
            if (err) { return ({ err: err }) }
            return this.model.find({}).exec((err, result) => {
                return resolve({ data: result })
            })
        });
    });
}

CrudService.prototype.deleteProducts = function(id, data) {
    return new Promise((resolve) => {
        this.model.update({ "_id": id }, { $pull: data }, (err, result) => {
            if (err) { return ({ err: err }) }
            return this.model.findById(id).exec((err, result) => {
                return resolve({ data: result })
            })
        });
    });
}

CrudService.prototype.updateProducts = function(id, data) {
    return new Promise((resolve) => {
        this.model.update({ "_id": id }, { $push: data }, (err, result) => {
            if (err) { return ({ err: err }) }
            return this.model.findById(id).exec((err, result) => {
                return resolve({ data: result })
            })
        });

    });
}

// CrudService.prototype.updateProducts = function(id, data) {
//     return new Promise((resolve) => {
//         this.model.findById(id).then(function(record) {
//             record.products.push(data)
//             record.save().then(function(res) {
//                 return resolve({ data: res })
//             })
//         })
//     })

// }


// CrudService.prototype.deleteProducts = function(id, data) {
//     return new Promise((resolve) => {
//         this.model.findById(id).then(function(record) {
//             record.products.pull(data)
//             record.save().then(function(res) {
//                 return resolve({ data: res })
//             })
//         })
//     })

// }

CrudService.prototype.delete = function(id) {
    return new Promise((resolve) => {
        this.model.findByIdAndRemove(id, (err, result) => {
            if (err) { return ({ err: err }) }
            return this.model.find({}).exec((err, result) => {
                return resolve({ data: result })
            })
        });
    });
}

//{ date: '$date', pay: '$pays', client: '$clients', product: '$products' }

CrudService.prototype.saleReport = function(data) {
    console.log(data)
    return new Promise((resolve) => {
        this.model.aggregate(
            [{
                    $match: {
                        date: {
                            $gte: new Date(data.start),
                            $lt: new Date(data.end)
                        },
                        'pays.method': { $eq: data.methods },
                        client: { $eq: mongoose.Types.ObjectId(data.clients) },
                        products: { $eq: mongoose.Types.ObjectId(data.products) }
                    }
                },
                {
                    $group: {
                        _id: { date: '$date', pay: '$pays.method', client: '$clients', product: '$products' },
                        sales: {$sum: 1}
                    }
                }
            ],
            function(err, result) {
                if (err) {
                    return reject({ err: err })
                }
                return resolve({ data: result })
            })
    })
}

module.exports = CrudService;