import app from './src/config/express';
import https from 'https';
import fs from 'fs';
import dotenv from 'dotenv';
import mongoConnection from './src/db/mongo';
dotenv.config();

const cb = async () => {
  console.log(`Server Running on Port ${process.env.PORT}`);
  await mongoConnection();
};
if (process.env.NODE_ENV === 'LOCALHOST') {
  https
    .createServer(
      {
        key: fs.readFileSync('./certificates/key.pem'),
        cert: fs.readFileSync('./certificates/cert.pem'),
      },
      app
    )
    .listen(process.env.PORT, cb);
} else {
  app.listen(process.env.PORT, cb);
}
