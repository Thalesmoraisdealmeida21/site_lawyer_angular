import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }


  sendMail(email){
        const url = environment.api + "/sendmail"
        return this.http.post(url, email);   
  }

  saveContact(data){
    const url = environment.api + "/contato"
    return this.http.post(url, data);
  }


  /* 
  to: req.body.to,
                from: req.body.from,
                subject: req.body.subject,
                message: req.body.message*/



}
