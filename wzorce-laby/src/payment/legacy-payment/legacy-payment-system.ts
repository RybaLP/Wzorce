import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class LegacyPaymentSystem {
  private readonly logger = new Logger(LegacyPaymentSystem.name);

  makeTransaction(value: number): void {
    this.logger.log(`[Legacy system zaplacil ${value.toFixed(2)} zł`);
  }
}