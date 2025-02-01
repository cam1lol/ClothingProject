import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  title: string = '';
  user: any = {};
  description: string = '';
  education: any = {};
  technologies: string [] = [];
  projects: any [] = [];

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.http.get<any>('/assets/user.json').subscribe(data => {
      this.title = data.title;
      this.user = data.user;
      this.description = data.user.description;
      this.education = data.education;
      this.technologies = data.technologies;
      this.projects = data.user.projects;
      
    })
    console.log("DATOS DE USUARIO",this.education);
    console.log("DATOS DE PROJECTS", this.projects);
  }

  goToLinkedIn() {
    window.open("https://www.linkedin.com/in/camilo1", "_blank");
  }

  goToGitHub() {
    window.open("https://github.com/cam1lol", "_blank");
  }

  goToTwitter() {
    window.open("https://twitter.com/", "_blank");
  }

  viewProject(project: any) {
    console.log("Viewing project: ", project);
  }

  
}
