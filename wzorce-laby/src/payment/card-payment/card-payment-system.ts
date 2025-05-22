import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CardPaymentSystem {
  private readonly logger = new Logger(CardPaymentSystem.name);

  chargeCard(sum: number): void {
    this.logger.log(`System kard wyplacil${sum.toFixed(2)}.`);
  }
}