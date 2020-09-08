import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-fermat',
  templateUrl: './fermat.component.html',
  styleUrls: ['./fermat.component.css']
})
export class FermatComponent implements OnInit {
  private firstNumber: String;
  private secondNumber: String;
  url = 'http://localhost:8080/';
  

  ngOnInit() {
  }

  constructor(private http: HttpClient) { }
  fermattest() {
    if(!this.firstNumber || !this.secondNumber){
      alert("Molimo Vas da unesete oba broja.")
      return;
    }
    this.http.get<any>(this.url + 'fermaov-testprostosti/' + this.firstNumber + '/' + this.secondNumber).subscribe(
      (response: any) => {
        alert(" " + response)
      }
    );
  }
}
