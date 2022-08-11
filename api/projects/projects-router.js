// Write your "projects" router here!

const express = require("express");
const router = express.Router();

const {
  get,
  insert,
  update,
  remove,
  getProjectActions,
} = require("./projects-model");
const projectMiddleware = require('./projects-middleware')

router.get('/', (req, res) => {
    return get().then((data)=>{
        res.send(data)
    }).catch((error)=>{
        res.send(error)
    })
})

router.get('/:id', (req, res) => {
    return get(req.params.id).then((data)=>{
        if (!data) {
            res.status(404).send({})
        }
        res.send(data)
    }).catch(()=>{
        res.status(404)
    })
})

router.post('/', projectMiddleware.add, (req, res) => {
    return insert(req.body).then((data)=>{
        res.send(data)
    }).catch((error)=>{
        res.status(400).send(error)
    })
})

router.put('/:id', projectMiddleware.update, (req, res) => {
    return update(req.params.id, req.body).then((data)=>{
        if (!data) {
            res.status(404).send({})
        }
        res.send(data)
    }).catch((error)=>{
        res.status(400).send(error)
    })
})

router.delete('/:id', (req, res) => {
    return remove(req.params.id).then((data)=>{
        if (!data) {
            res.status(404).send({})
        }
        res.send({})
    }).catch(()=>{
        res.status(404).send({})
    })
})

router.get('/:id/actions', (req, res) => {
    return getProjectActions(req.params.id).then((data)=>{
        res.send(data)
    }).catch(()=>{
        res.status(404).send({})
    })
})

module.exports = router