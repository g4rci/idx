import { Component, OnInit, Input } from '@angular/core';
declare var $: any;


@Component({
  selector: 'page-one-details',
  templateUrl: './page-one-details.component.html',
  styleUrls: ['./page-one-details.component.scss']
})
export class PageOneDetailsComponent implements OnInit {

  @Input() dataList: any;
  config: any;
  shipId: string = '';
  url: string = '';
  // Modal
  titleDetails: string = '';
  peopleGender: string = '';
  peopleHeight: string = '';

  constructor() { 
  }
  
  ngOnInit(): void {
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.dataList.length
      };
  }

  getStarshipId(url) {
    this.shipId = url.slice(0, -1)
    const urlImage = `${this.shipId}.jpg`
    return urlImage !== "";
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  openDetails(details) {
    $("#exampleModal").modal('show');
    this.titleDetails = details.name;
    this.peopleGender = details.gender;
    this.peopleHeight = details.height
  }

}
