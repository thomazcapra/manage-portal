import { DatePipe } from '@angular/common';
import { inject, TestBed } from '@angular/core/testing';
import { LoggerService } from './logger.service';

describe('Service: Logger', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService, DatePipe]
    });
  });

  it('should ...', inject([LoggerService], (service: LoggerService) => {
    expect(service).toBeTruthy();
  }));
});
