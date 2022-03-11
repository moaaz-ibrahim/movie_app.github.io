const { application } = require('express');
const express = require('express');
const dataStore = require('nedb');
const app = express();


var port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.static('public'));
const database = new dataStore('Database.db');
database.loadDatabase();

var visitors = 0;
app.get('/' , (req,res)=>{
    
})
app.post('/api' , (req,res)=>{
    console.log(visitors);
    var data = req.body;
    console.log(data)
    database.insert(data);
  

    res.json(req.body)
})
app.get('/getList' , (req,response)=>{
   
    database.find({} , (err,res)=>{
        var names = [];
        if (res == ''){
            response.json('Empty List');
        }
        else {

            res.forEach(data=>{
               names.push(data.name)
            })
            response.json(names)
        }
     
    })
    
})
database.find({} , (err,res)=>{
   if (res=='')
   console.log('Empty DB');
   else console.log('DB')
})
// console.log(visitors);
// database.remove({"name":"To All the Boys I've Loved Before "})
app.listen(port , ()=>console.log('Listening on ' + port + ' ....'));