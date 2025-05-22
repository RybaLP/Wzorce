import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PayPalPaymentSystem {
  private readonly logger = new Logger(PayPalPaymentSystem.name);

  sendMoney(amount: number, currency: string): void {
    this.logger.log(`Paypal system wyslal ${amount.toFixed(2)} ${currency} przez PayPal.`);
  }
}