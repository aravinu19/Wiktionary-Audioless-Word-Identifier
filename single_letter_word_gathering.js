const cheerio = require('cheerio');
const site_grabber = require('./web_page_data_grabber');
const audio_check = require('./audio_checker');

var gather_word_list = function (url_to_start_with, temp_variable_to_store_words, callback) {

    site_grabber(url_to_start_with, (site_data) => {

        var parsed_page = cheerio.load(site_data.data);
        let word_list = (parsed_page('.mw-prefixindex-list').children()).toArray();

        word_list.forEach(Single_item => {
            temp_variable_to_store_words.push(Single_item.firstChild.firstChild.data);
        });

        callback(temp_variable_to_store_words);

        var nav_bar = parsed_page('.mw-prefixindex-nav');

        if (nav_bar == null) {
            
            
            callback(temp_variable_to_store_words);

        }else{

            var next_page = (nav_bar.contents().attr('href'));
            var next_page_link = "https://ta.wiktionary.org" + next_page;

            gather_word_list(next_page_link, temp_variable_to_store_words, callback);

        }

    });

};

module.exports.gather_words = gather_word_list;