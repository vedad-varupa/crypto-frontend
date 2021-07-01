import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-kvadriraj',
  templateUrl: './kvadriraj.component.html',
  styleUrls: ['./kvadriraj.component.css']
})
export class KvadrirajComponent implements OnInit {

  private firstNumber: String;
  private secondNumber: String;
  private thirdNumber: String;
  url = 'http://localhost:8081/';


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  calculatekvadriraj() {
    if(!this.firstNumber || !this.secondNumber || !this.thirdNumber){
      alert("Molimo Vas da unesete sva tri broja.")
      return;
    }
    this.http.get<number>(this.url + 'kvadriraj/' + this.firstNumber + '/' + this.secondNumber + '/' + this.thirdNumber).subscribe(
      (response: number) => {
        alert("(" + this.firstNumber + " ^ " + this.secondNumber + " mod " + this.thirdNumber + ") = " + response) 
      });
  }
}
