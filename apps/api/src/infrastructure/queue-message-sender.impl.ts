import { err, EventEnvelope, okEmpty, QueueMessageSendingFailure, Result } from "@stripe-express-demo/shared";
import { IQueueMessageSender } from "../application/queue-message-sender";
import { ServiceBusClient } from '@azure/service-bus';

export class QueueMessageSender implements IQueueMessageSender {
  constructor(
    private readonly client: ServiceBusClient,
    private readonly queueName: string
  ) {}

  async send(event: EventEnvelope): Promise<Result<void>> {
    try {
      const sender = this.client.createSender(this.queueName);

      await sender.sendMessages({ body: event });

      return okEmpty();
    } 
    catch (error: unknown) {
      const e = error as Error;
      return err(new QueueMessageSendingFailure(e.message));
    }
  }
}


