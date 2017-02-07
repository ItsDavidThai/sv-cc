/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlaceholderApiService } from './placeholder-api.service';

describe('PlaceholderApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceholderApiService]
    });
  });

  it('should ...', inject([PlaceholderApiService], (service: PlaceholderApiService) => {
    expect(service).toBeTruthy();
  }));
});
