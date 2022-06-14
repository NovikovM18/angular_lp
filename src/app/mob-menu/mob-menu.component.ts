import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mob-menu',
  templateUrl: './mob-menu.component.html',
  styleUrls: ['./mob-menu.component.scss']
})
export class MobMenuComponent implements OnInit {
  @Output() tog = new EventEmitter<boolean>();

  public toggle(change: boolean): void {
    this.tog.emit(change);
  }
  constructor() { }
  ngOnInit(): void {
  }
}
