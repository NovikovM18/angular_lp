import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public show = false;
  constructor() { }
  public tog () {
    this.show = !this.show;
  }
  ngOnInit(): void {
  }

}
