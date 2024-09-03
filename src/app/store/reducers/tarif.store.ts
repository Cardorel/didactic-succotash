import {TarifInterface} from "../../interfaces/tariff.interface";
import {createFeature, createReducer, on} from "@ngrx/store";
import {tarifGroupAction} from "../actions/tarif.action";


interface TarifStateInterface {
   tarifs: TarifInterface[];
   isLoading: boolean;
   tarif: TarifInterface | null,
   error: string | null,
 }

 export const initialState: TarifStateInterface = {
   tarifs: [],
   isLoading: true,
   tarif: null,
   error: null
 }

 export const tarifStore = createFeature({
   name: 'tarif',
   reducer: createReducer(
     initialState,
     on(tarifGroupAction.getAllTarifs, (state, action) => ({...state, tarifs: action.tarifs, isLoading: false })),
     on(tarifGroupAction.getTarifById, (state, action) => ({...state, tarif: action.tarif, isLoading: false })),
     on(tarifGroupAction.hasErrorMessage, (state, action) => ({...state, error: action.error})),
     on(tarifGroupAction.sortByName, (state, action) => {
       const sortedName = action.name.toLowerCase() === 'asc' ? 1 : -1;
       return {...state, tarifs: [...state.tarifs].sort((a:TarifInterface, b:TarifInterface) =>
           sortedName * a.productShortName.localeCompare(b.productShortName)
         )}
     }),
     on(tarifGroupAction.sortByPrice, (state, action) => {
       const sortedPrice = action.sort.toLowerCase() === 'cheap' ? 1 : -1;
       return {...state, tarifs: [...state.tarifs].sort((a:TarifInterface, b:TarifInterface) =>
           sortedPrice * a.prices.totals.localeCompare(b.prices.totals)
         )}
     }),
     on(tarifGroupAction.sortByMaxDownloadSpeed, (state) => ({...state, tarifs: [...state.tarifs].sort((a:TarifInterface, b:TarifInterface) =>
           +b.internetSpeed.download - +a.internetSpeed.download
         )})),
     on(tarifGroupAction.sortByMaxUploadSpeed, (state) => ({...state, tarifs: [...state.tarifs].sort((a:TarifInterface, b:TarifInterface) =>
         +b.internetSpeed.upload - +a.internetSpeed.upload
       )})),
     on(tarifGroupAction.searchByNameOrByBenefit, (state, action) => {
       const filteredTarifs = [...state.tarifs].filter(tarif =>
         tarif.productShortName.toLowerCase().includes(action.name.toLowerCase()) ||
         tarif.remarks.some(r => r.header.toLowerCase().includes(action.name.toLowerCase()))
       );
       return {...state, tarifs: filteredTarifs };
     })
   )}
 )

export const {
  selectTarifs,
  selectTarif,
  selectIsLoading,
  selectError
} = tarifStore
