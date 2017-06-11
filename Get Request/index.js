var express = require('express')
var app = express();

app.get('/', ( request  , responce)=>{
    console.log(request , 'request')
    responce.send('hi sabih')
});


// app.get('/sabih', ( request  , responce)=>{
//     responce.send('hi sabih siddiqui')
// });

app.post('/', function(req, res){
	res.send("You just called the post method at '/hello'!\n");
});


app.listen(1000 , ()=>{
    console.log('server is Running')
});
