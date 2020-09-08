import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-inverse',
  templateUrl: './inverse.component.html',
  styleUrls: ['./inverse.component.css']
})
export class InverseComponent implements OnInit {

  private firstNumber: String
  private secondNumber: String
  url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  calculateinverse() {
    if (!this.firstNumber || !this.secondNumber) {
      alert("Molimo Vas da unesete oba broja.")
      return;
    }

    this.http.get<any>(this.url + 'big-inverse2/' + this.firstNumber + '/' + this.secondNumber).subscribe(
      (response: any) => {
        if (response == null) {
          alert("Modularni inverz ne postoji!");
        } else {
          alert("(" + this.firstNumber + " ^-1  mod " + this.secondNumber + ") = " + response)
        }
      }
    );
  }
}
