import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PageTwoDetailsComponent } from './page-two-details.component';
import { PaginationControlsComponent } from 'ngx-pagination';
import { Component, Pipe, PipeTransform } from '@angular/core';

describe('ShipsDetailsComponent', () => {
  let component: PageTwoDetailsComponent;
  let fixture: ComponentFixture<PageTwoDetailsComponent>;

  @Component({
    selector: 'pagination-controls',
    template: '<p>Mock Pagination controls Component</p>'
  })
  class MockPaginationControls {}
  @Pipe({name: 'paginate'})
  class MockPipe implements PipeTransform {
      transform(value: number): number {
          //Do stuff here, if you want
          return value;
      }
  }

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PageTwoDetailsComponent, MockPaginationControls, MockPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTwoDetailsComponent);
    component = fixture.componentInstance;
    component.dataList = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
