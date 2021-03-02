require('dotenv').config()

const fetch = require('node-fetch').default
const { EMAIL_TOKEN } = process.env

exports.handler = async event => {

  const payload = JSON.parse(event.body).payload
  console.log(`Recieved a submission: ${payload.email}`)

  const rawResponse = await fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'post',
    headers: {
      Authorization: `Token ${EMAIL_TOKEN}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: payload.email,
      utm_source: 'website',
      utm_medium: 'subscribe-form'
    }),
  })
    .catch(error => ({ statusCode: 422, body: String(error) }))

    const content = await rawResponse.json();

    console.log(content);

}
