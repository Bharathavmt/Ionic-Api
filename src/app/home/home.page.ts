import { Component } from '@angular/core';
import { NetworkRequestService } from '../services/network-request.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
products:any;
userData = {
  title: 'Jr Doctor',
  body:'General',
  userId: '2',
  
};
  constructor(private apiService:NetworkRequestService) 
  {
    // this.apiGetValue();
    this.apiPostValue();
    this.apiDeleteValue();
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
apiPostValue()
{
  let apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
  this.apiService.postFetchApiData(this.userData,apiUrl).subscribe(data => {
    this.products = data;
    console.log(JSON.stringify(this.products.title)); // Log the response data to see the result
    
    //alert(JSON.stringify(this.districts))
  
 
  });
}
apiDeleteValue()
{
  let apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

  this.apiService.deleteApiData(apiUrl).subscribe(data => {
    this.products = data;
    console.log(JSON.stringify(this.products)); // Log the response data to see the result
    
    //alert(JSON.stringify(this.districts))
  
 
  });
}
}
