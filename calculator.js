const express=require("express");
const bodyParser=require("body-parser");

const app= express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
    // console.log(__dirname);
})

app.post("/",function(req,res){
    // console.log(req.body);
    var a = Number(req.body.num1); //here num1 is from the index html name
    var b = Number(req.body.num2); //here num2 is from the index html name
    var result=a+b;
    res.send("The result of the calculation is: "+result);
})

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
    // console.log(__dirname);
})

app.post("/bmicalculator",function(req,res){
    // console.log(req.body);
    var w = parseFloat(req.body.weight); 
    var h = parseFloat(req.body.height);
    var result=w/(h*h);
    res.send("Your BMI is: "+result);
})

app.listen(3000,function(){
    console.log("Server started on port 3000");
})