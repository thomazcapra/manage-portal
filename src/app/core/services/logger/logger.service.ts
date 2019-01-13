import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor(private datePipe: DatePipe) {}

  log(message: string, func: Function): void {
    const date = this.datePipe.transform(new Date(), 'dd/MM/yyyy - hh:mm:ss');
    console.log(`${date} - ${message} : ${func.name}`);
  }

  warn(message: string, func: Function): void {
    const date = this.datePipe.transform(new Date(), 'dd/MM/yyyy - hh:mm:ss');
    console.warn(`${date} - ${message} : ${func.name}`);
  }
}
