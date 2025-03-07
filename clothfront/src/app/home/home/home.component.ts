import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Tab {
  id_tab: number;
  title_tab: string;
  percent_tab: number;
  desc_tab: string;
  tags_projects: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = '';
  user: any = {};
  description: string = '';
  education: any[] = [];
  technologies: any[] = [];
  experience: any = {};
  projects: any[] = [];
  tabsInfo: Tab[] = [];
  tags_project: any = [];

  isModalOpen: boolean = false;
  openTab: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('assets/user.json').subscribe(
      (data) => {
        this.title = data.title;
        this.user = data.user;
        this.description = data.user.description;
        this.education = data.user.education;
        this.technologies = data.user.technologies;
        this.experience = data.user.experience;
        this.projects = data.user.projects;
        this.tabsInfo = data.tabsInfo || []; // Evita errores si no existe en el JSON
        this.tags_project = data.tags_project;

        console.log("DATOS DE user.education", this.education);
        console.log("DATOS DE PROJECTS", this.projects);
      },
      (error) => {
        console.error("Error al cargar el JSON:", error);
      }
    );
  }

  openModal(): void {
    this.isModalOpen = true;
    console.log('Modal abierto:', this.isModalOpen);
  }

  closeModal(): void {
    this.isModalOpen = false;
    console.log('Modal cerrado:', this.isModalOpen);
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

  toggleTab(id: number): void {
    this.openTab = this.openTab === id ? null : id;
  }

  get percentAll(): string {
    return this.tabsInfo.length > 0
      ? (this.tabsInfo.reduce((sum, tab) => sum + tab.percent_tab, 0) / this.tabsInfo.length).toFixed(1)
      : '0';
  }
}
