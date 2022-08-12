 const add = (req, res, next) => {
    if(!req.body.name || !req.body.description) {
        return res.status(400).send({})
    }
    return next()
}

const update = (req, res, next) => {
    if(req.body.name && req.body.description && 'completed' in req.body) {
        return next()
    }
    return res.status(400).send({})
}
module.exports = {
    add, update
}