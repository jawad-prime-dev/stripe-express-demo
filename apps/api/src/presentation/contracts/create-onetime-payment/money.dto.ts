import { IsNumber, IsString } from "class-validator";
import { Money } from "../../../domain/money";
import { Amount, Currency } from '../../../domain/value-objects';

export class MoneyDto {
  @IsNumber()
  amount!: number;

  @IsString()
  currency!: string;

  static fromDomain(money: Money): MoneyDto {
    const dto = new MoneyDto();
    dto.amount = money.amount; 
    dto.currency = money.currency;
    return dto;
  }

  toDomain(): Money {
    return {
      amount: this.amount as Amount,
      currency: this.currency as Currency,
    };
  }
}
