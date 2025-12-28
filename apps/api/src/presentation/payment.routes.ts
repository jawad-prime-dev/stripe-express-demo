// presentation/routes/paymentRoutes.ts
import { Router } from "express";
import { PaymentOrchestrator } from "../application/payment-orchestrator.impl";
import { MockPaymentGateway } from "../infrastructure/payment-gateway.mock";
import { PaymentController } from "./payment.controller";
import { asyncHandler } from "./middlewares/async-handler";
import { validateRequest } from './middlewares/validate-request';
import { CreateOneTimePaymentRequest } from "./contracts/create-onetime-payment/create-onetime-payment.request";
const router = Router();

const gateway = new MockPaymentGateway();
const orchestrator = new PaymentOrchestrator(gateway);
const controller = new PaymentController(orchestrator);

router.post(
  "/one-time",
  validateRequest(CreateOneTimePaymentRequest),
  asyncHandler(controller.createOneTimePayment)
);

export default router;
