import express from 'express';
export const router = express.Router();

router.get('/get',(req,res)=>{
    res.send('Get route on things.');
});
// router.post('/',(req,res)=>{
//     res.send('Post route on things.');
// });