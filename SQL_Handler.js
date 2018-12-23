var sqlite3 = require('sqlite3').verbose();
var fs = require('fs');

var create_db = function(db_name, callback){

    if (fs.existsSync(`./DB/${db_name}.db`)) {
        callback();
        return;
    }

    try {
        
        var db = new sqlite3.Database(`./DB/${db_name}.db`);

        db.serialize(function() {
            db.run(`CREATE TABLE words (word TEXT UNIQUE)`);
        });

        db.close();

    } catch (error) {
        
        console.log(`Table Already Exists ! ${error}`);
    
    } finally {
    
        callback();
    
    }

};

var insert_list_to_db = function(data_to_insert, db_name, callback){

    var db = new sqlite3.Database(`./DB/${db_name}.db`);

    db.serialize(function() {
        
        var statement = db.prepare("INSERT INTO words VALUES (?)");
        var count = 1;
        var total_elements = data_to_insert.length;
        data_to_insert.forEach(element => {
            statement.run(element);
            console.clear();
            console.log(`Stored ${count} out of ${total_elements} into the Database`);
        });

        statement.finalize();
        
    });

    db.close();

    callback();

};

var insert_immediately = function(data_to_insert, db_name){

    var db = new sqlite3.Database(`./DB/${db_name}.db`);

    var statement = db.prepare("INSERT INTO words VALUES (?)");
    
    statement.run(data_to_insert);
    statement.finalize();

    db.close();

    console.log(`inserted the word: ${data_to_insert}`);

};

var remove_word_from_db = function(word_to_remove, db_name, callback){

    var db = new sqlite3.Database(`./DB/${db_name}.db`);



};

var list_data_from_db = function(db_name, callback){

    var db = new sqlite3.Database(`./DB/${db_name}.db`);
    var list_data = [];

    db.serialize(function() {
        db.all("SELECT word FROM words", (err, rows) => {
            if(!err){
                callback(rows);
            }else{
                console.log(err);
            }
        });
    });

    db.close();

};

module.exports.create_db = create_db;
module.exports.insert_to_db = insert_list_to_db;
module.exports.insert_immediately = insert_immediately;
module.exports.remove_word_from_db = remove_word_from_db;
module.exports.list_data_from_db = list_data_from_db;