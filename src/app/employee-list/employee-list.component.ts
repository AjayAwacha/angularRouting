import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  emps: any[] = [
    {name: 'Ajay', age: 26, position: 'ABC'},
    {name: 'Sopan', age: 27, position: 'GTR'},
    {name: 'Laxman', age: 28, position: 'ABC'}
  ]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  navigateTo(name: any, age: any) {
    console.log('navigateTo');
    this.router.navigate([name, age], {relativeTo: this.activatedRoute});
  }
}
