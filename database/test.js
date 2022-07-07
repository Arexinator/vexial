const mongoose = require('mongoose')
const { Schema } = mongoose

const reqString = {
    type: String,
    required: true,
}

const schema = new Schema(
    {
        userID: reqString,
        message: reqString,
    }
)

const name = 'test'

module.exports = mongoose.models[name] || mongoose.model(name, schema)