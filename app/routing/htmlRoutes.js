// code to connect htmlRoutes.js to server.js

var fs = require("fs");

function handleHTML (req, res) {

var htmlPath = req.html;

    switch(htmlPath) {

        case "/survey":
            return fs.readFile(__dirname + "/survey.html", function(err, data) {  
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
                console.log(err);
             });
             
        default: "/home"
                return fs.readFile(__dirname + "/home.html", function(err, data) {
                    res.writeHead(200, { "Content-Type" : "text/html" });
                    res.end(data);
                    console.log(err);
                });


    }
}