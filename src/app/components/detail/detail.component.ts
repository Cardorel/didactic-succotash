import {Component, inject, OnInit, Signal} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectTarif} from "../../store/reducers/tarif.store";
import {tarifGroupAction} from "../../store/actions/tarif.action";
import {ActivatedRoute} from "@angular/router";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {TarifInterface} from "../../interfaces/tariff.interface";
import {SpinnerComponent} from "../spinner/spinner.component";
import {DetailItemContentComponent} from "../../UI/shared/detail-item-content/detail-item-content.component";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    NgOptimizedImage,
    SpinnerComponent,
    NgIf,
    DetailItemContentComponent
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  store = inject(Store);
  tarif: Signal<TarifInterface | null> = this.store.selectSignal(selectTarif);
  route = inject(ActivatedRoute)

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      const id = params['id'];
      this.store.dispatch(tarifGroupAction.loadTarifById({id}));
    })
  }
}
