import { Injectable, signal, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  api_data = signal<any>({empty : true})
  private api_url: string = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BNB,ADA,SOL,DOT,LTC,LINK,XRP,XLM,XTZ,UNI&tsyms=USD,EUR'

  fetchApi() {
    this.httpClient.get<any>(this.api_url).subscribe((data) => {
      this.api_data.set(data)
    })
  }
}
