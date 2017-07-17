// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('--- unable to connect to mongodb server ---');
    }

    console.log('+++ connected to mongodb server +++');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'eat dinner'}).then((result) => {
    //     console.log(result);
    // });
    
    // db.collection('Users').deleteMany({name: 'jeff'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'eat dinner'}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    
    db.collection('Users').findOneAndDelete( { _id: new ObjectID('596aa47a42f8ff31604a6dcd') } ).then((result) => {
        console.log(result);
    });

    // db.close();
});