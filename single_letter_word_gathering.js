const urlEncoder = require('postman-url-encoder');
const site_grabber = require('./web_page_data_grabber');

var gather_word_list = function (url_to_start_with, temp_variable_to_store_words) {

    site_grabber(url_to_start_with, (site_data) => {

    });

};

module.exports.gather_words = gather_word_list;