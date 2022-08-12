const express = require("express");
const router = express.Router();

const {
  get,
  insert,
  update,
  remove,
} = require("./actions-model");
const actionMiddleware = require('./actions-middlware')

router.get('/', (req, res) => {
    return get().then((data)=>{
        return res.send(data)
    }).catch((error)=>{
        return res.send(error)
    })
})

router.get('/:id', (req, res) => {
    return get(req.params.id).then((data)=>{
        if (!data) {
            return res.status(404).send({})
        }
        return res.send(data)
    }).catch(()=>{
        return res.status(404)
    })
})

router.post('/', actionMiddleware, (req, res) => {
    return insert(req.body).then((data)=>{
        return res.send(data)
    }).catch((error)=>{
        return res.status(400).send(error)
    })
})

router.put('/:id', actionMiddleware, (req, res) => {
    return update(req.params.id, req.body).then((data)=>{
        if (!data) {
            return res.status(404).send({})
        }
        return res.send(data)
    }).catch((error)=>{
        return res.status(400).send(error)
    })
})

router.delete('/:id', (req, res) => {
    return remove(req.params.id).then((data)=>{
        if (!data) {
            return res.status(404).send({})
        }
        return res.send(data)
    }).catch(()=>{
        return res.status(404).send({})
    })
})

module.exports = router