require('dotenv').config()
const {sequelize,currency}=require('./models/')
const express= require('express');
// const {sequelize}=require('./models')
const app = express();
// const connection=require('./db-connection/connect')
// const jwt=require('jsonwebtoken')
app.use(express.json())
app.use(express.static("public"))
app.set("view engine","ejs")
app.listen(process.env.PORT,async ()=>{
    console.log("Server up at port := ",process.env.PORT)
    await sequelize.authenticate();
  console.log("Database connected!");
})
// connection();
app.post('/',async (req,res)=>{
    const curr=await currency.findAll();
    let tableheader='<table><tr><th>Currency ID</th><th>Value</th><th>label</th><th>symbol</th><th>Created At</th><th>Updated AT </th></tr>'
const len=curr.length;
console.log(len)
for(let i =0;i<len;++i)
{
    const present=curr[i];
    tableheader=tableheader+'<tr><th>'+present.currency_id+'</th><th>'+present.value+'</th><th>'+present.label+'</th><th>'+present.symbol+'</th><th>'+present.createdAt+'</th><th>'+present.updatedAt+'</th></tr>'
}
tableheader+='</table>';
res.json(tableheader);
});
app.get('/',async (req,res)=>{
res.render('table.ejs')
})