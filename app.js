
//jshint esversion:6



const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/")
});
 
   
app.post("/", function(req, res) {
    res.redirect("/")
});

app.listen(process.env.PORT || 3000, function() {
    console.log("server is working");
});


// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// \

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));

// app.get("/", function(req, res) {
//     res.sendFile(__dirname + "/")
// });

// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 5000;
// }
 
// // app.listen(port, 5000|| function() {
// //     console.log("server is working");
// // });


// app.post("/", function(req, res) {
//     res.redirect("/")
// });



// app.listen(5000, function() {
//     console.log("server started on port 3000");
// });
