import {Component, inject, input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {InternetInfoComponent} from "../shared/internet-info/internet-info.component";
import {Remark, TarifInterface} from "../../interfaces/tariff.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tarif-item',
  standalone: true,
  imports: [
    NgOptimizedImage,
    InternetInfoComponent
  ],
  templateUrl: './tarif-item.component.html',
  styleUrl: './tarif-item.component.css'
})
export class TarifItemComponent {
  tarif = input.required<TarifInterface>();
  index = input<number>();
  router = inject(Router)

  getThreeInitialRemark():Remark[]{
    return this.tarif().remarks.slice(0, 3);
  }

  async goToDetailPage(id:string) {
    await this.router.navigate([`/${id}`])
  }
}
