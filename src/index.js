const express = require('express');
const bodyParser= require('body-parser');
const fs = require('fs');


//Firebase Code Begins.
var firebase = require("firebase");
var config = require('./myconfig.json');

require("firebase/auth");
require("firebase/firestore");

firebase.initializeApp(config);

var db = firebase.database();

//Express Code.
const app = express();
app.use(bodyParser.json());


//CRUD FOR MEDICINES.
app.post('/add-medicine', (req, res) => {
    //Python.
    res.send("Medicine added");
});

app.delete('/delete', (req, res) => {
    console.log("Item Deleted.");
});

app.get('/profile', (req, res) => {
    var arr = [];
    db.ref("dummy/medicine").on('value', (snapshot) =>{
        //snapshot.val();
        snapshot.forEach(item=> {
            
            var temp = {
                med_name: item.val().med_name,
                salts: item.val().salt
            }
            arr.push(temp);
            //console.log(temp);
        });
        
        console.log(arr);

        //Send all the database to front end.
        res.send(arr);
        
        //res.send("Home Page" + arr);    
        //return arr;
    });
});


//BASIC FRONT-END.
app.get('/', (req, res) => {
    
});

app.get('/medicine', (req, res) => {
    res.send("Medicine");
});

app.get('/food', (req, res) => {
    res.send("FoodItems");
});


//ALLERGEY TEST.
app.post('/food-allergey', (req, res) => {
    
});

app.post('/medicine-allergey', (req, res) => {
    
    var med_name = req.data;

    fs.writeFile('input.txt', med_name, (err, res) => {
        if(err) throw err;
        //console.log(res);
        var spawn = require("child_process").spawn; 
        var process = spawn('python',["./medicine.py"] );
        process.stdout.on('data', function (data) {
            //res.send(data.toString());
            //console.log(data);
            /*fs.readFileSync('output.txt', (err, res) => {
                console.log(res);
            });*/
            // console.log(data);
            console.log(data.toString());

            //use ajax in the front end and send the data back.
            return res.send(data.toString());
        });
    });
});


//EXPRESS SERVER.
const port = 5000;
app.listen(port,() => {
    console.log("Server Started on " + port);
});

