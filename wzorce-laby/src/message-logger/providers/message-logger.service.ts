import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class MessageLoggerService {
  private readonly messages: string[] = [];
  private readonly logger = new Logger(MessageLoggerService.name);

  addMessage(msg: string): void {
    this.messages.push(msg);
    this.logger.log(`Dodana wiadomosc "${msg}"`);
  }

  printAllMessages(): void {
    this.logger.log('Wszystkie wiadomosci : ');
    if (this.messages.length === 0) {
      this.logger.log('Bez wiadomosci');
      return;
    }
    this.messages.forEach((msg, index) => {
      this.logger.log(`${index + 1}. ${msg}`);
    });
    this.logger.log('---------------------------');
  }
}
