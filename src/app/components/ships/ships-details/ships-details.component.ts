import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShipsService } from '../../../services/ships.service';
declare var $: any;

@Component({
  selector: 'ships-details',
  templateUrl: './ships-details.component.html',
  styleUrls: ['./ships-details.component.scss'],
})
export class ShipsDetailsComponent implements OnInit {
  @Input() dataList: any;
  @Output() page:  EventEmitter<number>;

  config: any = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 10,
  };
  shipId: string = '';
  url: string = '';
  // Modal
  titleDetails: string = '';
  modelDetails: string = '';
  starship_class: string = '';
  
  constructor( public ships: ShipsService, private rutaActiva: ActivatedRoute ) {
    this.page = new EventEmitter()
  }
  

  ngOnInit(): void {

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.dataList.count,
    };
  }

  
  getStarshipId(url) {
    this.shipId = url.slice(32, -1);
    const urlImage = `https://starwars-visualguide.com/assets/img/starships/${this.shipId}.jpg`;
    this.config.totalItems = this.dataList.count
    return urlImage;
  }
  
  enviarPage(){
    this.page.emit(this.config.currentPage)
    
  }
  
  pageChanged(event) {
    this.config.currentPage = event;
    this.enviarPage()
  }

  openDetails(details) {
    console.log(this.ships);
    $('#exampleModal').modal('show');
    this.titleDetails = details.name;
    this.modelDetails = details.model;
    this.starship_class = details.starship_class;
  }
}
