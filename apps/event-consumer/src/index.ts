import "dotenv/config";
import { QueueListener} from "./infrastructure/queue-listener";
import { serviceBusClient } from "@stripe-express-demo/shared";
import { env } from "./config/env";
import { EventRouter } from "./application/handlers/event-router";
import { PaymentCreatedHandler } from "./application/handlers/payment-created.handler";

// ===== Dependency Injection =====

const router = new EventRouter([
  new PaymentCreatedHandler(),
]);
const queueListener = new QueueListener(serviceBusClient(env.serviceBusConnectionString), env.queueName, router)

// ===== Bootstrap =====

console.log("Stripe consumer started...");
queueListener.start();