import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from  'rxjs/observable/of';
import { catchError, map, tap } from  'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';

// const endpoint = '/assets/json/services.json'
const endpoint = 'assets/json/og_services.json'
const httpOptions={
	headers: new HttpHeaders({
		'content-type':'application/json',
		'day':'Thursday',
		'x-amz-docs-region': 'us-west-2'
	})
}
@Injectable()
export class ServicesService {

  private baseURL = 'https://mh24vgs0vi.execute-api.us-west-2.amazonaws.com/Development'

  constructor(private httpClient:HttpClient, private http:Http) { }

  list():Observable<any>{
		return this.httpClient.get(endpoint)
	}

  create(name:string, city:string, phone:string, email:string, message:string, option:string,utm_source:string="",utm_medium:string="",utm_campaign:string=""): Observable<any>{
    let apiSendMessageEndpoint = `${this.baseURL}/`
    let data = {
      'name':name,
      'city':city,
      'phone':phone,
      'email':email,
			'message':message,
			'option':option,
			'utm_source':utm_source,
			'utm_medium':utm_medium,
			'utm_campaign':utm_campaign
    }
		//console.log("S",utm_source,"M",utm_medium,"C:",utm_campaign)
		return this.httpClient.post(apiSendMessageEndpoint, data, {
			headers: new HttpHeaders().set("content-type","application/json")
			})
	}


  // get(slug):Observable<any>{
	//   return this.http.get(endpoint).map(response=>{
	// 	  let data = response.json().filter(item=>{
	// 	  	if (item.slug == slug){
	// 		  	return item
	// 	  	}
	// 		})
	// 		if (data.length == 1){
	// 	  	return data[0]
	//   	}
	//   	return {}
	// 	}).catch(this.handleError)
  // }

  search(query){
	  return this.http.get(endpoint).map(response=>{
		let data = []
		let req = response.json().filter(item=>{
			if (item.title.toLowerCase().indexOf(query.toLowerCase()) >= 0){
				data.push(item)
			}
		})
		return data
	  })
  }

  private handleError(error:any, caught:any):any{
	  //console.log(error, caught)
  }
}
