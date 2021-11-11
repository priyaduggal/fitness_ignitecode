import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditcardPage } from './editcard.page';

describe('EditcardPage', () => {
  let component: EditcardPage;
  let fixture: ComponentFixture<EditcardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
