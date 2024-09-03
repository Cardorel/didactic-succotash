import {Component, inject} from '@angular/core';
import {SearchIcoComponent} from "../../UI/icons/search-ico/search-ico.component";
import {Store} from "@ngrx/store";
import {tarifGroupAction} from "../../store/actions/tarif.action";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SearchIcoComponent,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  store = inject(Store)

  searchByNameOrByBenefit($event: Event) {
    const value = ($event.target as HTMLInputElement).value;
     !value.trim().length && this.store.dispatch(tarifGroupAction.loadAllTarifs());
    this.store.dispatch(tarifGroupAction.searchByNameOrByBenefit({name: value}));
  }
}
