import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TarifInterface} from "../../interfaces/tariff.interface";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TariffService {
  http = inject(HttpClient);

  constructor() { }

  getTariffs(): Observable<{tarifs: TarifInterface[]}> {
    return this.http.get<{tarifs: TarifInterface[]}>(environment.apiUrl);
  }

  getTariffById(id:string):Observable<{tarif: TarifInterface}> {
    return this.http.get<{tarif: TarifInterface}>(`${environment.apiUrl}/${id}`);
  }
}
