import { Component } from '@angular/core';

@Component({
  selector: 'app-menunav',
  templateUrl: './menunav.component.html',
  styleUrls: ['./menunav.component.css'],
})
export class MenunavComponent {
  // Propiedad para controlar la visibilidad de la barra lateral
  isSidebarActive = false;

  // Método para alternar el estado de la barra lateral
  toggleSidebar(): void {
    this.isSidebarActive = !this.isSidebarActive;
  }

  toggleSubMenu(event: Event): void {
    const parentLi = (event.target as HTMLElement).closest('li');
    if (parentLi) {
      parentLi.classList.toggle('active');
      const siblings = Array.from(
        parentLi.parentElement?.children || []
      ).filter((child) => child !== parentLi);

      // Remueve la clase "active" de los elementos hermanos
      siblings.forEach((sibling) => sibling.classList.remove('active'));
    }
  }
}
