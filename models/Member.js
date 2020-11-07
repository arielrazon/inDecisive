const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 13;

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var MemberSchema = new Schema({

    name: {
      type: String,
      unique: true
    },
  
    email: {
      type: String,
      unique: true
    },

    password: {
      type: String,
      requried: true
  },
     avatar: {
      type: String
  },
  
    favorites: [
      {
        type: Schema.Types.ObjectId,
        ref: "PetSitter"
      }
    ]
  });

  // Pre save hook to hash passwords
MemberSchema.pre('save', function (next) {
  const user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();
  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      if (err) return next(err);
      // hash the password using our new salt
      bcrypt.hash(user.password, salt, (err, hash) => {
          if (err) return next(err);
          // override the cleartext password with the hashed one
          user.password = hash;
          console.log(user.password);
          next();
      });
  });
});

// Helper method for password comparison promise based
MemberSchema.methods.comparePassword = function(candidatePassword) {
  return new Promise((resolve, reject) => { 
      bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
          if (err) reject(err, 'passwords not a match');
          return resolve(isMatch);
      });
  });
};

// This creates our model from the above schema, using mongoose's model method
var Member = mongoose.model("Member", MemberSchema);


// Export the Note model
module.exports = Member;