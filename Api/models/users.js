const bcrypt = require('bcrypt-nodejs')
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    username: { type: String, required: true, lowercase: true, unique: true },
    email: { type: String, required: true},
    password: { type: String },
    token: { type: String }
}, { timestamps: true, versionKey: false });

userSchema.pre('save', function(next){
    const user = this;

    if(!user.isModified('password')) 
        return next();
    
    bcrypt.genSalt(10, (err, salt) =>{
        if(err)
            return next(err);
        
        bcrypt.hash(user.password, salt, null, (err, hash) =>{
            if(err)
                return next(err);

            user.password = hash;
            next();
        })
    })
})

module.exports = mongoose.model('Users',userSchema);