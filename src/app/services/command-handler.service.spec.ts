import { TestBed } from '@angular/core/testing';

import { CommandHandlerService } from './command-handler.service';

describe('CommandHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommandHandlerService = TestBed.get(CommandHandlerService);
    expect(service).toBeTruthy();
  });
});
