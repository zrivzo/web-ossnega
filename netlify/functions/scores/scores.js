const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  const dbPath = path.join(process.cwd(), 'database', 'scores', 'data', 'databases.json');

  try {
    // Ensure directory exists
    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    if (event.httpMethod === 'GET') {
      // Read data
      if (!fs.existsSync(dbPath)) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            success: true,
            data: {
              scores: {},
              metadata: {
                lastUpdated: new Date().toISOString(),
                totalRecords: 0,
                version: '1.0'
              }
            }
          })
        };
      }

      const data = fs.readFileSync(dbPath, 'utf8');
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          data: JSON.parse(data)
        })
      };
    }

    if (event.httpMethod === 'POST') {
      // Write data
      const body = JSON.parse(event.body);
      fs.writeFileSync(dbPath, JSON.stringify(body, null, 2));
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'Data berhasil disimpan'
        })
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  } catch (error) {
    console.error('Error:', error);
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
