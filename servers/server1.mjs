import express from "express";
import * as server2 from "./server2.mjs";
const app = express();
const port = 8000

// app.get('/', function (req,res) {
//     res.send('Hello Unfair World!')
// })
// app.get('/home', function (req,res) {
//     res.send('Welcome to Home Page')
// })
// app.post('/home', function (req,res) {
//     console.log('post called');
//     res.send('Welcome to Home Page(post-method)')
// })
// // Creating a POST request
// app.post('/api', (req, res) => {
//    console.log("POST Request Called for /api endpoint")
//    res.send("POST Request Called")
// })
app.post('/', function (req,res) {
    console.log("hi dhrubs...csn i hasve your number")
    res.send('Welcome to About Us Page')
})
// app.get('/', function (req,res) {
//     console.log("hi dhrubs...csn i hasve your number")
//     res.send('Welcome to About Us Page')
// })
app.get('/About-Us', function (req,res) {
    res.send('Welcome to About Us Page')
})

// app.put('/', function (req,res) {
//     res.send('PUT request called')
// })
// app.get('/Contact-Us', function (req,res) {
//     res.send('Welcome to Contact Us Page')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on ${port}`)
// })
//router
app.use('/server2',server2.router);
app.listen(port,()=>{
    console.log("Server running at 8000")
});