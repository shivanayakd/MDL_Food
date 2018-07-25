import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Depalletiser } from "../models/depalletizer.model";

@Injectable()
export class DepalletizerService {
  private depalletizers: Depalletiser[] = [];
  private dlength: number;
  constructor(private http: HttpClient) {
    this.getDepalletizerArray().subscribe((data: any) => {
    
      for(let d in data) {
        console.log('data dddd->', d);
        if(data[d] == 'records') {
          this.depalletizers[this.dlength].records.push(data[d]);
          this.depalletizers[this.dlength].records.push(data[d]);
          return;
          // for(let r in data[d]){
          //  let foundValue = this.depalletizers.find(ele => ele === 'records');
            // this.depalletizers.
          // }
        }
        this.depalletizers.push(data[d]);
        this.dlength = this.depalletizers.length - 1;
      }
      console.log('data--->', this.depalletizers);
    });
  }

  addDepalletizer(depalletizer: any ) {
    let index = this.depalletizers.findIndex(p => p.date == depalletizer.date);
    if(index !== -1) {
      console.log('records-->', this.depalletizers);
      // this.depalletizers[index].records.unshift(depalletizer.records);
      // this.depalletizers[index].records.unshift(depalletizer.records);
    }
    else {
      this.depalletizers.unshift(depalletizer);
    }
      console.log('date index', index);
    console.log('list of depalletizer', this.depalletizers);
    return this.http.put('https://mglfood-94f14.firebaseio.com/depalletizers.json', this.depalletizers);
  }

  getDepalletizerArray() {
    return this.http.get('https://mglfood-94f14.firebaseio.com/depalletizers.json');
  }
}
