const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req,res) => {
  res.sendFile(__dirname + '/bmiCalculator.html')
}
)

app.post('/',(req,res) => {
  let weight = req.body.weight
  let height = req.body.height
  let bmi = weight/(height*height)

  res.send(`This your BMI ${bmi}`);  
}
)


app.listen(port,()=>{
  console.log(`Port is running ${port}`)
}
)
