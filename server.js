const express = require("express");
let app = express();

app.use(express.static(__dirname +'/./client'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.post(,(req,res)=>{
//     res.status(201).jason(req.body)
// })
app.post('/',(req,res)=>{
    console.log(req.body)
    res.status(201).send('sucsess')
})

// const data = {}
// app.get('/app',(req,res)=>{
//     res.sendFile(__dirname+'/./public/bundle.js')
// })

// app.post('/checkout',(req,res)=>{
//     console.log(req.body)
//     res.send(data)
// })
app.listen(3001,()=>{
    console.log('server is working')
})



