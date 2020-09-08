import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exteuklid',
  templateUrl: './exteuklid.component.html',
  styleUrls: ['./exteuklid.component.css']
})
export class ExteuklidComponent implements OnInit {
  private firstNumber: String;
  private secondNumber: String;
  lista: any[];
  result: string;
  url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  calculateExtEucGcd() {

    if (!this.firstNumber || !this.secondNumber) {
      alert("Molimo Vas da unesete oba broja.")
      return;
    }
    this.http.get<'euclidContainers'>(this.url + 'extended-euklid-gcd/' + this.firstNumber + '/' + this.secondNumber).subscribe(
      (response: any) => {
        this.lista = JSON.parse(JSON.stringify(response.euclidContainers));
        this.result = response.result;
      });
  }
}
