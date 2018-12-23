var sqlite3 = require('sqlite3').verbose();
const HTMLParser = require('node-html-parser');
const fs = require('fs');
const cheerio = require('cheerio');
var db = new sqlite3.Database('./DB/lorem.db');
var audio_check = require('./audio_checker');
var site_grabber = require('./web_page_data_grabber');
var single_letter_words_gather = require('./single_letter_word_gathering');
var static_content = require('./static_data');
 

// let primary_url = "https://ta.wiktionary.org/wiki/%E0%AE%9A%E0%AE%BF%E0%AE%B1%E0%AE%AA%E0%AF%8D%E0%AE%AA%E0%AF%81:PrefixIndex/%E0%AE%85";

// db.serialize(function() {
//   db.run("CREATE TABLE lorem (info TEXT)");
 
//   var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (var i = 0; i < 10; i++) {
//       stmt.run("Hello World " + i);
//   }
//   stmt.finalize();
 
//   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//       console.log(row.id + ": " + row.info);
//   });
// });
 
// db.close();




// var count = 1;
// var siter = (url) => {
//     site_grabber(url, (site_data) => {

//         var parsed_data = HTMLParser.parse(site_data.data);
//         var nav_bar = parsed_data.querySelector('.mw-prefixindex-nav');

//         if (nav_bar !== null) {
//             var nav = nav_bar.firstChild;
//             console.log(`Site Count : ${count++} \n ${nav.attributes.href} \n`);
//             siter("https://ta.wiktionary.org" + nav.attributes.href);
//         }else{
//             console.log('Words Ended !')
//         }

//     });
// };

// siter(primary_url);


// single_letter_words_gather.gather_words(static_content.primary_url + static_content.letter_index['aa'], [], (word_list) => {

//     console.log(word_list);

// });

// site_grabber(static_content.primary_url + static_content.letter_index['aa'], (htmlContent) => {

//     let parsed_Data = cheerio.load(htmlContent.data);

//     (parsed_Data('.mw-prefixindex-list').children()).toArray().forEach(element => {
//         console.log(element.firstChild.firstChild.data);
//     });

// });

// single_letter_words_gather.gather_words(static_content.primary_url + static_content.letter_index.aa, [], (data) => console.log(data));


audio_check('இழிவுபடல்', (data) => console.log(data));