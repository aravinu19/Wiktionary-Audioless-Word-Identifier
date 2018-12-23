const site_grabber = require('./web_page_data_grabber');

var check_audio = (word_to_check, callback) => {
    
    var url_to_check = "https://ta.wiktionary.org/wiki/" + word_to_check;

    console.log(`\nChecking for word: ${word_to_check}`);

    site_grabber(url_to_check, (site_data) => {

        callback(site_data.data.toString().includes('இல்லை'));

    });

};

module.exports = check_audio;