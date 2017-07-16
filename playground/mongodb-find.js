// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('--- unable to connect to mongodb server ---');
    }

    console.log('+++ connected to mongodb server +++');

    // db.collection('Todos').find({completed: false}).toArray().then( (docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('--- unable to fetch todos ---', err);
    // });


    // db.collection('Todos').find().count().then( (count) => {
    //     console.log(`Todos count ${count}`);
    // }, (err) => {
    //     console.log('--- unable to fetch todos ---', err);
    // });


    db.collection('Users').find({name: 'jeff'}).toArray().then( (docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('--- unable to fetch users ---', err);
    });

    // db.close();
});