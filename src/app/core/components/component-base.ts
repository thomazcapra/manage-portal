import { Optional, Host, SkipSelf, OnInit, Input } from '@angular/core';
import { ControlContainer, AbstractControl } from '@angular/forms';
import { LoggerService } from '@portal/services';

/***
 *
 * This class allows the component to get a reference
 * to the AbstractControl behind it.
 */
export class ComponentBase implements OnInit {
  @Input() formControlName: string;
  protected control: AbstractControl;

  /**
   *
   * The
   *
   * @param controlContainer - Control container is the group that has the abstract control.
   * @param logger - Logger service.
   */
  constructor(
    @Optional()
    @Host()
    @SkipSelf()
    private controlContainer: ControlContainer,
    private logger: LoggerService
  ) {}

  /***
   *
   * Get the absctractControl from its controlContainer if it exists.
   */
  ngOnInit(): void {
    if (this.controlContainer) {
      if (this.formControlName) {
        this.control = this.controlContainer.control.get(this.formControlName);
      } else {
        this.logger.warn(
          'Missing FormControlName directive from host element of the component',
          this.ngOnInit
        );
      }
    } else {
      this.logger.warn(`Can't find parent FormGroup directive`, this.ngOnInit);
    }
  }
}
