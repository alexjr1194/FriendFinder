var friends = require('../data/friends.js');
var path = require('path');

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });

  app.post('/api/friends', function (req, res) {
    var match = {
      name: '',
      image: '',
      difference: 1000
    };

    var usrData = req.body;
    var usrName = usrData.name;
    var usrImage = usrData.image;
    var usrScore = usrData.score;

    var totalDifference = 0;

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name);
      totalDifference = 0;
      for (var j = 0; i < 10; i++) {
        totalDifference += Math.abs(parseInt(usrScore[j] - parseInt(friends[i].score[j])));
        if (totalDifference <= bestMatch.difference) {
          match.name = friends[i].name;
          match.image = friends[i].photo;
          match.difference = totalDifference;
        }
      }
    }
    friends.push(usrData);
    res.json(match);
  });
};
