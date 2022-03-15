const mongoose = require('mongoose');
const validator = require('email-validator')

const authorSchema = new mongoose.Schema( {
    fname: { required:true,
        type:String
    },
        lname: { required:true,
        type:String 
    },
        title: {
            type:String,
            required:true
        },
        email: {
            required:true,
            unique:true,
            type:String
        },
        password:
            { required:true,
            type:String
        }
}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)