import { Request, Response } from "express";
import { PaymentOrchestrator } from '../application/payment-orchestrator.impl';
import { RawEventVerificationSignature, RawEvent } from '@stripe-express-demo/shared';

export class WebHooksController {
  constructor(private readonly orchestrator: PaymentOrchestrator){}

  handleStripeEvent = async (req: Request, res: Response) =>{
    const signature = req.headers["stripe-signature"] as string;
    const rawBody = req.body as Buffer;

    await this.orchestrator.handleWebhookEvent(rawBody as RawEvent, signature as RawEventVerificationSignature)
    
    res.status(200).end();
  }
}