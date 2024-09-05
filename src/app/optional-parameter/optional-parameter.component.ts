import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-optional-parameter',
  templateUrl: './optional-parameter.component.html',
  styleUrls: ['./optional-parameter.component.scss']
})
export class OptionalParameterComponent implements OnInit {

  userDetails: any;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.userDetails = data.userProfile;
    });
    debugger
    this.activatedRoute.params.subscribe((param) => console.log('param', param));

    this.activatedRoute.queryParams.subscribe((queryparams) => console.log('queryparams', queryparams));

    this.activatedRoute.fragment.subscribe((fragment) => console.log('fragment', fragment));
  }

}
