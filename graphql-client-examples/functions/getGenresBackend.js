const fetch = require('node-fetch')

exports.handler = async function (event) {
  const query = `
    query getAllGenres {
      genres {
        value
      }
    }
  `
  const url = process.env.JAVA_GRAPHQL_ENDPOINT
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  })

  try {
    const responseBody = await response.json()
    return {
      statusCode: 200,
      body: JSON.stringify(responseBody)
    }
  } catch (e) {
    console.log(e)
    return {
      statusCode: 500,
      body: JSON.stringify(e)
    }
  }
}