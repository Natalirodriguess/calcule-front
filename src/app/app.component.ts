import {Component, NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HttpClientModule, CommonModule, RouterOutlet],
  standalone: true,

})
export class AppComponent {
  title = 'calcule';
  constructor() {
  }


}
