// server.js

var express = require('express');
 var   path = require('path');
var    bodyParser = require('body-parser');
 var   cors = require('cors');

var   mongoose = require('mongoose');


var index  = require('./routes/index');
var tasks  = require('./routes/tasks');


var app = express();

var port = 4000;
// app.use(function(res,req,err)
// {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Header',"Origin,X-Requested-with,Content-typeof,Accept");
//  next();
// })
app.use((req, res, next) => {
  req.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Header',"Accept");
  next();
});
// app.use(cors);
// view engine
app.set('views' ,path.join(__dirname,'views'));
app.set('view engine' ,'ejs');
app.engine('html',require('ejs').renderFile);

// set static folder
app.use(express.static(path.join(__dirname,'client')))

// body parser
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// app.use('/',index);
// app.use('/api',tasks);
app.use('/api',tasks);


app.listen(port ,function(){
  console.log("Listening 4000")
});

  //  const shoppingCartRoute = require('./routes/product.route');
    // mongoose.Promise = global.Promise;
    // mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    //   () => {console.log('Database is connected') },
    //   err => { console.log('Can not connect to the database'+ err)}
    // );
   // define model =================
//    var Todo = mongoose.model('Todo', {
//     text : String
// });

//     const app = express();
//     app.use(cors());
//     app.use(bodyParser.json())
//     app.post('/api/products' ,function(req,res)
//     {
//       Todo.create({
//         text:req.body.text,
//         done:false
//       },
//       function(err ,Todo)
//       {
//         if(err)
//         res.send(err)
//         res.json(Todo);
//       })
//     })
    // app.use("/add" ,shoppingCartRoute)
// app.route('/add').post((req, res) => {
//   res.send(201, req.body)
// })
    // app.use(bodyParser.json());
    // app.use(cors());
    // app.use('/airLineData', shoppingCartRoute);
    // const port = process.env.PORT || 4000;

    // const server = app.listen(port, function(){
    //  console.log('Listening on port ' + port);
    // });