const fs = require('fs');
let db = {};
updateDbVariable();

function initialize() {
  try {
    fs.readFileSync('database.dbs', 'utf-8');
  }
  catch (error) {
    try {
      fs.writeFileSync('database.dbs', '');
    }
    catch (error) {
      console.log('cant write the database file');
    }
  }
}

function updateDbVariable() {
  try {
    db = JSON.parse(fs.readFileSync('database.dbs', 'utf-8'));
  } catch (error) {
    db = {};
  }
}

function updateDb(data) {
  try {
    fs.writeFileSync('database.dbs', JSON.stringify(data));
  } catch (error) {
    console.log('Error', error);
  }
}

function add(key, value) {
  db[key] = value;
  updateDb(db);
  return db[key];
}

function get(key) {
  return db[key];
}

function vanish(key) {
  const keysValue = db[key];
  delete db[key];
  updateDb(db);
  return keysValue;
}

function readAllData() {
  return db;
}

module.exports = {
  initialize,
  add,
  get,
  vanish,
  readAllData
}