import { Request, Response } from "express";
import { CreateOneTimePaymentRequest } from "./contracts/create-onetime-payment/create-onetime-payment.request";
import { PaymentOrchestrator } from '../application/payment-orchestrator.impl';
import { CreateOneTimePaymentResponse } from "./contracts/create-onetime-payment/create-onetime-payment.response";
import { BaseController } from "./base.controller";

export class PaymentController extends BaseController {
  constructor(private readonly orchestrator: PaymentOrchestrator){ super()}

  createOneTimePayment = async (req: Request, res: Response) =>{
    const dto = req.body as CreateOneTimePaymentRequest;
    const payment = dto.toDomain();

    const result = await this.orchestrator.createOneTimePayment(payment);

    if (!result.ok) {
      return this.fromError(res, result.error);
    }

    const createdPayment = result.value;
    const createdPaymentResponse = CreateOneTimePaymentResponse.fromDomain(createdPayment);

    res.status(201).json(createdPaymentResponse);
  }
}