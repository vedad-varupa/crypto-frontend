import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-rsa',
  templateUrl: './rsa.component.html',
  styleUrls: ['./rsa.component.css']
})
export class RsaComponent implements OnInit {

  private firstNumber: any;
  private items: any;
  url = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  rsaalgoritam() {
    this.http.get<any>(this.url + 'rsa-algoritam/' + this.firstNumber + "").subscribe(
      (response: any) => {
        this.items = response;
     // alert(" " + response)
      });
  }
}
