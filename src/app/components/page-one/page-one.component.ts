import { Component, OnInit, Input } from '@angular/core';
import { People, PeopleState } from '../../store/reducers/people.reducer';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  public dataList: People[] = [];

  constructor( private people: PeopleState) { 
  }
  
  ngOnInit(): void {
    this.people.getPeople().subscribe((people) => {
      this.dataList = people;
      console.log('PEOPLE -->', this.dataList)
    })
  }
}

