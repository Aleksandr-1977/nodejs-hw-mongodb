import { initMongoConnection } from './db/initMongoDBConnection.js';
import { setupServer } from './server.js';

const bootstrap = async () => {
  try {
    await initMongoConnection();
    setupServer();
  } catch (error) {
    console.error(error);
  }
};

bootstrap();
