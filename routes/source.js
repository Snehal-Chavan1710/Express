const express=require('express')
const router=express.Router()
const {gets,puts,deletes,posts}=require('../services/source')

//console.log(info)

router.get('/',gets).put('/',puts).delete('/',deletes).post('/d',posts)

module.exports=router