const axios = require('axios');
const sqlite = require('sqlite3');
const HTMLParser = require('node-html-parser');
const bodyParser = require('body-parser');
const express = require('express');
const urlEncoder = require('postman-url-encoder');
const fs = require('fs');
const static_data = require("./static_data");

axios.get(urlEncoder.encode(static_data.primary_url + static_data.letter_index['aa'])).then((html) => {
    // console.log(html.data);

    var parsed_page = HTMLParser.parse(html.data);
    let word_list = parsed_page.querySelector('.mw-prefixindex-list').childNodes;

    word_list.forEach(element => {
        console.log(element.rawText);
    });

    const data = new Uint8Array(Buffer.from(parsed_page.querySelector('.mw-prefixindex-list').text));
    fs.writeFile('tamilFile.txt', data, (err) => {
        if(err) throw err;
        console.log('File Saved');
    });

}).catch((err) => {
    console.log(err);
});

