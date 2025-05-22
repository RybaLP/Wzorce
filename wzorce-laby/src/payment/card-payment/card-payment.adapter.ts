import { Injectable } from '@nestjs/common';
import { IPaymentProcessor } from '../interfaces/payment.interface';
import { CardPaymentSystem } from './card-payment-system';

@Injectable()
export class CardPaymentAdapter implements IPaymentProcessor {
  constructor(private readonly cardPaymentSystem: CardPaymentSystem) {}

  processPayment(amount: number): void {
    console.log('[Adapter] Adapting card payment...');
    this.cardPaymentSystem.chargeCard(amount);
  }
}