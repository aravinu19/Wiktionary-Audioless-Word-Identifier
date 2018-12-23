const audio_check = require('./audio_checker');
const sqlHandler = require('./SQL_Handler');

sqlHandler.create_db("audioLessWords", () => console.log("DB and Table Created"));

sqlHandler.list_data_from_db("wordList", (data_list) => check_audio_presence(data_list));

function check_audio_presence(word_list) {

    let array_of_words = Object.values(word_list);

    word_list_iterator(word_list, 6248);

}

function word_list_iterator(word_list, index_position){

    console.log(index_position);

    let word = word_list[index_position].word;

    if ( word != null) {
        
        audio_check( word, (presence) => {

            if (presence) {
                
                console.log(presence);
                sqlHandler.insert_immediately(word, "audioLessWords");
                word_list_iterator(word_list, ++index_position);

            } else {

                console.log(presence);
                word_list_iterator(word_list, ++index_position);

            }

        });

    } else {
        
        word_list_iterator(word_list, ++index_position);

    }

}
