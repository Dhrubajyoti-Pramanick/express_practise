import express from 'express';
let app = express();
let result;
app.get('/',function(req,res){
   res.set({'Content-Type':'text/html'});
    res.send('Welcome to JavaTpoint');
    // res.send("hello");
    
    // if(req.accepts('text/html')) console.log('yes'); 
    console.log(req.is('html')?'true':'false'); 
    // console.log(req.param('Title'));
    res.end();
});

let server = app.listen(9000,function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://%s:%s',host,port);
    console.log("host: ",host);
    console.log("Port: ",port);
    
});