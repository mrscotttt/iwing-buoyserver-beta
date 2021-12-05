const mongoose = require('mongoose');
const Connect = async () => {
    mongoose.connect("mongodb+srv://root:root@cluster0.lol3x.mongodb.net/test1?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })

    mongoose.connection.on('error', err => {
    console.error('MongoDB error', err)
    })
}

module.exports = Connect



