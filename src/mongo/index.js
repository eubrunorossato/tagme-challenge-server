import mongoose from 'mongoose';
export default async () => {
  mongoose
    .connect(
      `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`
    )
    .then(() => console.log('Db Connected'))
    .catch(e => console.log(`MongoDb Error: ${e.message}`));
};
