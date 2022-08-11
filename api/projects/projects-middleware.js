 
 const _ = require('lodash')

 const add = (req, res, next) => {
    if(!_.get(req, 'body.name') || !_.get(req, 'body.description')) {
        return res.status(400).send({})
    }
    next()
}

const update = (req, res, next) => {
    if(_.get(req, 'body.name') || _.get(req, 'body.description') || _.get(req, 'body.completed')) {
        next()
    }
    return res.status(400).send({})
}

module.exports = {
    add, update
}