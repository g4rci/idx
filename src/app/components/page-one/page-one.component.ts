import { Component, OnInit, Input } from '@angular/core';
import { People, PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  public dataList: People[] = [];

  constructor( private people: PeopleService) { 
  }
  
  ngOnInit(): void {
    this.people.getPeople().subscribe((people) => {
      this.dataList = people;
      console.log('PEOPLE -->', this.dataList)
    })
  }
}

