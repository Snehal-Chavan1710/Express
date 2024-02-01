const express=require('express')
const app=express()

const port=3000

/*app.get('/',(req,res)=>{
    res.send('Hello')
})

app.get('/help',(req,res)=>{
    res.send({
        name:'snehal',
        age:24,
        address:'Kolhapur'
    })
})

app.get('*',(req,res)=>{
    res.send('My Page')
})*/

const sourceRouter=require('./routes/source')
app.use('/a',sourceRouter)

app.listen(port,()=>{
    console.log(`server is up on port ${port}`)
})
