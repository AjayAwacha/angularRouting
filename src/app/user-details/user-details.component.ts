import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => console.log('param ', param));

    this.activatedRoute.queryParams.subscribe((queryParams) => console.log('query params ', queryParams));

    this.activatedRoute.fragment.subscribe((fragment) => console.log('fragment ', fragment));

  }

}
