const axios = require('axios');
const { email, password, GUID, mainFaxNumber, secondaryFaxNumber } = require('./config');


// get your account info.
const getAccountInfo = () => {
  return axios.get(`https://${email}:${password}@api.hellofax.com/v1/Accounts/${GUID}`)
    .then(response => {
      console.log('response', response.data);
    })
}

// add/change callback urls.
const editCallBackUrls = () => {
  return axios.post(`https://${email}:${password}@api.hellofax.com/v1/Accounts/${GUID}`, {
    DefaultInboundFaxCallbackUrl: `https://www.checkembedded.com/callback`,
    DefaultOutboundFaxCallbackUrl: `https://www.checkembedded.com/callback`,
  })
    .then(response => {
      console.log('response', response.data);
    })
}

// see your fax lines.

const seeUserFaxLines = () => {
  return axios.get(`https://${email}:${password}@api.hellofax.com/v1/Accounts/${GUID}/FaxLines`)
    .then(response => {
      console.log('response', response.data.FaxLines);
    })
}

console.log(seeUserFaxLines());

// see fax numbers for state code.

const seeAreaCodesForState = (initials) => {
  return axios.get(`https://api.hellofax.com/v1/AreaCodes?StateCode=${initials}`)
    .then(response => {
      console.log(`available area codes for ${initials}: `, response);
    })
}

// console.log(seeAreaCodesForState('CA'));

// purchase a fax line.

// send a fax. (simple version.)

// send a fax with multiple files.

// send a fax with multiple recipients.

// check the status of a specific fax.
