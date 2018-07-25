import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Visitor } from "../models/visitors";

@Injectable()
export class VisitorsService {
  private visitors: Visitor[] = [];
  constructor(private http: HttpClient) {
    this.getVisitorsArray().subscribe((data: Visitor[]) => {
      for(let d in data) {
        this.visitors.push(data[d]);
      }
    });
  }

  addVisitors(visitor: Visitor ) {
    this.visitors.unshift(visitor);
    return this.http.put('https://mglfood-94f14.firebaseio.com/visitors.json', this.visitors);
  }

  getVisitorsArray() {
    return this.http.get('https://mglfood-94f14.firebaseio.com/visitors.json');
  }
}
