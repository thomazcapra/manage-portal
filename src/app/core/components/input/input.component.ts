import { Component, OnInit, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input()
  label: string | null;

  @Input()
  placeholder: string | null;

  @Input()
  type: string | null;

  value: any;

  onChange = (_: any) => { };
  onTouched = () => { };

  constructor() { }

  ngOnInit() { }

  writeValue(obj: any = ''): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
