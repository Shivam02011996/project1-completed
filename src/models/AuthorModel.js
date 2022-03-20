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













// const mongoose = require('mongoose');

// const authorSchema = new mongoose.Schema( {
//     fname: { type: String,
//              required : true
//             },
//     lname: {type : String,
//             required : true
//            },
//      title: {type : String,
//             enum : ["Mr", "Mrs", "Miss"]
//         },
            
//     email: {type: String,
//               required : true,
//               unique : true,
//               match:/.*\@.*\..*/
//               //xyz@gmail.com
//             },
//     password: {type: String,
//         required : true
//             }
// }, { timestamps: true });

// module.exports = mongoose.model('Author', authorSchema)