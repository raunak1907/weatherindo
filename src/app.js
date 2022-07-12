
const express=require("express");
const request=require("requests");
const path=require("path");
const hbs=require("hbs");

const app=express();
const port=process.env.PORT || 3000;
// public static
const staticpath=path.join(__dirname,"../public");
const partialspath=path.join(__dirname,"../tempelates/partials");
const tempelatespath=path.join(__dirname,"../tempelates/views");


app.set('view engine',"hbs");
app.set('views',tempelatespath);
hbs.registerPartials(partialspath);

app.use(express.static(staticpath));



app.get("/",(req,res)=>{
  res.render("index");
});
app.get("/about",(req,res)=>{
  res.render("about");
});
app.get("/weather",(req,res)=>{
  res.render("weather");
});
app.get("*",(req,res)=>{
  res.render("404error");
});

app.listen(port,()=>{
    console.log(`${port}`);
});



