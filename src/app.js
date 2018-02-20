var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog')

//app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


var postSchema = new mongoose.Schema ({
    title : String,
    titleDesc : String
})

var loginSchema = new mongoose.Schema ({
    name : String,
    password : String
})

var Post = mongoose.model('Post', postSchema)
var Login = mongoose.model('Login', loginSchema)


app.login('/login', function(req,res){
    Login.create(req.body, function(err, data){
        if(!err){
            res.send(data)
        }
    })
})


app.post('/post', function(req,res){
    Post.create(req.body, function(err, data){
      if(!err){
          res.send(data)
      }
    })
})

app.get('/post', function(req,res){
    Post.find({}, function(err,data){
        if(!err){
            res.send(data)
        }
    })
})

app.listen(2000, function(){
    console.log('Server running on port 2000')
})