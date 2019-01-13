import { Component, Input, OnInit, forwardRef } from '@angular/core';

import {
  ControlContainer,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

import { LoggerService } from '@portal/services';
import { ComponentBase } from '../component-base';

// Tell Angular that this component is a ControlValueAccessor
// (interface is not gonna cut it since it is stripped from the code
// when TypeScript is compiled to JavaScript). Do this by registering a provider.
const provider = {
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => InputComponent)
};

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [provider]
})
export class InputComponent extends ComponentBase
  implements OnInit, ControlValueAccessor {
  /**
   * The input placeholder that will be shown in the input field.
   */
  @Input()
  label: string | null;

  /**
   * The optional placeholder that will be shown in the input field.
   */
  @Input()
  placeholder: string | null;

  /**
   * Input type, can be any of these:
   * https://www.w3schools.com/tags/att_input_type.asp
   */
  @Input()
  type: string | null;

  /**
   * Max value to input type === 'number'
   */
  @Input()
  max: number | null;

  /**
   * Min value to input type === 'number'
   */
  @Input()
  min: number | null = 0;

  /**
   * Max number of character to input type === 'text'
   */
  @Input()
  maxLength: number | null;

  /**
   * Min number of character to input type === 'text'
   */
  @Input()
  minLength: number | null = 0;

  /**
   * The value of the abstractControl.
   */
  value: any;

  /**
   * Disable state.
   */
  isDisabled: boolean;

  /***
   * @inheritdoc
   */
  onChange = (_: any) => {};

  /***
   * @inheritdoc
   */
  onTouched = () => {};

  constructor(controlContainer: ControlContainer, logger: LoggerService) {
    super(controlContainer, logger);
  }

  /***
   * @inheritdoc
   */
  ngOnInit(): void {
    super.ngOnInit();
  }

  /***
   * @inheritdoc
   */
  writeValue(obj: any = ''): void {
    // (tells Angular how to write value from model into view)
    switch (this.type) {
      case 'number':
        if (this.max) {
          this.value = Math.min(this.max, obj);
        }
        break;
      // case 'text':
      default:
        this.value = obj;
    }
  }

  /***
   * @inheritdoc
   */
  registerOnChange(fn: any): void {
    // (registers a handler function that is called when the view changes)
    this.onChange = fn;
  }

  /***
   * @inheritdoc
   */
  registerOnTouched(fn: any): void {
    // (registers a handler to be called when the component receives a touch event, useful for knowing if the component has been focused).
    this.onTouched = fn;
  }

  /***
   * @inheritdoc
   */
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
