import { Type } from "class-transformer";
import { IsString, IsOptional } from "class-validator";
import { MoneyDto } from "./money.dto";
import { CustomerId, NoPaymentId, NoPaymentReference, Payment, PaymentStatus } from "@stripe-express-demo/shared";

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