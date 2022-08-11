// Write your "projects" router here!

const express = require("express");

const {
  get,
  insert,
  update,
  remove,
  getProjectActions,
} = require("./projects-middleware");

const router = express.Router();


router.get('/api/projects', (req, res, next) => {

})

router.get('/api/projects/:id', (req, res, next) => {

})

router.post('/api/projects', (req, res, next) => {

})

router.put('/api/projects/:id', (req, res, next) => {

})

router.delete('/api/projects/:id', (req, res, next) => {

})

router.get('/api/projects/:id/actions', (req, res, next) => {

})