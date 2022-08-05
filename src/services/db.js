import sqlite3 from 'sqlite3';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, '../../dev-team.db');

const db = new sqlite3.Database(dbPath);
console.log(`Using database at ${dbPath}`);

const getPeople = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM people', function (err, res) {
      if (err) reject(err);

      resolve(res);
    });
  });
};

const newPerson = (name) => {
  return new Promise((resolve, reject) => {
    console.log(`Adding ${name} to DB`);
    
    db.run(
      'INSERT INTO people (name) VALUES ($name)',
      {
        $name: name,
      },
      function (res, err) {
        if (err) reject(err);

        resolve(name);
      }
    );
  });
};

export { getPeople, newPerson };
