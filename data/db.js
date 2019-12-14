import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect(
    'mongodb://localhost/clients',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    },
);

const clientsSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    company: String,
    emails: Array,
    age: Number,
    type: String,
    orders: Array,
});

const Clients = mongoose.model('clients', clientsSchema);

module.exports = {
    Clients
}