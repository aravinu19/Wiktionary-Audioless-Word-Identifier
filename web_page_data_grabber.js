const axios = require('axios');
const urlEncoder = require('postman-url-encoder');

var grab_site = (site_url, callback) => {
    axios.get(urlEncoder.encode(site_url)).then((html_data) => {

        callback(html_data);

    }).catch((err) => {
        console.log(err);
    });
};

module.exports = grab_site;