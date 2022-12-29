import { Component, OnInit } from '@angular/core';
import MainListDataTeller from '../../../assets/Data/TellerPositions.json';
import MainListDataRM from '../../../assets/Data/RMPositions.json';
import { MainLS } from 'src/app/Interfaces/Interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  MainLst1: MainLS = MainListDataTeller;
  MainLst2: MainLS = MainListDataRM;

  falg1: boolean = false;
  falg2: boolean = false;

  ngOnInit(): void {}
  OpenList1() {
    this.falg1 = !this.falg1;
  }
  OpenList2() {
    this.falg2 = !this.falg2;
  }
}
