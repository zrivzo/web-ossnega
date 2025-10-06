// netlify/functions/scores/scores.js
exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    let response;
    
    if (event.httpMethod === 'GET') {
      response = {
        success: true,
        data: {
          scores: {},
          metadata: {
            lastUpdated: new Date().toISOString(),
            totalRecords: 0,
            version: '1.0',
            message: 'Database functions working!'
          }
        }
      };
    } else if (event.httpMethod === 'POST') {
      const body = JSON.parse(event.body);
      response = {
        success: true,
        message: `Received ${Object.keys(body.scores || {}).length} records`
      };
    } else {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Method not allowed' })
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(response)
    };
    
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        success: false, 
        error: error.message 
      })
    };
  }
};
