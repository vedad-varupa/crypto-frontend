import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {

  private firstNumber: String;
  private secondNumber: String;
  private thirdNumber: String;
  url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  calculateexp() {
    if(!this.firstNumber || !this.secondNumber){
      alert("Molimo Vas da unesete sva tri broja.")
      return;
    }
    this.http.get<number>(this.url + 'big-exp/' + this.firstNumber + '/' + this.secondNumber + '/' + this.thirdNumber).subscribe(
      (response: number) => {
        alert("(" + this.firstNumber + " ^ " + this.secondNumber + " mod " + this.thirdNumber + ") = " + response) 
      });
  }
}
