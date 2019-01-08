import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input()
  label: string | null;

  @Input()
  placeholder: string | null;

  @Input()
  type: string | null;

  constructor() {}

  ngOnInit() {}
}
