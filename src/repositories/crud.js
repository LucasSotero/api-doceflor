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

CrudService.prototype.get = function(id) {
    return new Promise((resolve) => {
        this.model.findById(id, (err, result) => {
            if (err) {
                return reject({ err: err });
            }
            return resolve({ data: result })
        });
    });
}

CrudService.prototype.listStock = function(id) {
    return new Promise((resolve) => {
        this.model.findById(id).populate('products').exec((err, result) => {
            return resolve({ data: result })
        })
    });
}

CrudService.prototype.insert = function(data) {
    return new Promise((resolve) => {
        this.model.create(data, (err, result) => {
            if (err) {
                return reject({ err: err });
            }
            return resolve({ data: result })
        });
    });
}

CrudService.prototype.update = function(id, data) {
    return new Promise((resolve) => {
        this.model.findByIdAndUpdate(id, { $set: data }, (err, result) => {
            if (err) {
                return reject({ err: err });
            }
            return resolve({ data: result })
        });
    });
}

CrudService.prototype.updateProducts = function(id, data) {
    return new Promise((resolve) => {
        this.model.findById(id).then(function(record) {
            record.products.push(data)
            record.save().then(function(res) {
                return resolve({ data: res })
            })
        })
    })

}

CrudService.prototype.delete = function(id) {
    return new Promise((resolve) => {
        this.model.findByIdAndRemove(id, (err, result) => {
            if (err) {
                return reject({ err: err });
            }
            return resolve({ data: [] })
        });
    });
}

module.exports = CrudService;