var friendData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/survey", function(req, res) {
      res.json(userAnswers);
  });


//   app.post("/api/survey", function(req, res) {
//       if ($("#submitBtn").click(function () {
//           userAnswers.push(req.body);
//           res.json(true);
//       } else {
//           console.log(err);
//       }



//   });


}