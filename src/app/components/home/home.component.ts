import {Component} from '@angular/core';
import {FilterIcoComponent} from "../../UI/icons/filter-ico/filter-ico.component";
import {TarifListComponent} from "../tarif-list/tarif-list.component";
import {FilterComponent} from "../filter/filter.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FilterIcoComponent,
    TarifListComponent,
    FilterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
