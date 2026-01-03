import { Payment, HasPaymentId, HasPaymentReference } from "@stripe-express-demo/shared";
import { MoneyDto } from "./money.dto";

export class CreateOneTimePaymentResponse{
  id!: string;
  customerId!: string;
  money!: MoneyDto;
  status!: string;
  reference!: string;

  static fromDomain(payment: Payment): CreateOneTimePaymentResponse {
    const dto = new CreateOneTimePaymentResponse();
    dto.id = (payment.id as HasPaymentId).value;
    dto.customerId = payment.customerId.toString();
    dto.status = payment.status;
    dto.money = MoneyDto.fromDomain(payment.money);
    dto.reference = (payment.reference as HasPaymentReference).value;
    
    return dto;
  }
}