const request = require('request');
require('dotenv').config();

const slackData = {
  text: "A release to Clay just finished",
  attachments: [{
      "fallback": "Clay has been Released",
      "color": "#36a64f",
      "pretext": "If you are seeing editing issues please clear your cache and refresh. If you've tried that and are still experiencing issues please @dev in the Help channel.",
      "author_name": "Nymag Developers",
      "title": "Chrome Clear Cache Extension",
      "title_link": "https://chrome.google.com/webstore/detail/clear-cache/fkpampcchocandlbgdffjaihmccjmlgk?hl=en",
      "text": "Download here if you dont have the clear cache extension",
      "footer": "Nymag Developers",
      "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
  }]
}

var payLoad = {
  url: process.env.WEBHOOK_ENDPOINT,
  method: 'POST',
  body: slackData,
  json: true
};

request(payLoad, (err, res, body) => {
  console.log(payLoad);
  if (err) {
    console.log('Request error :', err)
    return
  }
  console.log(' Body :', body)
});
