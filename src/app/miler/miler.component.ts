import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-miler',
  templateUrl: './miler.component.html',
  styleUrls: ['./miler.component.css']
})
export class MilerComponent implements OnInit {
  private firstNumber: String;
  private secondNumber: String;
  url = 'http://localhost:8081/';

  ngOnInit() {
  }
  constructor(private http: HttpClient) { }
  milertest() {
    if(!this.firstNumber || !this.secondNumber){
      alert("Molimo Vas da unesete oba broja.")
      return;
    }
    this.http.get<any>(this.url + 'millerrabinov-test/' + this.firstNumber + '/' + this.secondNumber).subscribe(
      (response: any) => {
        alert(" " + response)
      }
    );
  }
}

