const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")

//Instantiate express server
const app = express()

//setup middleware
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodetuts"
})

const engine = {
    "survey_endpoint": [{
        "id": "1",
        "name": "Telefonica - Survey 1",
        "description": "Description of Telefonica - Survey 1",
        "project": "http://localhost:8000/projects/api/project/1",
        "completion_deadline": "15-03-2021 9:30 am",
        "completion_status": "50%"
      },
  
      {
        "id": "2",
        "name": "Telefonica - Survey 2",
        "description": "Description of Telefonica - Survey 2",
        "project": "http://localhost:8000/projects/api/project/1",
        "completion_deadline": "21-03-2021 05:00 pm",
        "completion_status": "30%"
      }]
}

app.get("/", (req, res) =>{
    // db.query("select * from sample", (err, result) => {
        
    //     if(err) console.log(err)
    //     res.send(result)
    // })

    res.send(engine)
})

// serverwatch
app.listen(3001, () => {
    console.log("Server is running on port 3001")
})