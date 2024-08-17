import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive,  RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  RouterLink, RouterLinkActive,CommonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-app-angular';
}
