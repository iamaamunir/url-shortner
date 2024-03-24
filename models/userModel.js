import mongoose from "mongoose"
import validator from "validator"
import bcryptjs from "bcryptjs"

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
  },
  email: {
    type: String,
    required: [true, "Please fill in your email address"],
    validate: [validator.isEmail, "Please provide a valid email address"],
    unique: true,
    lowercase: true,
  },
  urls: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Url",
    },
  ],
  password: {
    type: String,
    required: [true, "Please fill in your password"],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please fill in to confirm your password"],
    // validate passwordd
    validate: {
      validator: function (el) {
        return el === this.password
      },
      message: "Passwords don't match!!!",
    },
  },
})

userSchema.pre("save", async function (next) {
  const user = this
  // Only hash the password if it has been modified or is new
  if (!this.isModified("password") && !this.isModified("passwordConfirm")) {
    return next()
  }
  const salt = await bcryptjs.genSalt(10)
  this.password = await bcryptjs.hash(this.password, salt)

  // Hash the passwordConfirm
  this.passwordConfirm = await bcryptjs.hash(this.passwordConfirm, salt)

  next()
})

userSchema.methods.comparePassword = async function (password) {
  const user = this
  const compare = await bcryptjs.compare(password, user.password)
  return compare
}


const User = mongoose.model("Users", userSchema)
export default User
