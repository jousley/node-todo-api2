const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '596fb95e2cb2740baa561e3f'}).then((todo) => {
    console.log(todo);
});


Todo.findByIdAndRemove('596fb95e2cb2740baa561e3f').then((todo) => {
    console.log(todo);
});