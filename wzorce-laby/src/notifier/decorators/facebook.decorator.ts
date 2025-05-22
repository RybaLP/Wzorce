import { NotifierDecorator } from './notifier.decorator';
import { INotifier } from '../interfaces/notifier';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FacebookNotifier extends NotifierDecorator {
  constructor(notifier: INotifier) {
    super(notifier);
  }

  send(message: string): void {
    super.send(message); 
    this.logger.log(`Wysyłam na Facebooka: ${message}`); 
  }
}