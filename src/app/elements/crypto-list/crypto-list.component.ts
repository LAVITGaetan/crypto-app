import { Component, signal } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent {
  constructor(public apiService: ApiService) { }

  api_data = signal<any>({empty:true})
  ngOnInit() {
    this.apiService.fetchApi()
  }
}