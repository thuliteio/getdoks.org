import fetch from 'node-fetch'

const { KEILA_API_KEY } = process.env;

exports.handler = async (event) => {

  const body = JSON.parse(event.body);
  const { email, page } = body.payload.data;

  console.log(`Submission: ${email}`)

  let headersList = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${KEILA_API_KEY}`,
    }

    let bodyContent = JSON.stringify({
      'data': {
        'data': {
        'page': `${page}`,
          'tags': [
            'doks',
          ],
        },
        'email': email,
      },
    });

  let response = await fetch('https://app.keila.io/api/v1/contacts', {
    method: 'POST',
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.text();
  console.log('Response:', data);

  return {
    statusCode: response.status,
    body: data,
  };

};
