/*Split terminal
npm start to start server
npm run build-dev to start webpack*/

/*Bring in the packages */
const dotenv = require('dotenv');
var path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const fetch = require("node-fetch");

/*So we can use the API key stored in the .ENV*/
dotenv.config();

// const mockAPIResponse = require('./mockAPI.js')

/*Setup the app*/
app.use(express.static("dist"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

/*Variables*/
const meaningURL = "https://api.meaningcloud.com/sentiment-2.1";
const API_Key = process.env.API_KEY;
let language = "en"; //in case we need to use a different language
let fullURL = meaningURL+"?key="+API_Key+"&lang="+language+"&url=";
let formInput; //User input from the form

console.log(__dirname)
console.log("Check URL key:", fullURL);

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
})

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

/*POST*/
app.post('/post', async(req, res)=>{
    console.log("In the POST route:", req.body);
    const response = await fetch(`${fullURL}${req.body.userInput}`, {method: 'POST'})
    console.log(response);
    try{
        const data = await response.json();
        console.log("Do we have data? ", data);
        res.send(data);
    }catch(error){
        console.log("Oops", error);
    }
});

/*Trying to get it to run with a seperate function...*/
// app.post('/post', getMCAnalysis(req, userInput));

// const getMCAnalysis = async(req, userInput)=>{
//     userInput = req.body.url;
//     console.log("In the POST route:", userInput);
//     const fullURL = await fetch(`${meaningURL}?key=${$API_Key}&lang=en&url=${userInput}`, {method: 'POST'})
//     console.log();
//     try{
//         const data = await response.json();
//         console.log("Do we have data? ", data);
//         res.send(data);
//     }catch(error){
//         console.log("Oops", error);
//     }
// }