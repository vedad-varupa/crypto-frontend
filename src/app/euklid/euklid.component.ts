import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-euklid',
  templateUrl: './euklid.component.html',
  styleUrls: ['./euklid.component.css']
})
export class EuklidComponent implements OnInit {

  private firstNumber: String;
  private secondNumber: String;
  
  url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  calculateGcd() {
    if(!this.firstNumber || !this.secondNumber){
      alert("Molimo Vas da unesete oba broja.")
      return;
    }
    this.http.get<number>(this.url + 'big-gcd/' + this.firstNumber + '/' + this.secondNumber).subscribe(
      (response: number) => {
        alert("NZD(" + this.firstNumber + " , " + this.secondNumber + ") = " + response)
      });
  }

}
