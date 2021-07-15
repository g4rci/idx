import { Component, OnInit, Input } from '@angular/core';
declare var $: any;


@Component({
  selector: 'page-two-details',
  templateUrl: './page-two-details.component.html',
  styleUrls: ['./page-two-details.component.scss']
})
export class PageTwoDetailsComponent implements OnInit {

  @Input() dataList: any;
  config: any;
  shipId: string = '';
  url: string = '';
  // Modal
  titleDetails: string = '';
  climate: string = '';
  orbital_period: string = '';

  constructor() { 
  }
  
  ngOnInit(): void {
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.dataList.length
      };
  }

  getPlanetId(url) {
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
    this.climate = details.climate;
    this.orbital_period = details.orbital_period
  }

}
