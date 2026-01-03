// src/env.ts
import 'dotenv/config';

export const env = {
  port: Number(process.env.PORT || 3000),
  nodeEnv: process.env.NODE_ENV || 'development',
  serviceBusConnectionString: process.env.SERVICE_BUS_CONNECTION_STRING!,
  queueName: process.env.QUEUE_NAME!,
};
