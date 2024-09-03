import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TarifInterface} from "../../interfaces/tariff.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TariffService {
  http = inject(HttpClient);

  constructor() { }

  getTariffs(): Observable<{tarifs: TarifInterface[]}> {
    return this.http.get<{tarifs: TarifInterface[]}>('https://imbesmkaiakotvewnpnf.supabase.co/functions/v1/lefleuvecg');
  }

  getTariffById(id:string):Observable<{tarif: TarifInterface}> {
    return this.http.get<{tarif: TarifInterface}>(`https://imbesmkaiakotvewnpnf.supabase.co/functions/v1/lefleuvecg/${id}`);
  }
}
