// presentation/dtos/CreateOneTimePaymentRequest.ts
import { Type } from "class-transformer";
import { IsString, IsOptional } from "class-validator";
import { CustomerId, NoPaymentId, PaymentReference, NoPaymentReference } from '../../../domain/value-objects';
import { PaymentStatus } from "../../../domain/payment-status";
import { Payment } from "../../../domain/payment";
import { MoneyDto } from "./money.dto";

export class CreateOneTimePaymentRequest {
  @IsOptional()
  @IsString()
  id?: string;

  @IsString()
  customerId!: string;

  @Type(() => MoneyDto)
  money!: MoneyDto;

  toDomain(): Payment {
    return new Payment({
      id: new NoPaymentId(),
      reference: new NoPaymentReference(),
      customerId: this.customerId as CustomerId,
      money: this.money.toDomain(),
      status: PaymentStatus.PENDING,
    });
  }
}
