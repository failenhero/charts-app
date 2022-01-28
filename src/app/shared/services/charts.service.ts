import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Chart} from "../models";
import {Observable} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(
    private http: HttpClient,
    private angularFirestore: AngularFirestore
  ) { }

  getChartsList$(): Observable<Chart[]> {
    return this.angularFirestore.collection('charts').valueChanges({idField: 'chartId'}) as Observable<Chart[]>;
  }

  addNewChart(chart: Chart): Promise<any> {
    return new Promise<any>(() => {
      return this.angularFirestore.collection('charts').add(chart).then(response => console.log(response.id));
    });
  }

  deleteChart(id: string): Promise<any> {
    return new Promise<any>(() => {
      return this.angularFirestore.collection('charts').doc(id).delete();
    })
  }

}
