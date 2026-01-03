import { EventEnvelope } from "@stripe-express-demo/shared";

export interface EventHandler {
  eventType: string;
  handle(event: EventEnvelope): Promise<void>;
}
