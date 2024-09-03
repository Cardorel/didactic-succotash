import {Component, inject, Signal} from '@angular/core';
import {TarifItemComponent} from "../tarif-item/tarif-item.component";
import {Store} from "@ngrx/store";
import {selectTarifs} from "../../store/reducers/tarif.store";
import {TarifInterface} from "../../interfaces/tariff.interface";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tarif-list',
  standalone: true,
  imports: [
    TarifItemComponent,
    NgForOf
  ],
  templateUrl: './tarif-list.component.html',
  styleUrl: './tarif-list.component.css'
})
export class TarifListComponent {
  store = inject(Store);
  tarifs:Signal<TarifInterface[]> = this.store.selectSignal(selectTarifs);
}
