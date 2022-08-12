module.exports = (req, res, next) => {
    if(!req.body.project_id || !req.body.description || !req.body.notes) {
        return res.status(400).send({})
    }
    return next()
}