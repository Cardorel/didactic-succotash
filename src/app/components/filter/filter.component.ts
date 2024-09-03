import {Component, inject, signal} from '@angular/core';
import {FilterIcoComponent} from "../../UI/icons/filter-ico/filter-ico.component";
import {Store} from "@ngrx/store";
import {tarifGroupAction} from "../../store/actions/tarif.action";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    FilterIcoComponent,
    NgClass
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  store = inject(Store);
  isOpen = signal(false);

  sortByCheaperPrice(sortType: string) {
    this.store.dispatch(tarifGroupAction.sortByPrice({sort: sortType}))
  }

  sortByExpensivePrice(sortType: string) {
    this.store.dispatch(tarifGroupAction.sortByPrice({sort: sortType}))
  }

  sortByNameAsc(sortType: string) {
    this.store.dispatch(tarifGroupAction.sortByName({name: sortType}))
  }

  sortByNameDesc(sortType: string) {
    this.store.dispatch(tarifGroupAction.sortByName({name: sortType}))
  }


  sortByMaxDownloadSpeed() {
    this.store.dispatch(tarifGroupAction.sortByMaxDownloadSpeed());
  }

  sortByMaxUploadSpeed() {
    this.store.dispatch(tarifGroupAction.sortByMaxUploadSpeed());
  }

  handleOpenInMobile() {
    this.isOpen.update(m => !m)
  }

  closeModal() {
    this.isOpen.set(false)
  }
}
