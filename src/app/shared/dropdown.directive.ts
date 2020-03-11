import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  constructor(public elementRef: ElementRef) {}
  @HostBinding("class.open") isOpen = false;

  @HostListener("click") toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
