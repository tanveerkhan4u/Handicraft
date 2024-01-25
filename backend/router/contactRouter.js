const express = require('express');
const Model = require("../model/contactModel")


const router = express.Router();
router.post('/add',(req, res ) => {
  console.log(req.body)
  new Model(req.body).save()
  .then((result) => {
    res.json(result)
  }).catch((err) => {
    console.error(err)
    res.status(500).json(err);
  });
  });


  router.get('/getbyemail/:email', (req, res) => {
    console.log(req.params.email);
    
    Model.findOne({email: req.params.email})
    .then((result) => {
      res.json(result)
    }).catch((err) => {
      res.status(500).json(err);
    });
    });


    router.put('/update/:id', (req, res) => {
      Model.findByIdAndUpdate(req.params.id, req.body, {new : true})
      .then((result) => {
        res.json(result);
       }).catch((err) => {
       
       res.status(500).json(err);
     });
     });
    
    
     router.delete('/delete/:id', (req, res) => {
      Model.findByIdAndDelete(req.params.id)
      .then((result) => {
        res.json(result);
       }).catch((err) => {
       
       res.status(500).json(err);
     });
    });
    

module.exports = router;