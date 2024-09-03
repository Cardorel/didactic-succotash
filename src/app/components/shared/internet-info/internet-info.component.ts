import {Component, input, InputSignal} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-internet-info',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './internet-info.component.html',
  styleUrl: './internet-info.component.css'
})
export class InternetInfoComponent {
  internetSpeed: InputSignal<number> = input.required<number>();
  textType = input.required<string>();
  isRotating = input.required<boolean>();
}
