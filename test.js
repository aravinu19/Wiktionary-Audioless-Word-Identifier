var sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
var db = new sqlite3.Database('./DB/lorem.db');
var audio_check = require('./audio_checker');
 

let primary_url = "https://ta.wiktionary.org/wiki/அஃகு"; //அஃகு அகடு

// db.serialize(function() {
//   db.run("CREATE TABLE lorem (info TEXT)");
 
//   var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (var i = 0; i < 10; i++) {
//       stmt.run("Hello World " + i);
//   }
//   stmt.finalize();
 
//   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//       console.log(row.id + ": " + row.info);
//   });
// });
 
// db.close();

audio_check(primary_url, (ret) => {
    
    
    
})