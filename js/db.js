var mongoose = require("mongoose");

var db = mongoose.createConnection('127.0.0.1:8080', 'test');

db.once('open', function() {
  var scoreSchema = new mongoose.Schema({
    name: String,
    score: Number
  });

  var Entry = db.model('entry', scoreSchema);

  var me = new Entry({ name: 'Yong-Soo', score: 55 });

  console.dir(me);
  me.save();

});
