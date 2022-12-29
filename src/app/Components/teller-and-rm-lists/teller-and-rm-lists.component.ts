import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListOfTasks } from 'src/app/Interfaces/Interface';
import TellerTasksMM from '../../../assets/Data/TellerTasksListMaker.json';
import TellerTasksCC from '../../../assets/Data/TellerTasksListChecker.json';
import RMTasksM from '../../../assets/Data/RMTasksListMaker.json';
import RMTasksC from '../../../assets/Data/RMTasksListChecker.json';
/* import RMTasksM from '../../../assets/Data/RMTasksMaker.json';
import RMTasksC from '../../../assets/Data/RMTasksChecker.json'; */

@Component({
  selector: 'app-teller-and-rm-lists',
  templateUrl: './teller-and-rm-lists.component.html',
  styleUrls: ['./teller-and-rm-lists.component.css'],
})
export class TellerAndRmListsComponent implements OnInit {
  public id: string | undefined;
  public List: any[] | undefined;
  public title = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    if (this.id == '1') {
      this.List = TellerTasksMM;
      this.title = 'مهــــام الصــراف "Maker"';
    } else if (this.id == '2') {
      this.List = TellerTasksCC;
      this.title = 'مهــــام الصــراف "Checker"';
    } else if (this.id == '3') {
      this.List = RMTasksM;
      this.title = 'مهــــام خدمه عمــلاء "Maker"';
    } else if (this.id == '4') {
      this.List = RMTasksC;
      this.title = 'مهــــام خدمه عمــلاء "Checker"';
    }
  }
  Toggle(e: ListOfTasks) {
    e.Open = !e.Open;
  }
}
