import { Component } from '@angular/core';
import data from '../assets/humbleDatabase2.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'choiceHistorian';
  monthList: any = data; 

}
