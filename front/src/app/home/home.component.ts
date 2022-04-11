import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isActive: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toogle() {
    this.isActive = !this.isActive;
  }

}
