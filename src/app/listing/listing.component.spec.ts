import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListingComponent } from './listing.component';
import { TruncatePipe } from '../truncate.pipe';

describe('ListingComponent', () => {
  let component: ListingComponent;
  let fixture: ComponentFixture<ListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingComponent, TruncatePipe ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
