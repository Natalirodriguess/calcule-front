import {Component, NgModule} from '@angular/core';
import {CalculeService} from "./service/calcule.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HttpClientModule, CommonModule, RouterOutlet],
  standalone: true,
  providers: [CalculeService]
})
export class AppComponent {
  title = 'calcule';

  operadorUm: number;
  operadorDois: number;
  operador: string;
  passo: number = 1;

  constructor(protected calculeService: CalculeService) {
  }

  realizarPasso(){
    this.passo = this.passo + 1;
    if(this.passo >= 4){
      this.passo = 1;
    }
  }

  desfazerPasso(){
    if(this.passo > 1){
      this.passo = this.passo - 1;
    }

  }

  buttonNumberClick(value: number) {
      if (!this.operador) {
        this.operadorUm = value;
      } else {
        this.operadorDois = value;
      }
  }
  buttonOperadorClick(value: string) {
    this.operador = value;
  }

}
