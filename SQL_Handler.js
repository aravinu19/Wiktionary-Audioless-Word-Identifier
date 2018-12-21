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
            db.run(`CREATE TABLE words (word TEXT PRIMARY KEY UNIQUE)`);
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
        
        data_to_insert.forEach(element => {
            statement.run(element);
            console.log('.');
        });

        statement.finalize();
        
    });

    db.close();

    callback();

};

var remove_word_from_db = function(word_to_remove, db_name, callback){

    var db = new sqlite3.Database(`./DB/${db_name}.db`);



};

var list_data_from_db = function(db_name){

    var db = new sqlite3.Database(`./DB/${db_name}.db`);
    var list_data = [];

    db.serialize(function() {
        db.each("SELECT word FROM words", (err, row) => {
            list_data.push(row.word);
        });
    });

    db.close();

    callback(list_data);

};

module.exports.create_db = create_db;
module.exports.insert_to_db = insert_list_to_db;
module.exports.remove_word_from_db = remove_word_from_db;
module.exports.list_data_from_db = list_data_from_db;