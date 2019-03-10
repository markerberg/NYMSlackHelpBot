const request = require('request');
require('dotenv').config();

const slackData = {
  text: "EDITORIAL RELEASE NOTES",
  attachments: [{
      "fallback": "Help Channel Update",
      "color": "#36a64f",
      "pretext": "We just relased our code, please clear cache and refresh to fix edit mode",
      "author_name": "Nymag Developers",
      // "author_link": "Link to Dev channel",
      // "author_icon": "Custom clay icon",
      "title": "Chrome Cache Extension",
      "title_link": "https://chrome.google.com/webstore/detail/clear-cache/fkpampcchocandlbgdffjaihmccjmlgk?hl=en",
      "text": "Use this link to clear cache",
      "fields": [
          {
              "title": "Priority",
              "value": "High",
              "short": false
          }
      ],
      // "image_url": "NYMAG url",
      // "thumb_url": "nymag url",
      "footer": "Nymag Developers",
      "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
      // "ts": 123456789
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
