import { EventRouter } from "../application/handlers/event-router";
import { ServiceBusReceiver, ServiceBusClient } from '@azure/service-bus';

export class QueueListener {
  private queueMessageReceiver: ServiceBusReceiver;

  constructor(
    serviceBusClient: ServiceBusClient,
    queueName: string,
    private readonly eventRouter: EventRouter
  ) {
    this.queueMessageReceiver = serviceBusClient.createReceiver(
      queueName,
      { receiveMode: "peekLock" }
    );
  }

  start(): void {
    this.queueMessageReceiver.subscribe({
      processMessage: async (message) => {
        try {
          await this.eventRouter.route(message.body);
          await this.queueMessageReceiver.completeMessage(message);
        } 
        catch (err) {
          console.error(err);
          await this.queueMessageReceiver.abandonMessage(message);
        }
      },

      processError: async (args) => {
        console.error("Service Bus error", args.error);
      },
    });
  }
}