import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  private firstNumber: String;
  private secondNumber: String;
  private thirdNumber: String;
  url = 'http://localhost:8081/';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  modulard() {
    if(!this.firstNumber || !this.secondNumber || !this.thirdNumber){
      alert("Molimo Vas da unesete sve brojeve.")
      return;
    }
   
     this.http.get<any>(this.url + 'big-d/' + this.firstNumber + '/' + this.secondNumber + '/' + this.thirdNumber).subscribe(
      (response: any) => {
        if (response == null) {
          alert("Modularni inverz ne postoji!");
        } else {
          alert("(" + this.firstNumber + " /" + this.secondNumber + " mod " + this.thirdNumber + ") = " + response)
        }
      }
    );
  }
}
