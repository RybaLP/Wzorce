import { INotifier } from '../interfaces/notifier';
import { Logger } from '@nestjs/common';

export abstract class NotifierDecorator implements INotifier {
  protected notifier: INotifier;
  protected readonly logger: Logger;

  constructor(notifier: INotifier) {
    this.notifier = notifier;
    this.logger = new Logger(this.constructor.name); 
  }

  send(message: string): void {
    this.notifier.send(message);
  }
}