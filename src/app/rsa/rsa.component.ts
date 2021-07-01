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
  url = 'http://localhost:8081/';
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  rsaalgorithm() {
    this.http.get<any>(this.url + 'rsa-algorithm/' + this.firstNumber + "").subscribe(
      (response: any) => {
        this.items = response;
     // alert(" " + response)
      });
  }
}
