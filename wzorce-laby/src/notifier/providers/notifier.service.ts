import { Injectable, Logger } from '@nestjs/common';
import { INotifier } from '../interfaces/notifier';

@Injectable()
export class EmailNotifier implements INotifier {
  private readonly logger = new Logger(EmailNotifier.name);

  send(message: string): void {
    this.logger.log(`Wysyłam e-mail: ${message}`);
  }
}