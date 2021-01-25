# What is this?

This is an open-source database management system made and managed by `zaid ajani`.

## how to install it?

to install this and use it, just open the terminal and enter `npm i crud-db --save`

## Documentation

In node.js, import it like 

```javascript
const db = require('crud-db');
```

## The basic functions.

As we import the library, on the top of the document, you'll need to initialize the database using `.initialize()` function.

example:

```javascript
const db = require('crud-db');

db.initialize();
```

<b>This command will create an empty database file as `database.dbs` in the folder you are currently working on.</b>

---

command 2: Add the data using `.add()` function.

You have probably heard of the phrase `key-value pair`.

This database is managed on the same.

```javascript
db.add(key, value);
```

example: 

```javascript
const db = require('crud-db');

db.initialize();
db.add('crud-db', 'is the most simplest db ever.');
```

Then in the database.dbs, it will add a row as 
```json
{"crud-db":"is the most simplest db ever."}
```

* you can even update `key-value` pairs in the same manner.

You can update using the same command.

use the same command and in the first parameter, suply the name of the key which you want to update, and in the second parameter, suply the value for the key.

example, if I have a `key-value` pair in the database as 
```json
{"crud-db":"is the most simplest db ever."}
```

then the code to update it would be:

```javascript
db.add('crud-db', 'The updated value');
// it will update.
```

command 3: delete

To delete, use the `.vanish()` function.

example:

```javascript
db.vanish('crud-db');
```

it will get deleted!.

command 4: Get a particular key from the database.

use the `.get()` function to do this.

example:

```javascript
console.log(db.get('crud-api'));
// this will console log the data of the key 'crud-api'
// you can even store it in a varialble.
```

command 5: readAllData

using the function `.readAllData()` you will be able to read all the data in the database, and can asign it to a variable, do some sorting, or just print it on to the console.

example:

```javascript
console.log(db.readAllData());
```

this will return All the content in the database at that particular time.

Fun fact:

<b>The code of the application is so simple and small, that it is smaller than the readme, and is so functional!, As more contributions came, the code increased!</b>

## test

run `npm test` to see how functional the app is and the testing status. If it is not working, make an issue on the repository.

## Hacktoberfest

This project can have pull requests for hacktoberfest, and if it is relevant, or useful, it will surely be excepted!.

<b>Enjoy the powerfull database.</b>