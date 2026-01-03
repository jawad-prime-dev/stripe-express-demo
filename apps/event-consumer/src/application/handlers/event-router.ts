import { EventEnvelope } from "@stripe-express-demo/shared";
import { EventHandler } from "./event-handler";

export class EventRouter {
  private handlers = new Map<string, EventHandler>();

  constructor(handlers: EventHandler[]) {
    handlers.forEach(h => this.handlers.set(h.eventType, h));
  }

  async route(event: EventEnvelope) {
    const handler = this.handlers.get(event.eventType);

    if (!handler) {
      throw new Error(`No handler for ${event.eventType}`);
    }

    await handler.handle(event);
  }
}
