import { Injectable } from '@nestjs/common';
import { IPaymentProcessor } from '../interfaces/payment.interface';
import { LegacyPaymentSystem } from './legacy-payment-system';

@Injectable()
export class LegacyPaymentAdapter implements IPaymentProcessor {
  constructor(private readonly legacyPaymentSystem: LegacyPaymentSystem) {}

  processPayment(amount: number): void {
    console.log('Legacy platnosc...');
    this.legacyPaymentSystem.makeTransaction(amount);
  }
}