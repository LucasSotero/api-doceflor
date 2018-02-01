const CrudService = require('../repositories/crud');

function BaseController(model) {
    this.service = new CrudService(model);

    this.list = (req, res) => {
        this.service.list()
            .then((result) => {
                return res.json(result);
            })
    }

    this.post = (req, res) => {
        this.service.insert(req.body)
            .then((result) => {
                return res.json(result);
            })
            .catch((err) => {
                return res.status(422).json(err);
            })
    }

    this.put = (req, res) => {
        this.service.update(req.params.id, req.body)
            .then((result) => {
                return res.json(result);
            })
            .catch((err) => {
                return res.status(422).json(err);
            })
    }


    this.getOne = (req, res) => {
        this.service.getOne(req.params.search)
            .then((result) => {
                return res.json(result);
            })
            .catch((err) => {
                return res.status(404).json(err);
            })
    }

    this.getAll = (req, res) => {
        this.service.getAll(req.params.search)
            .then((result) => {
                return res.json(result);
            })
            .catch((err) => {
                return res.status(404).json(err);
            })
    }

    this.view = (req, res) => {
        this.service.get(req.params.id)
            .then((result) => {
                return res.json(result);
            })
            .catch((err) => {
                return res.status(404).json(err);
            })
    }

    this.delete = (req, res) => {
        this.service.delete(req.params.id)
            .then((result) => {
                return res.json(result);
            })
            .catch((err) => {
                return res.status(404).json(err);
            })
    }
    this.report = (req, res) => {
        this.service.saleReport(req.body)
            .then((result) => {
                return res.json(result);
            })
            .catch((err) => {
                return res.status(404).json(err);
            })
    }
    this.getDetails = (req, res) => {
        this.service.listStock(req.params.id)
            .then((result) => {
                return res.json(result);
            })
            .catch((err) => {
                return res.status(404).json(err);
            })
    }
    this.postDetails = (req, res) => {
        this.service.updateProducts(req.params.id, req.body)
            .then((result) => {
                return res.json(result);
            })
            .catch((err) => {
                return res.status(422).json(err);
            })
    }
    this.putDetails = (req, res) => {
        this.service.deleteProducts(req.params.id, req.body)
            .then((result) => {
                return res.json(result);
            })
            .catch((err) => {
                return res.status(404).json(err);
            })
    }
}

module.exports = BaseController