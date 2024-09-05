import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RoutingEx';

  userId: string = '345';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  navigateToHome() {
    // this.router.navigate(['/home']);
    this.router.navigate(['home'], {relativeTo: this.activatedRoute});  // relative path
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  passParameter() {
    this.router.navigate(['user', '420'], {relativeTo: this.activatedRoute})
  }

  redirect() {
    this.router.navigate(['optional', 'Ajay', '420'], {relativeTo: this.activatedRoute, queryParams: {q2: 'val2'}, fragment:'f2'});
  }

  navigateToHomeRelative() {
    this.router.navigate(['home'], {relativeTo: this.activatedRoute});  // relative path
  }

  navigateToContactRelative() {
    this.router.navigate(['4'], {relativeTo: this.activatedRoute});  // relative path
  }
}
