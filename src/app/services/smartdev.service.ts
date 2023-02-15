import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SmartdevService {

  smartDevUrl = "https://smartforms.dev/submit/626ce7227a195017922e26e2";

  constructor(
    private http: HttpClient
  ) {
  }

//smartForm service create message only in FormData
// headers content-type no need to implement from smartforms docs (broke message)
  sendForm(data: FormData) {
    this.http.post(this.smartDevUrl, data,)
      .subscribe(({
        next: res => console.log(res),
        error: err => {
          console.log(err);
          if (err.status === 201) console.log('all is OK, message was delivered');
        }
      }))
  }
}
