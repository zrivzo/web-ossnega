// scripts/init-db.js
const fs = require('fs');
const path = require('path');

function initializeDatabase() {
  const dbPath = path.join(__dirname, '..', 'database', 'scores', 'data', 'databases.json');
  const dbDir = path.dirname(dbPath);

  // Create directory if not exists
  if (!fs.existsSync(dbDir)) {
    fs.mkdirSync(dbDir, { recursive: true });
  }

  // Create initial database if not exists
  if (!fs.existsSync(dbPath)) {
    const initialData = {
      scores: {},
      metadata: {
        lastUpdated: new Date().toISOString(),
        totalRecords: 0,
        version: "1.0",
        createdBy: "system",
        criteria: ["Komunikasi", "Kreativitas", "Kepemimpinan", "Kerjasama", "Komitmen"],
        gradingScale: {
          "A": { "min": 85, "max": 100, "status": "LOLOS" },
          "B": { "min": 75, "max": 84, "status": "BAIK" },
          "C": { "min": 60, "max": 74, "status": "CUKUP" },
          "D": { "min": 0, "max": 59, "status": "TIDAK LOLOS" }
        },
        testDesks: ["1", "2", "3", "4", "5", "6", "7", "8"]
      }
    };

    fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2));
    console.log('✅ Database initialized successfully!');
  } else {
    console.log('✅ Database already exists!');
  }
}

initializeDatabase();
