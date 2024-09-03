import {Component, input} from '@angular/core';

@Component({
  selector: 'app-detail-item-content',
  standalone: true,
  imports: [],
  templateUrl: './detail-item-content.component.html',
  styleUrl: './detail-item-content.component.css'
})
export class DetailItemContentComponent {
  text = input();
  content = input()
}
