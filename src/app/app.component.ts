import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {TarifListComponent} from "./components/tarif-list/tarif-list.component";
import {FilterComponent} from "./components/filter/filter.component";
import {Store} from "@ngrx/store";
import {tarifGroupAction} from "./store/actions/tarif.action";
import {selectIsLoading} from "./store/reducers/tarif.store";
import {SpinnerComponent} from "./components/spinner/spinner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TarifListComponent, FilterComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'VerivoxTestProject';
  store  = inject(Store);
  isLoading = this.store.selectSignal(selectIsLoading);

  ngOnInit(): void {
    this.store.dispatch(tarifGroupAction.loadAllTarifs());
  }
}
