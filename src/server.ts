<<<<<<< HEAD
=======
import { Server } from 'http';
>>>>>>> resart-part
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

<<<<<<< HEAD
=======
let server: Server;

>>>>>>> resart-part
async function main() {
  try {
    await mongoose.connect(config.database_url as string);

<<<<<<< HEAD
    app.listen(config.port, () => {
=======
    server = app.listen(config.port, () => {
>>>>>>> resart-part
      console.log(`app is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
<<<<<<< HEAD
=======

process.on('unhandledRejection', () => {
  console.log(`😈 unahandledRejection is detected , shutting down ...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException is detected , shutting down ...`);
  process.exit(1);
});
>>>>>>> resart-part
