import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const endpoint = '/assets/json/faq.json';

@Injectable()
export class FaqService {

  constructor(private http:Http) { }

  list(){
    return this.http.get(endpoint).map(response=>response.json()).catch(this.handleError)
  }
	listInput(input){
		return this.http.get(input).map(response=>response.json()).catch(this.handleError)
	}
  get(slug){
	  return this.http.get(endpoint).map(response=>{
		  let data = response.json().filter(item=>{
		  	if (item.slug == slug){
			  	return item
		  	}
			})
			if (data.length == 1){
		  	return data[0]
	  	}
	  	return {}
		}).catch(this.handleError)
  }

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
	  .catch(this.handleError)
  }

  handleError(error:any, caught:any):any{
    //console.log(error, caught)
  }

}
