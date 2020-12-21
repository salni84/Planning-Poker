import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  toggle1: boolean = false;
  toggle2: boolean = false;
  toggle3: boolean = false;
  toggle5: boolean = false;
  toggle8: boolean = false;
  toggle0: boolean = false;



  constructor() { }

  ngOnInit(): void {
  }

  selectCard(id:number) {

    if (id === 1) {
      this.toggle1 = !this.toggle1;
      this.toggle2 = false;
      this.toggle3 = false;
      this.toggle5 = false;
      this.toggle8 = false;
      this.toggle0 = false;
      }
    else if (id === 2) {
      this.toggle2 = !this.toggle2;
      this.toggle1 = false;
      this.toggle3 = false;
      this.toggle5 = false;
      this.toggle8 = false;
      this.toggle0 = false;
    }
    else if (id === 3) {
      this.toggle3 = !this.toggle3;
      this.toggle2 = false;
      this.toggle1 = false;
      this.toggle5 = false;
      this.toggle8 = false;
      this.toggle0 = false;
    }
    else if (id === 5) {
      this.toggle5 = !this.toggle5;
      this.toggle2 = false;
      this.toggle3 = false;
      this.toggle1 = false;
      this.toggle8 = false;
      this.toggle0 = false;
    }
    else if (id === 8) {
      this.toggle8 = !this.toggle8;
      this.toggle2 = false;
      this.toggle3 = false;
      this.toggle5 = false;
      this.toggle1 = false;
      this.toggle0 = false;
    }
    else if (id === 0) {
      this.toggle0 = !this.toggle0;
      this.toggle2 = false;
      this.toggle3 = false;
      this.toggle5 = false;
      this.toggle8 = false;
      this.toggle1 = false;
    }
  }
}
