declare module 'aurelia-logging-console' {
  import { Logger }  from 'aurelia-logging';
  export class ConsoleAppender {
    debug(logger: Logger, ...rest: any[]): void;
    info(logger: Logger, ...rest: any[]): void;
    warn(logger: Logger, ...rest: any[]): void;
    error(logger: Logger, ...rest: any[]): void;
  }
}