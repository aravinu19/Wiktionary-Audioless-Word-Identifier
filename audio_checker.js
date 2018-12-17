const axios = require('axios');
const HTMLParser = require('node-html-parser');
const site_grabber = require('./web_page_data_grabber');

var check_audio = (url_to_check, callback) => {
    
    site_grabber(url_to_check, (site_data) => {

    });

};

module.exports = check_audio;