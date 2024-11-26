import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menunav',
  templateUrl: './menunav.component.html',
  styleUrls: ['./menunav.component.css']
})
export class MenunavComponent {
  menuOpen = false;

  // Función para alternar el estado del menú
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
