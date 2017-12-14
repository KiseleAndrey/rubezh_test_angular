import { Observable } from 'rxjs/Observable';

export class AuthService {
  public isWasAuth = false;
  constructor() { }
  public isAuth(): Observable<boolean> {
    return Observable.of(true).delay(2000);
  }

  public isCanNavigateTo(): Observable<boolean> {
    return Observable.of(this.isWasAuth);
  }
}
