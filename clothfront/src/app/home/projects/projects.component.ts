import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {  

  currentPage = 1;
  pageSize: number = 3;

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages().length) {
      this.currentPage = page;
    }
  }

  totalPages(): number[] {
    return Array.from({ length: Math.ceil(this.projects.length / this.pageSize) }, (_, i) => i + 1);
  }

  paginatedProjects() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.projects.slice(start, start + this.pageSize);
  }

  projects = [
    {
      name: 'Project 1',
      description: 'Description for project 1',
      image: 'https://cdn.usegalileo.ai/sdxl10/b35d9f4a-045f-437d-96e1-bede863647db.png'
    },
    {
      name: 'Project 2',
      description: 'Description for project 2',
      image: 'https://cdn.usegalileo.ai/sdxl10/8ec3bfc1-c71b-4d1c-aa28-0935964989c6.png'
    },
    {
      name: 'Project 3',
      description: 'Description for project 3',
      image: 'https://cdn.usegalileo.ai/sdxl10/eb454e2c-39de-4dcb-8866-d57dbc942cde.png'
    },
    {
      name: 'Project 4',
      description: 'Description for project 4',
      image: 'https://cdn.usegalileo.ai/sdxl10/0aca52bf-d9e6-45e5-bb43-c5ee614104de.png'
    },
    {
      name: 'Project 5',
      description: 'Description for project 5',
      image: 'https://cdn.usegalileo.ai/sdxl10/0cf06db1-795f-4e84-a552-73d0e6d3b04c.png'
    },
    {
      name: 'Project 6',
      description: 'Description for project 6',
      image: 'https://cdn.usegalileo.ai/sdxl10/311c782b-8370-4d06-9285-8b9fe141976f.png'
    }
  ];
}
