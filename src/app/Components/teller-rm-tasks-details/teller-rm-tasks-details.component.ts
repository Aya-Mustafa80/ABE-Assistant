import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-teller-rm-tasks-details',
  templateUrl: './teller-rm-tasks-details.component.html',
  styleUrls: ['./teller-rm-tasks-details.component.css'],
})
export class TellerRMTasksDetailsComponent implements OnInit {
  Task: any;
  public id: string | undefined;
  constructor(private _location: Location, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    fetch(`assets/Data/Tasks/${this.id}.json`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.Task = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  backClicked() {
    this._location.back();
  }
}
