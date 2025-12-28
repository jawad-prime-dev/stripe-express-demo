import { Request, Response } from "express";
import { CreateOneTimePaymentRequest } from "./contracts/create-onetime-payment/create-onetime-payment.request";
import { PaymentOrchestrator } from '../application/payment-orchestrator.impl';
import { CreateOneTimePaymentResponse } from "./contracts/create-onetime-payment/create-onetime-payment.response";

export class PaymentController {
  constructor(private readonly orchestrator: PaymentOrchestrator){}

  createOneTimePayment = async (req: Request, res: Response) =>{
    const dto = req.body as CreateOneTimePaymentRequest;
    const payment = dto.toDomain();

    const result = await this.orchestrator.createOneTimePayment(payment);

    if (!result.ok) {
      throw new Error(result.error.message);
    }

    const createdPayment = result.value;
    console.log(JSON.stringify(createdPayment))
    const createdPaymentResponse = CreateOneTimePaymentResponse.fromDomain(createdPayment);

    res.status(201).json(createdPaymentResponse);
  }
}