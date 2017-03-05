import { TestBed, inject } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { Http } from '@angular/http';

describe('ProductsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService, Http]
    });
  });

  it('should ...', inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));
});
