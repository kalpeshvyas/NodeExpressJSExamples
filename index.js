const { response } = require('express');
var express = require('express');
var app = express();

var routing = require('./routing.js');
app.use('/routing',routing)

app.set('view engine','pug')
app.set('views','./views');

app.get('/', (req, res) => {
    res.send("Hello World");
    
});

app.get('/home', (req, res) =>{
    res.render('home',{user : {name: "Kalpesh", age : 36}});
})

app.get('/:para', (req, res) => {
    res.send("Hello World with id " + req.params.para);
}); 

app.post('/', (req, res)=>{
    res.send("Your request posted");
})


app.get('/routing/:para1/:para2', (req, res) => {
    res.send('getting the requests para1 = '+ req.params.para1 + ', para2 = '+req.params.para2);
})

app.all('/test',(req, res) => {
    res.send('all types of requests');
});

app.listen(5000);