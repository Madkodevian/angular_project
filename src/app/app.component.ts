import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { AvatarComponent } from './avatar/avatar.component';
import { BtnComponent } from './btn/btn.component';
import { IconComponent } from './icon/icon.component';
import { LinkComponent } from './link/link.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AvatarComponent, BtnComponent, IconComponent, LinkComponent], // Importa los componentes independientes aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Corrige el nombre de la propiedad
})
export class AppComponent {
  title = 'angularProject';
}
