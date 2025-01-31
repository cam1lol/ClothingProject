import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  name: any; string = 'Camilo Ayala';
  jobTitle: string = 'Software Engineer';
  introduction: string = 'This is an introduction text.';

}
