import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      lowercase: true,
      required: [true, 'name is required'],
    },
    email: {
      type: String,
      minLength: 8,
      lowercase: true,
      trim: true,
      required: [true, 'email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
    isAdmin: {
      type: Boolean,
      required: [true, 'isAdmin is required'],
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

export default User
