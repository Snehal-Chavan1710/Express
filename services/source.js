const gets=(req,res)=>{
    res.send("within get")
}
const puts=(req,res)=>{
    res.send("within put")
}
const deletes=(req,res)=>{
    res.send("within delete")
}
const posts=(req,res)=>{
    res.send("within post")
}
module.exports={gets,puts,deletes,posts}