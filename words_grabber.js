const words_retriever = require('./single_letter_word_gathering');
const static_data = require('./static_data');
const sql_handler = require('./SQL_Handler');

let index_letter = Object.values(static_data.letter_index);

sql_handler.create_db("wordList", () => console.log("Table Created"));

for(var index = 20; index <= 20; index++){
     console.log(`Started with index letter: ${index_letter[index]}`);

     words_retriever.gather_words(static_data.primary_url + index_letter[index], [], (words_retrieved) => {

        //console.log(words_retrieved.length)

        sql_handler.insert_to_db(words_retrieved, "wordList", () => {
            console.log(`Words starting index ${index_letter[index]}  is added to DB`);
        });

     });

}