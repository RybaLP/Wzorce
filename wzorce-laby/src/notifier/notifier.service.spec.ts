import { NotifierDecorator } from './decorators/notifier.decorator';
import { INotifier } from './interfaces/notifier';
import { Injectable } from '@nestjs/common';


@Injectable()
export class SMSNotifier extends NotifierDecorator {
  constructor(notifier: INotifier) {
    super(notifier);
  }

  send(message: string): void {
    super.send(message); 
    this.logger.log(`Wysyłam SMS: ${message}`);
  }
}