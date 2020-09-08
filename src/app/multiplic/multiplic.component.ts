import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-multiplic',
  templateUrl: './multiplic.component.html',
  styleUrls: ['./multiplic.component.css']
})
export class MultiplicComponent implements OnInit {
  private firstNumber: String;
  private secondNumber: String;
  private thirdNumber: String;
 
  url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  calculatemultiplication() {
    if(!this.firstNumber || !this.secondNumber || !this.thirdNumber){
      alert("Molimo Vas da unesete sva tri broja.")
      return;
    }
    this.http.get<number>(this.url + 'big-multiplication/' + this.firstNumber + '/' + this.secondNumber + '/' + this.thirdNumber).subscribe(
      (response: number) => {
        alert("(" + this.firstNumber + " * " + this.secondNumber + " mod " + this.thirdNumber + ") = " + response) 
      });
  }
}
