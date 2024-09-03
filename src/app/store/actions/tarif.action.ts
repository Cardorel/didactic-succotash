import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {TarifInterface} from "../../interfaces/tariff.interface";


export const tarifGroupAction = createActionGroup({
  source: 'tarif',
  events: {
    'get all tarifs': props<{tarifs: TarifInterface[]}>(),
    'load all tarifs': emptyProps(),
    'get tarif by id': props<{tarif: TarifInterface}>(),
    'load tarif by id': props<{id: string}>(),
    'has error message': props<{error: string}>(),
    'sort by price': props<{sort: string}>(),
    'sort by name': props<{name: string}>(),
    'sort by max download speed': emptyProps(),
    'sort by max upload speed': emptyProps(),
    'search by name or by benefit': props<{name: string}>()
  }
})
