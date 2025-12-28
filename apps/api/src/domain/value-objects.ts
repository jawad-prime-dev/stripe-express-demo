
export type CustomerId = string & { readonly __brand: "CustomerId" };
export type Currency = string & { readonly __brand: "Currency" };
export type Amount = number & { readonly __brand: "Amount" };

export abstract class PaymentId {}
export class HasPaymentId extends PaymentId {
  constructor(public readonly value: string) { super(); }
}
export class NoPaymentId extends PaymentId { }

export abstract class PaymentReference {}
export class HasPaymentReference extends PaymentReference {
  constructor(public readonly value: string) { super(); }
}
export class NoPaymentReference extends PaymentReference { }