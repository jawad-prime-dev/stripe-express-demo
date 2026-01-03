import { EventEnvelope, Result } from "@stripe-express-demo/shared";

export interface IQueueMessageSender {
  send(event: EventEnvelope): Promise<Result<void>>;
}