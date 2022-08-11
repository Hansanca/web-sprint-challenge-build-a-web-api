// Write your "actions" router here!

const express = require("express");

const {
    get,
    insert,
    update,
    remove,
} = require('./actions-middlware');

const router = express.Router();


router.get('/api/actions', (req, res, next) => {

})

router.get('/api/actions/:id', (req, res, next) => {

})

router.post('/api/actions', (req, res, next) => {

})

router.put('/api/actions/:id', (req, res, next) => {

})

router.delete('/api/actions/:id', (req, res, next) => {

})