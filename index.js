const path=require('path')
const fs=require('fs')
var express=require('express')
var app=express()
app.listen(8059)
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

//Request after user submits the answers
app.post('/submit', (req, res) => {
    const userAnswers = req.body; 
    console.log(userAnswers);
    //Creating temporary JSON file with user Responses 
    fs.writeFileSync('tempfiles/temp.json',JSON.stringify(userAnswers))
    res.sendFile(path.join(__dirname, 'public/result.html'));
  });

//Request to show user's score 
  app.post('/fetchAns',(req,res)=>{
    let temp=fs.readFileSync(path.join(__dirname,'/tempfiles/temp.json'))
    res.send(temp);
  })