import { Routes } from '@angular/router';
import { GameDescriptionComponent } from './game-description/game-description.component';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { 
        path: '', 
        title: 'App Home Page',
        component: HomeComponent },
    {
        path: 'game/:id',
        component: GameDescriptionComponent
    }
];
