const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

var id = '596d21332ff8e4328cf7f896';

if (!ObjectID.isValid(id)) {
    return console.log('ID not valid');
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos);
// });


// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('--- id invalid ---');
//     }
//     console.log('Todo by ID: ', todo);
// }).catch((e) => console.log(e));


User.findById(id).then((user) => {
    if (!user) {
        return console.log('--- user id invalid ---');
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));