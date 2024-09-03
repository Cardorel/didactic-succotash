import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {tarifGroupAction} from "../actions/tarif.action";
import {catchError, exhaustMap, map, of} from "rxjs";
import {TariffService} from "../../services/tariff/tariff.service";


@Injectable()
export class TarifEffect {
  actions$: Actions = inject(Actions);
  tarifService = inject(TariffService);

  loadTarifs$ = createEffect(()=> this.actions$.pipe(
    ofType(tarifGroupAction.loadAllTarifs),
    exhaustMap(
      () => this.tarifService.getTariffs().pipe(
        map((tarifs) => {
          return tarifGroupAction.getAllTarifs({tarifs: tarifs.tarifs})
        }),
        catchError((error) => of(tarifGroupAction.hasErrorMessage({error})))
      ))
  ))

  loadTarifById$ = createEffect(()=> this.actions$.pipe(
    ofType(tarifGroupAction.loadTarifById),
    exhaustMap(({id}) => this.tarifService.getTariffById(id).pipe(
      map((tarif) => {
        return tarifGroupAction.getTarifById({tarif: tarif.tarif})
      }),
      catchError((error) => of(tarifGroupAction.hasErrorMessage({error}))))
    )))
}
