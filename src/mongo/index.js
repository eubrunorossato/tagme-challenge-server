import mongoose from 'mongoose';
export default async () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONG_PASS}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`
    )
    .then(() => console.log('Db Connected'))
    .catch(e => console.log(`MongoDb Error: ${e.message}`));
};
