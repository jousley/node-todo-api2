// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('--- unable to connect to mongodb server ---');
    }

    console.log('+++ connected to mongodb server +++');

    
    // db.collection('Todos').findOneAndUpdate(
    //     {_id: new ObjectID('596c02fb2cb2740baa55eff0')},
    //     {$set: {completed: true}},
    //     {returnOriginal: false}
    // ).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID('596aa70f018aa539d80d3e6b')},
        {
            $set: {name: 'emily'}, 
            $inc: {age: 1}
        },
        {returnOriginal: false}
    ).then((result) => {
        console.log(result);
    });

    // db.close();
});