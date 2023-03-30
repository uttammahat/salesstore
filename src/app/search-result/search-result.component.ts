import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  @ViewChild('categoryFilterWrapperRef')
  private categoryFilterWrapperRef: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }

  filterWrapperToggle() {
    this.categoryFilterWrapperRef.nativeElement.classList.toggle('show');
    console.log("click");
    
  }

}
