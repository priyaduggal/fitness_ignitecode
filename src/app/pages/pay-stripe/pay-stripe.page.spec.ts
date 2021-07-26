import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayStripePage } from './pay-stripe.page';

describe('PayStripePage', () => {
  let component: PayStripePage;
  let fixture: ComponentFixture<PayStripePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayStripePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayStripePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
