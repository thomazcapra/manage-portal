import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {
  form = new FormGroup({
    normalHour: new FormControl(null, [Validators.required]),
    extraHour: new FormControl(null, [Validators.required]),
    project: new FormControl(null, [Validators.required]),
    task: new FormControl(null, [Validators.required]),
    observations: new FormControl(null, [Validators.required])
  });

  constructor() {}

  ngOnInit() {}
}
