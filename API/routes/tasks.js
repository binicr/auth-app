var express = require('express');
var router = express.Router();
var mongojs = require('mongoose')
const path = require('path');
// var db = mongojs('mongodb://localhost:27017/mydb?readPreference=primary&appname=MongoDB%20Compass&ssl=false',['tasks'])

var db = mongojs.connect("mongodb://localhost:27017/mydb",{useNewUrlParser:true} ,function(err, response){  
   if(err){ 
    //    console.log( err);
    }  
   else{ 
    //    console.log('Connected to ' + db, ' + ', response); 
    }  
}); 


var Product = require('../models/product.ts');
console.log("product->"+new Product)
//  Get all Tasks
router.get('/tasks',function(req,res,next)
{

    Product.find(function(err,tasks)
    {
        if(err)
        {
            res.send(err);
        }
        res.json(tasks);
    })
})
// Get single Id
router.get('/tasks/:id',function(req,res,next)
{
    db.tasks.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,task)
    {
        if(err)
        {
            res.send(err);
        }
        res.json(task);
    })
})

// save data
router.post('/task',function(req,res,next)
{
    // res.header('Access-Control-Allow-Origin', '*');
    console.log(req.body);
    console.log(req.body.id);
  
    // var task  = new Product(req.body);
    var myData = new Product(req.body);
    
    console.log("22"+myData);
      // Create a Tutorial
//   const tutorial = new Product({
//     name: req.body.name,
//     description: req.body.description,
//     imagePath: req.body.imagePath ,
//     price:req.body.imagePath,
//     id:req.body.id
//   });
    console.log("Item saved to database"+req.body.name);
    myData.save()
      .then(item => {       
        // res.json(myData)
        res.send("item saved to database");
      })
      .catch(err => {
        res.send("unable to save to database");
      });
})

// delete
router.delete('/tasks/:id',function(req,res,next)
{
    db.tasks.remove({_id:mongojs.ObjectId(req.params.id)},function(err,task)
    {
        if(err)
        {
            res.send(err);
        }
        res.json(task);
    })
})

// update
router.put('/tasks/:id',function(req,res,next)
{
    
    var task  = req.body;
    var upTask = {};

    db.tasks.update({_id:mongojs.ObjectId(req.params.id)},task,{},function(err,task)
    {
        if(err)
        {
            res.send(err);
        }
        res.json(task);
    })
})

module.exports = router;