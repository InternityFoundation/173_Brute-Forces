const express = require('express');
const bodyParser= require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/medicine', (req, res) => {
    res.send("Medicine");
});

app.get('/food', (req, res) => {
    res.send("FoodItems");
});

app.post('/add-medicine', (req, res) => {
    res.send("Medicine added");
});

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

const port = 5000;
app.listen(port,() => {
    console.log("Server Started on " + port);
});

