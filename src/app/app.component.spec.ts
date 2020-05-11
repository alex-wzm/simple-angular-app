import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'simple-angular-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('simple-angular-app');
  });

  it('should contain links to Alex and Jake\'s github accounts', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debug = fixture.debugElement;
    expect(debug.query(By.css('a')).nativeElement.getAttribute('href').toEqual('https://github.com/alex-wzm https://github.com/jc1138'));
  })

  it('should display the login button', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debug = fixture.debugElement;
    const loginButton = debug.query(By.css('login')).componentInstance;
    expect(loginButton).toBeTruthy();
  })
});
