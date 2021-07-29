import { Component, OnInit, Input, HostListener } from '@angular/core'

@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() title: string = ''
  @Input() size: string = ''
  @Input() customWidth: string = ''
  @Input() marginTop: string = ''

  @Input() background: string = ''
  @Input() textClr: string = ''

  public visible = false
  public visibleAnimate = false

  constructor() {}

  ngOnInit() {}

  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    let x = event.keyCode
    if (x === 27) {
      this.hide()
    }
  }

  public show(): void {
    this.visible = true
    setTimeout(() => (this.visibleAnimate = true), 100)
  }

  public hide(): void {
    this.visibleAnimate = false
    setTimeout(() => (this.visible = false), 300)
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide()
    }
  }
}
