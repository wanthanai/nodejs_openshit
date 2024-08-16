const 
express = require('express'),
app = express(),
bodyParser = require('body-parser'),
http = require('http'),
https = require('https'),
fs = require('fs'),
cors = require('cors'),
routes = require('./app/routes');
require('dotenv').config();
const fileUpload = require('express-fileupload');

const { PORT, STAGE } = process.env;

// SSL Certificate setup for create server by https
// const options = {
//     key: fs.readFileSync("../ssl/afteryoumobile_prod.key"),
//     cert: fs.readFileSync("../ssl/afteryoumobile_prod.cer"),
//     ca: fs.readFileSync("../ssl/cacerts_afteryoumobileprod.cer")
// };

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors());
app.use(fileUpload());
app.use('/images', express.static('uploads'))

if(STAGE === "dev")
{
    // Dev
    http.createServer(app).listen(PORT, () => {
        console.log(` ~~~~~~~~ Server Running at Port: ${PORT} ~~~~~~~~ `);
    });
}else if(STAGE === "prod")
{
    // Prod
    https.createServer(options, app).listen(PORT, () => {
        console.log(` ~~~~~~~~ Server Running at Port: ${PORT} ~~~~~~~~ `);
    });
}


routes(app);