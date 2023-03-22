import express from 'express';
const app = express();
const port = 8000;

app.get('/:id',function(req, res) {
    res.send('The id you specified is '+ req.params.id);
})
app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });
app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
})