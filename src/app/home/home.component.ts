import {
  Component,
  HostListener,
  OnInit,
} from '@angular/core';

declare var $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cellsToShowItem: any;
  carouselHeight: any;

  public screenWidth: any;
  public screenHeight: any;

  constructor() {}

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    console.log(this.screenWidth);

    if (this.screenWidth > 1200) {
      this.cellsToShowItem = 3;
      this.carouselHeight = 490;
    } else if (this.screenWidth > 991.98) {
      this.cellsToShowItem = 3;
      this.carouselHeight = 430;
    } else if (this.screenWidth > 768) {
      this.cellsToShowItem = 1;
      this.carouselHeight = 450;
    } else if (this.screenWidth > 576) {
      this.cellsToShowItem = 1;
      this.carouselHeight = 680;
    } else if (this.screenWidth > 480) {
      this.cellsToShowItem = 1;
      this.carouselHeight = 610;
    } else if (this.screenWidth > 390) {
      this.cellsToShowItem = 1;
      this.carouselHeight = 550;
    } else if (this.screenWidth > 300) {
      this.cellsToShowItem = 1;
      this.carouselHeight = 465;
    } else {
      this.cellsToShowItem = 1;
      this.carouselHeight = 450;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
}