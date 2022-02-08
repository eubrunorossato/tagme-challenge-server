import { Schema, model } from 'mongoose';

const user = new Schema({
  user: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = model('users', user);

export default User;
