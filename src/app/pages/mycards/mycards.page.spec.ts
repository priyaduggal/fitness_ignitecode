import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MycardsPage } from './mycards.page';

describe('MycardsPage', () => {
  let component: MycardsPage;
  let fixture: ComponentFixture<MycardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycardsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MycardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
