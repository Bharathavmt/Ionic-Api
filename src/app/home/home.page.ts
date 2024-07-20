import { Component } from '@angular/core';
import { NetworkRequestService } from '../services/network-request.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
products:any;
  constructor(private apiService:NetworkRequestService) 
  {
    this.apiGetValue();
  }
apiGetValue()
{
  let apiUrl = 'https://dummyjson.com/products';
  
  this.apiService.getFetchApiData(apiUrl).subscribe(data => {
    this.products = data.products;
    console.log(JSON.stringify(this.products)); // Log the response data to see the result
    
    //alert(JSON.stringify(this.districts))
  
 
  });
}
}
